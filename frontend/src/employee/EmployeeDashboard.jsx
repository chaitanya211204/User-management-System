import React, { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaProjectDiagram, FaMoneyBill, FaUpload, FaLock, FaSignOutAlt } from 'react-icons/fa';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const leaveData = [
  { name: 'Taken', value: 8, color: '#ff6b6b' },
  { name: 'Left', value: 12, color: '#1dd1a1' },
];

const EmployeeDashboard = () => {

  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/auth/dashboard', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(res.data.employeeDTO);
        console.log(res.data.employeeDTO);
        console.log(res.data.employeeDTO.fileAddress);
        
      } catch (error) {
        console.error("Failed to fetch user data", error);
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user) return <p className="text-center text-light mt-5">Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div
        className={"sidebar"}
      >
        <div className="profile">
          {user && user.fileAddress && (
            <img
              src={`http://localhost:8080${user.fileAddress}`}
              alt="User"
              className="user-photo"
            />
          )}
          {<p className="user-name">{user.firstname}</p>}
        </div>
        <div className="sidebar-options">
          <Link className="icon" to="/update-profile"> <FaUser /> {'Update Profile'} </Link>
          <Link className="icon" to="/attendance"> <FaCalendarAlt /> {'Track Attendance'} </Link>
          <Link className="icon" to="/project-progress"> <FaProjectDiagram /> {'Project Progress'} </Link>
          <Link className="icon" to="/salary"> <FaMoneyBill /> {'Salary Pay'} </Link>
          <Link className="icon" to="/upload-docx"> <FaUpload /> Upload Documents </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content text-light"> 
        {/* Header */}
        <div className="dashboard-header">
          <h3>
            Welcome back, {user.firstname} {user.lastname} 👋
          </h3>
          <div className="header-actions">
            <Link className="btn text-light" to= "/reset-password"> <FaLock /> Change Password </Link>
            <button className="btn text-light" onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cards-container text-light">
          <div className="card transparent-card">Apply for Leave</div>
          <div className="card transparent-card">Upcoming Work Anniversaries</div>
          <div className="card transparent-card">
            <h5>Recent HR Notices</h5>
            <ul className="notices">
              <li><strong>Policy Update:</strong> Leave Policy extended. <span>Jul 2</span></li>
              <li><strong>Holiday:</strong> Office closed on Jul 4. <span>Jul 1</span></li>
              <li><strong>Announcement:</strong> New hiring process. <span>Jun 30</span></li>
            </ul>
            <button className="btn view-all">View All</button>
          </div>
          <div className="card transparent-card">
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
          <div className="card transparent-card">Team Members</div>
          <div className="card transparent-card">Projects Allotted</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
