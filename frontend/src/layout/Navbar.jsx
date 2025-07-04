import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './navbar.css'; // optional for further style tuning

export default function Navbar() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
    navigate('/login');
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 70 }}
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        background: 'linear-gradient(to right, #0f0f0f, #3a3a3a)',
        borderBottom: '1px solid #666',
        padding: '0.7rem 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{ fontSize: '1.6rem', letterSpacing: '1px' }}
        >
        AccessPro
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </motion.nav>
  );
}
