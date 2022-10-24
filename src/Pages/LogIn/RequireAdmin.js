// import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin , adminLoading] = useAdmin(user);
   

    const location = useLocation();

    if(loading || adminLoading ){
        return <div    className="flex justify-center items-center h-screen">
            <button    className=" loading btn">Loading...</button>
        </div>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;