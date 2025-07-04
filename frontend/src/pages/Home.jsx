// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [role, setRole] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.style.backgroundColor = isDarkMode ? 'white' : '#2a2a72';
//     document.body.style.color = '#2a2a72';
//   };

//   useEffect(() => {
//     const storedRole = localStorage.getItem('role');
//     setRole(storedRole);
//   }, []);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get('http://localhost:8080/api/admin/users', {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   },
//   withCredentials: true 
// });

//     setUsers(result.data);
//   };

//   const deleteUsers = async (id) => {
//     await axios.delete(`http://localhost:8080/api/admin/user/${id}`);
//     loadUsers();
//   };

//   return (
//     <div className="container-fluid" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
//       <div className="py-4">
//         </div>
//         <table className="table border shadow">
//           <thead>
//             <tr className="bg-dark text-white">
//               <th scope="col">ID</th>
//               <th scope="col">UserName</th>
//               <th scope="col">FirstName</th>
//               <th scope="col">LastName</th>
//               <th scope="col">Email</th>
//               <th scope="col">Action</th>
//               <th scope="col">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{user.username}</td>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   <Link
//                     className="btn btn-outline-primary mx-2"
//                     to={`viewUser/${user.id}`}
//                     style={{ borderColor: '#2a2a72', color: '#2a2a72' }}
//                   >
//                     View
//                   </Link>
//                   <Link
//                     className="btn btn-outline-warning mx-2"
//                     to={`/editUser/${user.id}`}
//                     style={{ borderColor: '#f39c12', color: '#f39c12' }}
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     className="btn btn-danger mx-2"
//                     onClick={() => deleteUsers(user.id)}
//                   >
//                     Delete
//                   </button>
//                   {role === 'ADMIN' && (
//                     <Link
//                       className="btn btn-outline-primary rounded-pill px-4 fw-semibold mx-2"
//                       to="/addUser"
//                       style={{ borderColor: isDarkMode ? 'aliceblue' : '#2a2a72', color: isDarkMode ? 'aliceblue' : '#2a2a72' }}
//                     >
//                       Add User
//                     </Link>
//                   )}
//                 </td>
//                 <td>{user.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; // Custom CSS for gradient & styling

export default function Home() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.background = isDarkMode
      ? 'linear-gradient(to bottom, #1c1c1c, #2e2e2e)'
      : 'white';
    document.body.style.color = isDarkMode ? '#f8f9fa' : '#2a2a72';
  };

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/api/admin/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      withCredentials: true,
    });

    setUsers(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/api/admin/user/${id}`);
    loadUsers();
  };

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
      </div>

      <div className="table-responsive shadow rounded overflow-hidden">
        <table className="table table-dark table-striped table-hover align-middle">
          <thead className="table-gradient text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">First Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td className="d-flex flex-wrap gap-2">
                  <Link className="btn btn-sm btn-outline-primary" to={`/viewUser/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-sm btn-outline-warning" to={`/editUser/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => deleteUsers(user.id)}>
                    Delete
                  </button>
                </td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {role === 'ADMIN' && (
        <div className="text-end mt-4">
          <Link
            className="btn btn-outline-light fw-semibold px-4 rounded-pill"
            to="/addUser"
          >
            ➕ Add User
          </Link>
        </div>
      )}
    </div>
  );
}
