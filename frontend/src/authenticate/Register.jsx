import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/undraw_team_collaboration.svg';

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: 'USER',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', data);
      const { generatedPassword } = response.data;

      if (generatedPassword) {
        alert(`Registration successful.\nYour generated password is: ${generatedPassword}`);
      } else {
        alert('Registration successful.');
      }

      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Panel with SVG */}
      <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e6e6e9' }}>
        <img
          src= {illustration}
          alt="Teamwork Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '400px' }}
        />
        <h2 className="fw-bold text-DARK">AccessPro - HR Portal</h2>
        <p className="text-muted text-center px-5 text-DARK">
          Empower your workforce with intuitive management tools.
        </p>
      </div>

      {/* Right Form Panel - Expanded & Simplified */}
      <div className="col-md-6 d-flex justify-content-center align-items-center text-white p-5" style={{ backgroundColor: '#66666e' }}>
        <form
          onSubmit={handleSubmit}
          className="w-100"
          style={{ maxWidth: '500px' }}
        >
          <h2 className="text-start mb-4 fw-bold text-center text-light">REGISTER HERE</h2>

          {[
            { label: 'Username', name: 'username', type: 'text', placeholder: 'jan_doe' },
            { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'John' },
            { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Doe' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'janDoe@gmail.com' },
          ].map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="form-control rounded-pill px-4 py-2 text-dark border border-secondary"
                placeholder={field.placeholder}
                value={data[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label">
              Password <small className="text-muted">(Leave empty to auto-generate)</small>
            </label>
            <input
              type="text"
              name="password"
              className="form-control rounded-pill px-4 py-2 text-dark border border-secondary"
              placeholder="Optional"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-select rounded-pill px-4 py-2 text-dark border border-secondary"
              value={data.role}
              onChange={handleChange}
              required
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-warning text-dark fw-bold w-100 rounded-pill py-2"
          >
            Create Account
          </button>

          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-warning fw-semibold text-decoration-none">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
