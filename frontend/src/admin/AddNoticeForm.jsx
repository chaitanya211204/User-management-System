import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import illustration from "../assets/New_message.svg";

const AddNoticeForm = () => {
  const [notice, setNotice] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotice((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/notices', notice, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setSuccess('Notice added successfully!');
      setError(null);
      setNotice({ title: '', description: '', date: '' });
    } catch (err) {
      setError('Failed to add notice.');
      setSuccess(null);
      console.error(err);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Side - Illustration */}
      <div
        className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#e6e6e9' }}
      >
        <img
          src= {illustration}
          alt="Notice Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '300px' }}
        />
        <h4 className="text-dark fw-semibold">Keep Everyone Informed</h4>
        <p className="text-muted text-center px-4">
          Posting timely notices ensures better communication and engagement within your organization.
        </p>
      </div>

      {/* Right Side - Form */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white p-5"
        style={{ backgroundColor: '#666666' }}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <h2 className="mb-4 fw-bold text-center">ADD NOTICE</h2>

          {success && <Alert variant="success">{success}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={notice.title}
                onChange={handleChange}
                placeholder="Enter notice title"
                required
                className="rounded-pill px-4 py-2 border border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-light">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={notice.description}
                onChange={handleChange}
                placeholder="Enter notice description"
                required
                className="px-4 py-2 border border-secondary"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-light">Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={notice.date}
                onChange={handleChange}
                required
                className="rounded-pill px-4 py-2 border border-secondary"
              />
            </Form.Group>

            <Button variant="warning" type="submit" className="fw-bold rounded-pill w-100">
              Add Notice
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNoticeForm;
