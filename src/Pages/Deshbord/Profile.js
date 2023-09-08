import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); 




  // console.log(user);
  // console.log(user.photoURL);
  // console.log(user.email);
  useEffect(() => {
    if (user) {
      // Access user information directly from the user object
      const { displayName, photoURL,email } = user;

      setUserInfo({
        displayName,
        photoURL,email
        
      });
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center  text-center" style={{ height: 'calc(100vh - 20%)' }}>
      
      {userInfo ? (
        <div>
          <h1 className="text-xl mb-28">Self Information</h1>
          <div class="avatar online">
                  <div class="w-32 rounded-full">
                  <img src={userInfo.photoURL} />
                  </div>
            </div>
          {/* <img src={userInfo.photoURL} alt="User Profile" /> */}
          <h3 h3 className="text-4xl text-blue-600">{userInfo.displayName}</h3>
          <h3 className="text-2xl text-green-600">{userInfo.email}</h3>
          
        </div>
      ) : (
        <p>User information not available.</p>
      )}
    </div>
  );
};

export default Profile;
