import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: '', password: '' });
  const [toast, setToast] = useState({ message: '', type: '' });
  const toastRef = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/y1/auth/authenticate', data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      setToast({ message: 'Login Successful!', type: 'success' });
      showToast();
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div
        className="p-5 rounded-4 shadow"
        style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: 'white',
          color: '#2a2a72',
          border: '1px solid #2a2a72',
        }}
      >
        <h2 className="mb-4 text-center fw-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-pill px-4"
              value={data.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: '#f0f8ff', color: '#2a2a72' }}
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
              style={{ backgroundColor: '#f0f8ff', color: '#2a2a72' }}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary w-100 rounded-pill fw-bold">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#2a2a72', textDecoration: 'underline' }}>
            Register
          </a>
        </p>
      </div>

      {/* Toast Component */}
      <div
        ref={toastRef}
        className="toast position-fixed bottom-0 end-0 m-4 text-white"
        role="alert"
        style={{ zIndex: 1055, minWidth: '250px', backgroundColor: toast.type === 'success' ? 'green' : 'red' }}
      >
        <div className="toast-body">{toast.message}</div>
      </div>
    </div>
  );
}

export default Login;
