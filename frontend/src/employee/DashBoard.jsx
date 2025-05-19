import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Dashboard.css';
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  // console.log(localStorage.getItem('token'));
  const loadUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/auth/dashboard', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        withCredentials: false,
      });      
      setData({ user: result.data.employeeDTO });
      setLoading(false);
    }catch (error) {
      console.log(error)
      setLoading(false);
    }
    
  };

  if (loading) return <div className="text-light p-5">Loading...</div>;
  if (!data) return <div className="text-danger p-5">Failed to load data.</div>;

  const { user } = data;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
  <div className="dashboard-container">
    <Container fluid>
      <h2 className="mb-4">👋 Welcome back, {user.firstname}!</h2>

      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm dashboard-card">
            <Card.Body className="text-center">
              <img
                src={user.profilePic}
                alt="Profile"
                className="rounded-circle mb-3"
                width="100"
                height="100"
              />
              <h5>{user.firstname}</h5>
              {/* <p className="text-muted mb-1">{user.designation}</p> */}
              {/* <p className="text-muted">{user.department}</p> */}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm dashboard-card">
            <Card.Body>
              <h5 className="mb-3">⚡ Quick Links</h5>
              <Button variant="primary" className="mb-2 w-100">
                Apply for Leave
              </Button>
              <Button variant="secondary" className="w-100" onClick={() => navigate('/update-profile')}>
                Update Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4 shadow-sm dashboard-card">
            <Card.Body>
              <h5 className="mb-3">🎉 Upcoming Work Anniversaries</h5>
              <ListGroup variant="flush">
                {/* {anniversaries.map((item, idx) => (
                  <ListGroup.Item key={idx} className="bg-transparent border-0 text-light">
                    {item.name} — <strong>{new Date(item.date).toDateString()}</strong>
                  </ListGroup.Item>
                ))} */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="shadow-sm dashboard-card">
            <Card.Body>
              <h5 className="mb-3">📢 Announcements</h5>
              <ListGroup variant="flush">
                {/* {announcements.map((note, idx) => (
                  <ListGroup.Item key={idx} className="bg-transparent border-0 text-light">
                    {note}
                  </ListGroup.Item>
                ))} */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
};

export default Dashboard;
