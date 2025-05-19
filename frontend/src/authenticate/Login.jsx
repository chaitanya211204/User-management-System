import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: '', password: '' });
  const [toast, setToast] = useState({ message: '', type: '' });
  const toastRef = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/authenticate',data, {withCredentials : true});
      const token = response.data.token;
      const decoded = jwtDecode(token);
      const role = decoded.role;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setToast({ message: 'Login Successful!', type: 'success' });
      showToast();
      setTimeout(() => {
        if (role === 'ADMIN') navigate('/home');
        else navigate('/employee');
      }, 1500);
    } catch (error) {
      console.log(error);
      
      setToast({ message: 'Login Failed. Check your credentials.', type: 'danger' });
      showToast();
    }
  };

  const showToast = () => {
    const toastEl = toastRef.current;
    if (toastEl) {
      const bsToast = new window.bootstrap.Toast(toastEl);
      bsToast.show();
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to right, #0f0f0f, #3a3a3a)',
        color: 'white'
      }}
    >
      <div
        className="p-5 rounded-4 shadow"
        style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: '#1c1c1c',
          border: '1px solid #444'
        }}
      >
        <h2 className="mb-4 text-center fw-bold" style={{ color: '#f0f0f0' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light">Username</label>
            <input
              type="username"
              name="username"
              className="form-control rounded-pill px-4"
              value={data.username}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                border: '1px solid #555'
              }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-pill px-4"
              value={data.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                border: '1px solid #555'
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100 rounded-pill fw-bold"
            style={{
              backgroundColor: '#3a3a3a',
              color: '#fff',
              letterSpacing: '0.5px',
              border: '1px solid #555'
            }}
          >
            Login
          </button>
        </form>
        <p className="mt-3 text-center text-light">
          Don't have an account?{' '}
          <a href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>
            Register
          </a>
        </p>
      </div>

      {/* Toast Component */}
      <div
        ref={toastRef}
        className="toast position-fixed bottom-0 end-0 m-4 text-white"
        role="alert"
        style={{
          zIndex: 1055,
          minWidth: '250px',
          backgroundColor: toast.type === 'success' ? '#198754' : '#dc3545'
        }}
      >
        <div className="toast-body">{toast.message}</div>
      </div>
    </div>
  );
}

export default Login;
