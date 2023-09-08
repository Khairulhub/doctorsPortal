// // AdminUsers.js

// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Make an authenticated request to your Express.js API
//     axios.get('/api/all-users', {
//       headers: {
//         Authorization: 'Bearer YOUR_ADMIN_ID_TOKEN', // Replace with the admin's Firebase ID token
//       },
//     })
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Admin Users</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.uid}>
//             {user.displayName} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminUsers;
