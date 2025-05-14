// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link, useParams } from 'react-router-dom';

// export default function Home() {
//     const [users,setUsers] = useState([]);

//     const {id} = useParams();
//     useEffect(() => {
//         loadUsers();
//     },[]);

//     const loadUsers = async() => {
//         const result = await axios.get("http://localhost:8080/api/users");
//         //console.log(result.data);
//         setUsers(result.data);
//     }

//     const deleteUsers = async(id) => {
//         await axios.delete(`http://localhost:8080/api/user/${id}`);
//         loadUsers();
//     }
//   return (
//     <div className='container max-height-100'>
//         <div className='py-4'>
//             <table className="table border shadow ">
//                 <thead>
//                     <tr className='p-3 mb-2 bg-black text-white'>
//                     <th scope="col">ID</th>
//                     <th scope="col">UserName</th>
//                     <th scope="col">FirstName</th>
//                     <th scope="col">LastName</th>
//                     <th scope="col">Email</th>
//                     <th scope='col'>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user, index) => (
//                         <tr key={index}>
//                         <th scope="row">{index + 1}</th>
//                         <td>{user.username}</td>
//                         <td>{user.firstname}</td>
//                         <td>{user.lastname}</td>
//                         <td>{user.email}</td>
//                         <td>
//                             <Link className='btn btn-primary mx-2' to = {`viewUser/${user.id}`}>View</Link>
//                             <Link className='btn btn-outline-primary mx-2' to ={`/editUser/${user.id}`}>Edit</Link>
//                             <Link className='btn btn-danger mx-2' onClick={() => deleteUsers(user.id)}>Delete</Link>
//                         </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/api/users');
    setUsers(result.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/api/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div className="py-4">
        </div>
        <table className="table border shadow">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">UserName</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`viewUser/${user.id}`}
                    style={{ borderColor: '#2a2a72', color: '#2a2a72' }}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-warning mx-2"
                    to={`/editUser/${user.id}`}
                    style={{ borderColor: '#f39c12', color: '#f39c12' }}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUsers(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

