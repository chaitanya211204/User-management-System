import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './updateProfileForm.css';  

const UpdateProfileForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    location: '',
    designation: '',
    department: '',
    hireDate: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
        location: formData.location,
        department: formData.department,
        designation: formData.designation,
        hireDate: formData.hireDate
    };
    try {

      await axios.post(
        'http://localhost:8080/api/auth/update-profile',
        payload,
        { headers: 
            {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',            
            } 
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
    <div className="update-profile-container">
      <Container>
        <Card className="update-profile-card shadow">
          <h3 className="text-center mb-4 text-light">Update Profile</h3>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your location"
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Designation</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Enter your designation"
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department"
                required
                className="form-input"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-light">Hire Date</Form.Label>
              <Form.Control
                type="date"
                name="hireDate"
                value={formData.hireDate}
                onChange={handleChange}
                required
                className="form-input"
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit" className="btn-gradient">
                Update Profile
              </Button>
              <Button variant="secondary" onClick={() => navigate('/dashboard')}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default UpdateProfileForm;
