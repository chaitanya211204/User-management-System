// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//     const navigate = useNavigate();
//   const [data, setData] = useState({ firstname: '', lastname: '', email: '', password: '' });

//   const handleChange = (e) => {
//     setData({...data, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/y1/auth/register', data);
//        navigate('/login'); 
//       alert('Registration Successful');
//     } catch (error) {
//         console.log(error);
//       alert('Registration Failed');
//     }
//   };

//   return (
//     <div>
//       <h1 className='mb-3 text-center'>REGISTER</h1>
//       <div>
//       <form onSubmit={handleSubmit}>
//         <div className='mb-3'>
//                 <label htmlFor='username' className='px-3'>UserName</label>
//                 <input type='text' className='form-control' placeholder='Jan Doe' name='username' value={data.username} onChange={(e) => onInput(e)}></input>
//         </div>
//         <div className="mb-3">
//           <label className='px-3'>First Name:</label>
//           <input type="text" name="firstname" className="form-control" value={data.firstname} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className='px-3'>Last Name:</label>
//           <input type="text" name="lastname" className="form-control" value={data.lastname} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className='px-3'>Email:</label>
//           <input type="email" name="email" className="form-control" value={data.email} onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className='px-3'>Password:</label>
//           <input type="password" name="password" className="form-control" value={data.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-success">Register</button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/y1/auth/register', data);
      alert('Registration Successful');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration Failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-5 rounded-4 shadow-lg bg-white" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="mb-4 text-center fw-bold" style={{ color: '#2a2a72' }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control rounded-pill px-4"
              placeholder="JohnDoe123"
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control rounded-pill px-4"
              value={data.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control rounded-pill px-4"
              value={data.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-pill px-4"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-pill px-4"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn" style={{ backgroundColor: '#2a2a72', color: 'aliceblue', width: '100%', borderRadius: '30px', fontWeight: 'bold' }}>
            Create Account
          </button>
        </form>
        <p className="mt-3 text-center text-muted">
          Already have an account? <a href="/login" style={{ color: '#2a2a72' }}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
