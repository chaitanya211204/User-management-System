import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import illustration from '../assets/Login-pana.svg';

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
      const response = await axios.post('http://localhost:8080/api/auth/authenticate', data, {
        withCredentials: true,
      });
      const token = response.data.token;
      const decoded = jwtDecode(token);
      const role = decoded.role;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setToast({ message: 'Login Successful!', type: 'success' });
      showToast();
      setTimeout(() => {
        if (role === 'ADMIN') navigate('/home');
        else navigate('/dashboard');
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
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Side with SVG Animation */}
      <div
        className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#e6e6e9' }}
      >
        <img
          src= {illustration}
          alt="Teamwork Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '400px' }}
        />
        <h2 className="mt-4 fw-bold text-dark">Welcome Back!</h2>
        <p className="text-muted text-center px-4">
          Log in to access your dashboard and continue managing your tasks.
        </p>
      </div>

      {/* Right Side with Login Form */}
      <div
        className="col-md-6 d-flex justify-content-center align-items-center text-white p-5"
        style={{ backgroundColor: '#666666' }}
      >
        <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '500px' }}>
          <h2 className="mb-4 fw-bold text-center">SIGN IN</h2>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control rounded-pill px-4 py-2 text-dark border border-secondary"
              placeholder="Enter your username"
              value={data.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control rounded-pill px-4 py-2 text-dark border border-secondary"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning text-dark fw-bold w-100 rounded-pill py-2"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            Don’t have an account?{' '}
            <a href="/" className="text-warning text-decoration-none fw-medium">
              Register
            </a>
          </p>
        </form>
      </div>

      {/* Bootstrap Toast */}
      <div
        ref={toastRef}
        className="toast position-fixed bottom-0 end-0 m-4 text-white"
        role="alert"
        style={{
          zIndex: 1055,
          minWidth: '250px',
          backgroundColor: toast.type === 'success' ? '#198754' : '#dc3545',
        }}
      >
        <div className="toast-body">{toast.message}</div>
      </div>
    </div>
  );
}

export default Login;