// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// export default function ViewUser() {
//     const [user, setUser] = useState({
//         username: "",
//         firstname: "",
//         lastname:"",
//         email:""
//       })

//     const {id} = useParams();

//     useEffect(() => {
//         loadUser()
//     },[]);

//     const loadUser = async () => {
//         const result = await axios.get(`http://localhost:8080/api/getusers/${id}`)
//         setUser(result.data);
//     }


//   return (
//     <div className='container'>
//       <div className="row">
//         <div className='col md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
//             <h2 className='text-center m-4'> User Details </h2>
//             <div className="card">
//                 <div className="card-header">
//                     Details of User Id: {user.id}
//                     <ul className='list-group list-group-flush'>
//                         <li className='list-group-item'>
//                             <b>UserName: </b>
//                             {user.username}
//                         </li>
//                         <li className='list-group-item'>
//                             <b>FirstName: </b>
//                             {user.firstname} 
//                         </li>
//                         <li className='list-group-item'>
//                             <b>LastName: </b>
//                             {user.lastname} 
//                         </li>
//                         <li className='list-group-item'>
//                             <b>Email: </b>
//                             {user.email}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <Link className='btn btn-primary my-2' to = "/">Back to Home Page</Link>
//         </div>
//       </div>
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/getusers/${id}`);
    setUser(result.data);
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: 'white',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 border rounded p-4 shadow-lg">
          <h2 className="text-center mb-4" style={{ color: '#2a2a72' }}>
            User Details
          </h2>
          <div className="card">
            <div className="card-header" style={{ backgroundColor: '#2a2a72', color: 'aliceblue' }}>
              <b>Details of User ID: {user.id}</b>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>UserName: </b> {user.username}
              </li>
              <li className="list-group-item">
                <b>FirstName: </b> {user.firstname}
              </li>
              <li className="list-group-item">
                <b>LastName: </b> {user.lastname}
              </li>
              <li className="list-group-item">
                <b>Email: </b> {user.email}
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link
              className="btn btn-outline-primary rounded-pill px-4"
              to="/"
              style={{ backgroundColor: '#2a2a72', color: 'aliceblue' }}
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
