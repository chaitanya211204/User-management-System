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
      console.log(error);
      alert('Registration failed.');
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
          backgroundColor: '#1c1c1c',
          width: '100%',
          maxWidth: '500px',
          border: '1px solid #444'
        }}
      >
        <h2 className="text-center mb-4 fw-semibold" style={{ color: '#f0f0f0' }}>
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          {[
            { label: 'Username', name: 'username', type: 'text', placeholder: 'jan_doe' },
            { label: 'First Name', name: 'firstname', type: 'text', placeholder: 'John' },
            { label: 'Last Name', name: 'lastname', type: 'text', placeholder: 'Doe' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'janDoe@gmail.com' },
          ].map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label text-light">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="form-control rounded-pill px-4"
                placeholder={field.placeholder}
                value={data[field.name]}
                onChange={handleChange}
                required
                style={{
                  backgroundColor: '#2c2c2c',
                  color: 'white',
                  border: '1px solid #555'
                }}
              />
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label text-light">
              Password <small className="text-muted">(Leave empty to auto-generate)</small>
            </label>
            <input
              type="text"
              name="password"
              className="form-control rounded-pill px-4"
              placeholder="Optional"
              value={data.password}
              onChange={handleChange}
              style={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                border: '1px solid #555'
              }}
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-light">Role</label>
            <select
              name="role"
              className="form-select rounded-pill px-4"
              value={data.role}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                border: '1px solid #555'
              }}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
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
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-light">
          Already have an account?{' '}
          <a href="/login" className="fw-medium" style={{ color: '#9ca3af', textDecoration: 'none' }}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
