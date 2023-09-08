import React, { useEffect } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const LogIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {register, formState: { errors },handleSubmit } = useForm();
  
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    // password reset or forgate password

    const [sendPasswordResetEmail, sending, passwordError] = useSendPasswordResetEmail(auth);

    let singInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from || '/task';

    const [token] = useToken(user || gUser)
    useEffect(() => {
      if (token) {
        console.log(user||gUser);
        navigate(from, {replace: true})
    }
    }, [token, navigate, from])

    if(error || gError ||passwordError){
        singInError = <p    className="text-red-500">{error?.message || gError?.message || passwordError?.message}</p>
    }



    if(gLoading || loading ||sending){
        return <div    className="flex justify-center items-center h-screen">
            <button    className=" loading btn">Loading...</button>
        </div>
    }
   
    
    const onSubmit =async data => {
      console.log(data)
       await signInWithEmailAndPassword(auth, data.email, data.password)
      
      };

      const forgetPassword = async data => {
        await sendPasswordResetEmail(data.email);
      }






  return (
    <div    className="flex justify-center items-center h-screen">
      <div    className="card w-96 bg-base-100 shadow-xl">
       <div    className="card-body">
          <h2    className="text-center text-3xl font-bold ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
               <div    className="form-control w-full max-w-xs">
                 <label    className="label">
                <span lass="label-text">Email</span>
             
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
                  className="input input-bordered w-full max-w-xs" />
                <label    className="label">{ errors.email?.type==='required' && <span    className="label-text-alt text-red-500">{errors.email.message}</span>}
                { errors.email?.type==='pattern' && <span    className="label-text-alt text-red-500">{errors.email.message}</span>}</label>
               
                 </div>

                 {/* password filed */}


               <div    className="form-control w-full max-w-xs">
                 <label    className="label">
                <span    className="label-text">Password</span>
             
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
                  className="input input-bordered w-full max-w-xs" />
                <label    className="label">
                    { errors.password?.type==='required' && <span    className="label-text-alt text-red-500">{errors.password.message}</span>}
                    { errors.email?.type==='pattern' && <span    className="label-text-alt text-red-500">{errors.password.message}</span>}
                    <Link onClick={forgetPassword} lass="label-text">Forget Password</Link>

                </label>
               
                 </div>

                 {singInError}
                <input type="submit"    className="btn btn-primary w-full max-w-lg text-white text-bold" value="LogIn" />
          </form>
          <p>New to Task Manager? <Link to="/signup"    className="text-primary">Create new account</Link></p>
        <div    className="divider">OR</div>
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
