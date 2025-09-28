import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import illustration from '../assets/Reset_password.svg'; // You can replace this with your own SVG

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await axios.post(
        'http://localhost:8080/api/auth/reset-password',
        { password: formData.newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      setSuccess('Password reset successfully!');
      setError(null);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError('Failed to reset password.');
      setSuccess(null);
      console.error(err);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Right side - Illustration */}
      <div
        className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#e6e6e9' }}
      >
        <img
          src={illustration}
          alt="Reset Password Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '300px' }}
        />
        <h4 className="text-dark fw-semibold">Secure your account</h4>
        <p className="text-muted text-center px-4">
          Resetting your password helps protect your personal and professional information.
        </p>
      </div>

      {/* Left side - Form */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-5"
        style={{ backgroundColor: '#666666' }}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <h2 className="mb-4 fw-bold text-center">RESET PASSWORD</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            {[
              { label: 'New Password', name: 'newPassword' },
              { label: 'Confirm Password', name: 'confirmPassword' },
            ].map((field, index) => (
              <Form.Group className="mb-3 text-dark" key={index}>
                <Form.Label className="text-dark">{field.label}</Form.Label>
                <Form.Control
                  type="password"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required
                  className="rounded-pill px-4 py-2 text-dark border border-secondary"
                />
              </Form.Group>
            ))}

            <div className="d-flex justify-content-between">
              <Button type="submit" variant="warning" className="fw-bold rounded-pill px-4">
                Reset
              </Button>
              <Button
                variant="secondary"
                onClick={() => navigate('/dashboard')}
                className="rounded-pill px-4"
              >
                Cancel
              </Button>
            </div>

            <p className="mt-4 text-center">
              <a
                href="/dashboard"
                className="text-light text-decoration-none fw-medium"
                style={{ opacity: 0.85 }}
              >
                ← Back to Dashboard
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
