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
