import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import illustration from '../assets/image.svg';

export default function ViewUser() {
  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/admin/getusers/${id}`);
    setUser(result.data);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#e6e6e9',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#333',
        }}
      >
        <div>
          <img
            src={illustration}
            alt="Profile SVG"
            style={{ width: '80%', marginBottom: '2rem' }}
          />
          <h2 style={{ fontWeight: 600 }}>User Profile</h2>
          <p style={{ fontStyle: 'italic' }}>Detailed view at your fingertips.</p>
          <p style={{ fontStyle: 'italic' }}>Clarity. Identity. Insight.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        style={{
          flex: 2,
          backgroundColor: '#666666',
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            padding: '2rem',
            width: '100%',
            maxWidth: '600px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: '#fff',
          }}
        >
          <h3 className="text-center mb-4"> View User Details</h3>
          <div
            className="card mb-3"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'black',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1rem',
            }}
          >
            <div
              className="card-header"
              style={{
                backgroundColor: '#ffffff',
                color: 'black',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
              }}
            >
              <b>User ID: {user.id ?? id}</b>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent text-white">
                <b>Username:</b> {user.username}
              </li>
              <li className="list-group-item bg-transparent text-white">
                <b>First Name:</b> {user.firstname}
              </li>
              <li className="list-group-item bg-transparent text-white">
                <b>Last Name:</b> {user.lastname}
              </li>
              <li className="list-group-item bg-transparent text-white">
                <b>Email:</b> {user.email}
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center">
            <Link
              to="/home"
              className="btn btn-warning rounded-pill fw-bold px-4"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
