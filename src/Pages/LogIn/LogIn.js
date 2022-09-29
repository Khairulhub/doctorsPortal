import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../Firebase.init";


const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-3xl font-bold ">Login</h2>
          <form>

          </form>
          <div class="divider">OR</div>
          <button
          onClick={() => signInWithGoogle()}
           className="btn btn-accent w-full">
           Continue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
