import React, { useEffect, useState } from 'react';

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from your server
    fetch('/alluser')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        // console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.uid}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUser;
