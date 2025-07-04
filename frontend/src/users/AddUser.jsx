// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function AddUser() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     username: '',
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const { username, firstname, lastname, email, password } = user;

//   const onInput = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8080/api/admin/user', user, {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       }
//     });
//     navigate('/home');
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{
//         background: 'linear-gradient(to right, #0f0f0f, #3a3a3a)',
//         padding: '2rem'
//       }}
//     >
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 60 }}
//         className="p-5 rounded-4 shadow-lg"
//         style={{
//           backgroundColor: '#1f1f1f',
//           width: '100%',
//           maxWidth: '500px',
//           color: '#f5f5f5',
//           border: '1px solid #333'
//         }}
//       >
//         <h2 className="text-center mb-4 fw-bold text-white">Add User</h2>
//         <form onSubmit={onSubmit}>
//           {[
//             { label: 'Username', name: 'username', type: 'text', placeholder: 'Jan Doe' },
//             { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'Jan' },
//             { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Doe' },
//             { label: 'Email', name: 'email', type: 'email', placeholder: 'jan21doe@gmail.com' }
//           ].map((field, idx) => (
//             <div className="mb-3" key={idx}>
//               <label htmlFor={field.name} className="form-label text-white">
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 className="form-control rounded-pill px-4"
//                 placeholder={field.placeholder}
//                 value={user[field.name]}
//                 onChange={onInput}
//                 required
//                 style={{
//                   backgroundColor: '#2c2c2c',
//                   border: '1px solid #555',
//                   color: '#fff'
//                 }}
//               />
//             </div>
//           ))}

//           <div className="mb-4">
//             <label className="form-label text-white">
//               Password <small className="text-muted">(Leave empty to auto-generate)</small>
//             </label>
//             <div className="input-group">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 name="password"
//                 className="form-control rounded-start-pill px-4"
//                 placeholder="Optional"
//                 value={password}
//                 onChange={onInput}
//                 style={{
//                   backgroundColor: '#2c2c2c',
//                   border: '1px solid #555',
//                   color: '#fff'
//                 }}
//               />
//               <button
//                 type="button"
//                 className="btn btn-outline-secondary rounded-end-pill"
//                 onClick={togglePassword}
//                 style={{
//                   border: '1px solid #555',
//                   backgroundColor: '#2c2c2c',
//                   color: '#ccc'
//                 }}
//               >
//                 {showPassword ? 'Hide' : 'Show'}
//               </button>
//             </div>
//           </div>

//           <div className="d-flex justify-content-between">
//             <button
//               type="submit"
//               className="btn rounded-pill fw-bold px-4"
//               style={{
//                 background: 'linear-gradient(to right, #0f0f0f, #3a3a3a)',
//                 color: 'white',
//                 border: 'none'
//               }}
//             >
//               Submit
//             </button>
//             <Link
//               to="/"
//               className="btn btn-outline-danger rounded-pill px-4 fw-bold"
//               style={{
//                 borderColor: '#e74c3c',
//                 color: '#e74c3c'
//               }}
//             >
//               Cancel
//             </Link>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import illustration from '../assets/addTasks.svg';

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const { username, firstname, lastname, email, password } = user;

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/admin/user', user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
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
          color: '#333'
        }}
      >
        <div>
          <img
            src={illustration}
            alt="User Add SVG"
            style={{ width: '80%', marginBottom: '2rem' }}
          />
          <h2 style={{ fontWeight: 600 }}>Add New Talent</h2>
          <p style={{ fontStyle: 'italic' }}>Empower teams by adding users seamlessly.</p>
          <p style={{ fontStyle: 'italic' }}>Simple. Secure. Efficient.</p>
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
          alignItems: 'center'
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
            color: '#fff'
          }}
        >
          <h3 className="text-center mb-4">👤 Add User</h3>
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
                  className="form-control rounded-pill px-4"
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

            <div className="mb-4">
              <label className="form-label text-white">
                Password <small className="text-muted">(Leave empty to auto-generate)</small>
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-control rounded-start-pill px-4"
                  placeholder="Optional"
                  value={password}
                  onChange={onInput}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    border: '1px solid #ccc',
                    color: '#fff'
                  }}
                />
                <button
                  type="button"
                  className="btn btn-outline-light rounded-end-pill"
                  onClick={togglePassword}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

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
