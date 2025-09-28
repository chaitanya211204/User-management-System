import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import external styles

const SideBar = () => {
  return (
    <div className="layout-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="sidebar-title">EMPLOYEE</h4>
        <Nav className="flex-column sidebar-nav">
          <Link className="sidebar-link" to="/dashboard">🏠 Dashboard</Link>
          <Link className="sidebar-link" to="/attendance">📅 Track Attendance</Link>
          <Link className="sidebar-link" to="/project-progress">📁 Project Progress</Link>
          <Link className="sidebar-link" to="/upload-docx">📤 Upload Documents</Link>
          <Link className="sidebar-link" to="/salary">💰 Salary Pay</Link>
          <Link className="sidebar-link" to="#">➕ More</Link>
        </Nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <Navbar bg="light" expand="lg" className="px-4 py-3 shadow-sm">
          <Container fluid>
            <Navbar.Brand>Welcome Back, Employee</Navbar.Brand>
            <Button variant="outline-primary">Logout</Button>
          </Container>
        </Navbar>

        <Container className="p-4">
          <Row>
            <Col>
              <div className="p-4 bg-white shadow-sm rounded">
                <h2>Dashboard Overview</h2>
                <p className="text-muted">
                  This is your dashboard where you can access all features such as attendance tracking, salary details, project status, and more.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SideBar;
