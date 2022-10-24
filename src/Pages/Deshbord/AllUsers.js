import React from 'react';

import { useQuery } from 'react-query';
import MainButton from '../Shared/MainButton';
import UserRow from './UserRow';
/**
 
 */
const AllUsers = () => {
    const {data:users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
      method:'GET',
      headers:{
          authorization:`Bearer ${localStorage.getItem('accessToken')}`
      },
  }).then(res => res.json()));
    
    if(isLoading){
        return <MainButton>Loading...</MainButton>
    }

    //
    return (
        <div>
             <h2  className="text-blue-300 my-6 text-2xl">All Users: {users.length}</h2> 
             <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Remove User</th>
            
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => 
              <UserRow
              key={user._id}
                user={user}
                refetch={refetch}
              ></UserRow>)
              }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;