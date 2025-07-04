// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import './Dashboard.css';
// import { Navigate, useNavigate } from 'react-router-dom';
// const Dashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   // console.log(localStorage.getItem('token'));
//   const loadUsers = async () => {
//     try {
//       const result = await axios.get('http://localhost:8080/api/auth/dashboard', {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         withCredentials: false,
//       });      
//       setData({ user: result.data.employeeDTO });
//       setLoading(false);
//     }catch (error) {
//       console.log(error)
//       setLoading(false);
//     }
    
//   };

//   if (loading) return <div className="text-light p-5">Loading...</div>;
//   if (!data) return <div className="text-danger p-5">Failed to load data.</div>;

//   const { user } = data;

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const listVariants = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//   <div className="dashboard-container">
//     <Container fluid>
//       <h2 className="mb-4">👋 Welcome back, {user.firstname}!</h2>

//       <Row>
//         <Col md={4}>
//           <Card className="mb-4 shadow-sm dashboard-card">
//             <Card.Body className="text-center">
//               <img
//                 src={user.profilePic}
//                 alt="Profile"
//                 className="rounded-circle mb-3"
//                 width="100"
//                 height="100"
//               />
//               <h5>{user.firstname}</h5>
//               {/* <p className="text-muted mb-1">{user.designation}</p> */}
//               {/* <p className="text-muted">{user.department}</p> */}
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="mb-4 shadow-sm dashboard-card">
//             <Card.Body>
//               <h5 className="mb-3">⚡ Quick Links</h5>
//               <Button variant="primary" className="mb-2 w-100">
//                 Apply for Leave
//               </Button>
//               <Button variant="secondary" className="w-100" onClick={() => navigate('/update-profile')}>
//                 Update Profile
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="mb-4 shadow-sm dashboard-card">
//             <Card.Body>
//               <h5 className="mb-3">🎉 Upcoming Work Anniversaries</h5>
//               <ListGroup variant="flush">
//                 {/* {anniversaries.map((item, idx) => (
//                   <ListGroup.Item key={idx} className="bg-transparent border-0 text-light">
//                     {item.name} — <strong>{new Date(item.date).toDateString()}</strong>
//                   </ListGroup.Item>
//                 ))} */}
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <Row>
//         <Col>
//           <Card className="shadow-sm dashboard-card">
//             <Card.Body>
//               <h5 className="mb-3">📢 Announcements</h5>
//               <ListGroup variant="flush">
//                 {/* {announcements.map((note, idx) => (
//                   <ListGroup.Item key={idx} className="bg-transparent border-0 text-light">
//                     {note}
//                   </ListGroup.Item>
//                 ))} */}
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );
// };

// export default Dashboard;


// File: EmployeeDashboard.js

import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaProjectDiagram, FaMoneyBill, FaUpload, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './dashboard.css'; // We'll write styling here
import UpdateProfileForm from './UpdateProfileForm';
import { Navigate, redirect } from 'react-router-dom';

const leaveData = [
  { name: 'Taken', value: 8, color: '#ff6b6b' },
  { name: 'Left', value: 12, color: '#1dd1a1' },
];

const EmployeeDashboard = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarExpanded ? 'expanded' : ''}`} onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
        <div className="profile">
          <img src="/user.png" alt="User" className="user-photo" />
          {sidebarExpanded && <p className="user-name">John Doe</p>}
        </div>
        <div className="sidebar-options">
          <a className="icon" href='/update-profile'> <FaUser/> {sidebarExpanded && 'Update Profile'} </a>
          <a className="icon" href='/attendance'> <FaCalendarAlt /> {sidebarExpanded && 'Track Attendance'} </a>
          <a className="icon" href='/project-progress'> <FaProjectDiagram /> {sidebarExpanded && 'Project Progress'} </a>
          <a className="icon" href='/salary'> <FaMoneyBill /> {sidebarExpanded && 'Salary Pay'} </a>
          <a className="icon" href='/upload-docx' > <FaUpload /> {sidebarExpanded && 'Upload Documents'} </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content text-light">
        {/* Header */}
        <div className="dashboard-header">
          <h3>Welcome back, John 👋</h3>
          <div className="header-actions">
            <button className="btn text-light"> <FaLock /> Change Password </button>
            <button className="btn text-light"> <FaSignOutAlt /> Logout </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-container text-light">
          <div className="card transparent-card text-light">Apply for Leave</div>
          <div className="card transparent-card text-light">Upcoming Work Anniversaries</div>
          <div className="card transparent-card text-light">
            <h5>Recent HR Notices</h5>
            <ul className="notices text-light">
              <li><strong>Policy Update:</strong> Leave Policy extended. <span>Jul 2</span></li>
              <li><strong>Holiday:</strong> Office closed on Jul 4. <span>Jul 1</span></li>
              <li><strong>Announcement:</strong> New hiring process. <span>Jun 30</span></li>
            </ul>
            <button className="btn view-all text-light">View All</button>
          </div>
          <div className="card transparent-card text-light">
            <h5>Leave Status</h5>
            <PieChart width={200} height={200}>
              <Pie
                data={leaveData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {leaveData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="card transparent-card text-light">Team Members</div>
          <div className="card transparent-card text-light">Projects Alloted</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
