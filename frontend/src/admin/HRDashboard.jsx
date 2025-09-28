// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import { FaUser, FaCalendarAlt, FaProjectDiagram, FaMoneyBill, FaUpload, FaLock, FaSignOutAlt } from 'react-icons/fa';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./HRDashboard.css"; // custom styling, defined below
// import { Link, useNavigate } from 'react-router-dom';

// const HRDashboard = () => {


// //   const menuItems = [
// //     { icon: <FaUsers />, label: "Employees" },
// //     { icon: <FaBullhorn />, label: "Notices" },
// //     { icon: <FaMoneyBill />, label: "Payroll" },
// //     { icon: <FaUserTie />, label: "Recruitment" },
// //     { icon: <FaClipboardList />, label: "Attendance" },
// //     { icon: <FaBook />, label: "Training" },
// //     { icon: <FaChartLine />, label: "Appraisal" },
// //   ];

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div className="sidebar d-flex flex-column text-white">
//         <h4 className="text-center mb-4">AccessPro</h4>
//         <Link className="icon" to="/employees"> <FaUser /> {'Employees'} </Link>
//         <Link className="icon" to="/notice"> <FaCalendarAlt /> {'Notices'} </Link>
//         <Link className="icon" to="/payroll"> <FaProjectDiagram /> {'PayRoll'} </Link>
//         <Link className="icon" to="/recruitment"> <FaMoneyBill /> {'Recruitment'} </Link>
//         <Link className="icon" to="/attendance"> <FaUpload /> Attendance </Link>
//       </div>

//       {/* Main Content */}
//       <div className="content w-100">
//         {/* Topbar */}
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h3>Welcome back, Chaitanya Garg 👋</h3>
//           <div>
//             <Link variant="outline-light" className="me-2" to = "/reset-password">
//               Change Password
//             </Link>
//             <Button variant="danger">Logout</Button>
//           </div>
//         </div>

//         {/* Dashboard Cards */}
//         {/* <div className="row g-3">
//           {menuItems.map((item, index) => (
//             <div className="col-md-4" key={index}>
//               <Card className="card-custom p-3">
//                 <Card.Title>{item.label}</Card.Title>
//                 <Card.Text>
//                   Click to manage {item.label.toLowerCase()}.
//                 </Card.Text>
//               </Card>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HRDashboard;


import React, { useEffect, useState } from 'react';
import { FaUserTie, FaUsers, FaUser, FaBullhorn, FaMoneyCheckAlt, FaClipboardList, FaChartLine, FaSignOutAlt, FaLock } from 'react-icons/fa';
import '../employee/Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/auth/dashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAdmin(res.data.employeeDTO);
      } catch (error) {
        console.error('Failed to fetch admin data', error);
        navigate('/login');
      }
    };

    fetchAdminData();
  }, [navigate]);

  if (!admin) return <p className="text-center text-light mt-5">Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          {admin && admin.fileAddress && (
            <img
              src={`http://localhost:8080${admin.fileAddress}`}
              alt="Admin"
              className="user-photo"
            />
          )}
          <p className="user-name">{admin.firstname}</p>
        </div>
        <div className="sidebar-options">
          <Link className="icon" to="/update-profile"> <FaUser /> Update Profile </Link>
          <Link className="icon" to="/employees"> <FaUsers /> Manage Employees </Link>
          <Link className="icon" to="/notices"> <FaBullhorn /> Notices </Link>
          <Link className="icon" to="/pay-salary"> <FaMoneyCheckAlt /> Payroll </Link>
          <Link className="icon" to="/recruitment"> <FaClipboardList /> Recruitment </Link>
          <Link className="icon" to="/attendance"> <FaChartLine /> Attendance </Link>
          <Link className="icon" to="/appraisal"> <FaUserTie /> Appraisal </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content text-light">
        <div className="dashboard-header">
          <h3>
            Welcome Admin, {admin.firstname} {admin.lastname} 👋
          </h3>
          <div className="header-actions">
            <Link className="btn text-light" to="/reset-password"> <FaLock /> Change Password </Link>
            <button
              className="btn text-light"
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <div className="cards-container text-light">
          <div className="card transparent-card">New Joinings</div>
          <div className="card transparent-card">Upcoming Interviews</div>
          <div className="card transparent-card">
            <h5>Latest Notices</h5>
            <ul className="notices">
              <li><strong>Joining Update:</strong> 5 new hires this week. <span>Jul 8</span></li>
              <li><strong>Meeting:</strong> Monthly review on Jul 10. <span>Jul 6</span></li>
              <li><strong>Payroll Notice:</strong> Salary disbursement on Jul 7. <span>Jul 5</span></li>
            </ul>
            <button className="btn view-all">View All</button>
          </div>
          <div className="card transparent-card">Leave Requests</div>
          <div className="card transparent-card">Appraisal Overview</div>
          <div className="card transparent-card">Training Schedules</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
