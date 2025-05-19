import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from backend
    axios.get('/api/user/profile'),{
        headers : {Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
      .then(res => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load user data", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  }

  if (!userData) {
    return <div className="text-danger mt-4 text-center">Unable to load user information.</div>;
  }

  const {
    firstname,
    lastname,
    username,
    email,
    age,
    gender,
    department
  } = userData;

  return (
    <Card className="p-4 shadow-lg bg-light">
      <h4 className="mb-4 text-primary">User Profile</h4>
      <Row>
        <Col md={6}>
          <p><strong>First Name:</strong> {firstname}</p>
          <p><strong>Last Name:</strong> {lastname}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
        </Col>
        <Col md={6}>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Department:</strong> {department}</p>
        </Col>
      </Row>
      <div className="text-end mt-3">
        <Button variant="primary" onClick={() => alert("Redirect to update form")}>
          Update Profile
        </Button>
      </div>
    </Card>
  );
};

export default UserProfile;
