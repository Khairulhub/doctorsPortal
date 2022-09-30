import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {register, formState: { errors },handleSubmit } = useForm();
  
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);



    let singInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from || '/appointment';




    if(error || gError){
        singInError = <p className="text-red-500">{error?.message || gError?.message}</p>
    }



    if(gLoading || loading){
        return <div className="flex justify-center items-center h-screen">
            <button className=" loading btn">Loading...</button>
        </div>
    }
    if (user||gUser) {
        console.log(user||gUser);
        navigate(from, {replace: true})
    }
    
    const onSubmit = data => {
      console.log(data)
      signInWithEmailAndPassword(auth, data.email, data.password)
      };






  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-3xl font-bold ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                 <label class="label">
                <span class="label-text">Email</span>
             
                 </label>
                 <input  {...register("email", { 
                    required:{
                        value:true,
                        message:"Email is required"
                    },
                    pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide a valid email"
                 } })} 

                 type="email" placeholder="Your email" 
                class="input input-bordered w-full max-w-xs" />
                <label className="label">{ errors.email?.type==='required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                { errors.email?.type==='pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}</label>
               
                 </div>

                 {/* password filed */}


                <div class="form-control w-full max-w-xs">
                 <label class="label">
                <span class="label-text">Password</span>
             
                 </label>
                 <input  {...register("password", { 
                    required:{
                        value:true,
                        message:"Password is required"
                    },
                    minLength: {
                    value: 6,
                    message: "Must be 6 characters"
                 } })} 

                 type="password" placeholder="Password" 
                class="input input-bordered w-full max-w-xs" />
                <label className="label">
                    { errors.password?.type==='required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    { errors.email?.type==='pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
               
                 </div>

                 {singInError}
                <input type="submit" className="btn btn-primary w-full max-w-lg text-white text-bold" value="LogIn" />
          </form>
          <p>New to Doctors Portal? <Link to="/signup" className="text-primary">Create new account</Link></p>
          <div class="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent w-full"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
