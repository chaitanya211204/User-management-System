// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams, Link } from 'react-router-dom';

// export default function EditUser() {
//   let navigate = useNavigate();
//   const { id } = useParams();

//   const [user, setUser] = useState({
//     username: '',
//     firstname: '',
//     lastname: '',
//     email: '',
//   });

//   const { username, firstname, lastname, email } = user;

//   const onInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8080/api/admin/getusers/${id}`);
//     setUser(result.data);
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8080/api/admin/users/${id}`, user);
//     navigate('/home');
//   };

//   return (
//     <div
//       className="container-fluid"
//       style={{ backgroundColor: 'white', minHeight: '100vh', padding: '2rem' }}
//     >
//       <div className="row justify-content-center">
//         <div className="col-md-6 col-lg-4 border rounded p-4 shadow-lg">
//           <h2 className="text-center mb-4" style={{ color: '#2a2a72' }}>
//             Edit User
//           </h2>
//           <form onSubmit={onSubmit}>
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 UserName
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Jan Doe"
//                 name="username"
//                 value={username}
//                 onChange={onInput}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="firstname" className="form-label">
//                 FirstName
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Jan"
//                 name="firstname"
//                 value={firstname}
//                 onChange={onInput}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="lastname" className="form-label">
//                 LastName
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Doe"
//                 name="lastname"
//                 value={lastname}
//                 onChange={onInput}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="jan21doe@gmail.com"
//                 name="email"
//                 value={email}
//                 onChange={onInput}
//                 required
//               />
//             </div>
//             <div className="d-flex justify-content-between">
//               <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
//                 Submit
//               </button>
//               <Link
//                 to="/"
//                 className="btn btn-outline-danger rounded-pill px-4"
//                 style={{ color: '#e74c3c', borderColor: '#e74c3c' }}
//               >
//                 Cancel
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import illustration from '../assets/editing.svg';

export default function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  const { username, firstname, lastname, email } = user;

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/admin/getusers/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/admin/users/${id}`, user);
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#e6e6e9',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#333',
        }}
      >
        <div>
          <img
            src= {illustration}
            alt="Edit User SVG"
            style={{ width: '80%', marginBottom: '2rem' }}
          />
          <h2 style={{ fontWeight: 600 }}>Edit User Profile</h2>
          <p style={{ fontStyle: 'italic' }}>Keep information accurate and updated.</p>
          <p style={{ fontStyle: 'italic' }}>Smart. Fast. Editable.</p>
        </div>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 2,
          backgroundColor: '#666666',
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            padding: '2rem',
            width: '100%',
            maxWidth: '600px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: '#fff',
          }}
        >
          <h3 className="text-center mb-4">✏️ Edit User</h3>
          <form onSubmit={onSubmit}>
            {[
              { label: 'Username', name: 'username', type: 'text', placeholder: 'jan_doe' },
              { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'Jan' },
              { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Doe' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'jan@example.com' }
            ].map((field, idx) => (
              <div className="mb-3" key={idx}>
                <label htmlFor={field.name} className="form-label text-white">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  className="form-control rounded-pill px-4 bg-light"
                  placeholder={field.placeholder}
                  value={user[field.name]}
                  onChange={onInput}
                  required
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    border: '1px solid #ccc',
                    color: '#fff'
                  }}
                />
              </div>
            ))}

            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className="btn btn-warning rounded-pill fw-bold px-4"
              >
                Submit
              </button>
              <Link
                to="/home"
                className="btn btn-danger rounded-pill px-4 fw-bold"
              >
                Cancel
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
