import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Deshbord = () => {
  const [user ] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h2 className='text-5xl text-primary'>Deshbord</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/deshbord'>My Appointments</Link></li>
      <li><Link to='/deshbord/review'>My Review</Link></li>
      <li><Link to='/deshbord/history'>My History</Link></li>
      {admin && <li><Link to='/deshbord/users'>All Users</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Deshbord;
