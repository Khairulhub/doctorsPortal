import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {register, formState: { errors },handleSubmit } = useForm();
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user||gUser);

  const navigate = useNavigate();

// email varification
const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);

    let signUpError;


    if(error || gError ||updateError || emailError){
        signUpError = <p    className="text-red-500">{error?.message || gError?.message || updateError?.message || emailError?.message}</p>
    }



    if(gLoading || loading || updating || sending){
        return <div    className="flex justify-center items-center h-screen">
            <button    className=" loading btn">Loading...</button>
        </div>
    }


    if (token) {
        navigate('/appointment');
    }

    
    
    const onSubmit =async data => {
      // console.log(data)
      await createUserWithEmailAndPassword(data.email, data.password)
      await updateProfile({ displayName: data.name });
      await sendEmailVerification();
      // , photoURL

      // navigate('/appointment')
      };


    return (
        <div    className="flex justify-center items-center h-screen">
    <div    className="card w-96 bg-base-100 shadow-xl">
      <div    className="card-body">
          <h2 class ="text-center text-3xl font-bold ">SignUp</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div    className="form-control w-full max-w-xs">
                 <label    className="label">
                <span    className="label-text">Name</span>
             
                 </label>
                 <input  {...register("name", { 
                    required:{
                        value:true,
                        message:"Name is required"
                    }
                   })} 

                 type="text" placeholder="Your name" 
                  className="input input-bordered w-full max-w-xs" />
                <label    className="label">
                    { errors.name?.type === 'required' && <span    className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
               
                 </div>
                 {/* email filed */}
              <div    className="form-control w-full max-w-xs">
                 <label    className="label">
                <span    className="label-text">Email</span>
             
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
                <label    className="label">
                { errors.email?.type==='required' && <span    className="label-text-alt text-red-500">{errors.email.message}</span>}
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
                    { errors.password?.type==='minLength' && <span    className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
               
                 </div>

                 {signUpError}
                <input type="submit"    className="btn btn-primary w-full max-w-lg text-white text-bold" value="SignUp" />
          </form>
          <p>Already have an Doctors Portal? <Link to="/login"    className="text-primary">Login Please</Link></p>
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

export default SignUp;