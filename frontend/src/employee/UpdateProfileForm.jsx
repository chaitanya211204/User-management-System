import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/Status update.svg';

const UpdateProfileForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    designation: '',
    department: '',
    hireDate: '',
    gender: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };

    try {
      await axios.post(
        'http://localhost:8080/api/auth/update-profile',
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            withCredentials: true,
          },
        }
      );
      setSuccess('Profile updated successfully!');
      setError(null);
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (err) {
      setError('Failed to update profile.');
      setSuccess(null);
      console.log(err);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Right side - Illustration */}
      <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#e6e6e9' }} >
        <img src={illustration} alt="Update Illustration" className="img-fluid mb-4" style={{ maxHeight: '300px' }}/>
        <h4 className="text-dark fw-semibold">Keep your profile updated</h4>
        <p className="text-muted text-center px-4">
          Keeping your data current helps streamline HR operations and improve communication.
        </p>
      </div>
      {/* Left side - Form */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-5"
        style={{ backgroundColor: '#666666' }}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <h2 className="mb-4 fw-bold text-center">UPDATE PROFILE</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            {[
              { label: 'Location', name: 'location' },
              { label: 'Designation', name: 'designation' },
              { label: 'Department', name: 'department' },
              { label: 'Hire Date', name: 'hireDate', type: 'date' },
              { label: 'Gender', name: 'gender' },
            ].map((field, index) => (
              <Form.Group className="mb-3" key={index}>
                <Form.Label className="text-light">{field.label}</Form.Label>
                <Form.Control
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                  required
                  className="rounded-pill px-4 py-2 text-white border border-secondary"
                />
              </Form.Group>
            ))}

            <div className="d-flex justify-content-between">
              <Button variant="warning" type="submit" className="fw-bold rounded-pill px-4">
                Update
              </Button>
              <Button variant="secondary" onClick={() => navigate('/dashboard')} className="rounded-pill px-4">
                Cancel
              </Button>
            </div>

            <p className="mt-4 text-center">
              <a href="/dashboard" className="text-light text-decoration-none fw-medium" style={{ opacity: 0.85 }}> ← Back to Dashboard </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
