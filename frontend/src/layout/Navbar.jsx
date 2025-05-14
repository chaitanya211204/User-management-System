// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-black text-center">
//             <div className="container-fluid">
//                 <Link className="navbar-brand " to={"/"}>User Management System</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <Link className='btn btn-outline-light text-white-500' to = "/addUser"> Add User</Link>
//             </div>
//         </nav>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'white' : '#2a2a72'; // Dark Mode bg
    document.body.style.color = isDarkMode ? '#2a2a72' : 'aliceblue'; // Dark mode text
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'} shadow-sm`} style={{ backgroundColor: isDarkMode ? '#2a2a72' : 'white', borderBottom: '2px solid #2a2a72' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: isDarkMode ? 'aliceblue' : '#2a2a72', fontSize: '1.5rem' }}>
          User Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {/* Dropdown for user-related actions */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: isDarkMode ? 'aliceblue' : '#2a2a72' }}
              >
                User
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/login" style={{ color: '#2a2a72' }}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register" style={{ color : '#2a2a72' }}>
                    Register
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Add User Button */}
          <Link
            className="btn btn-outline-primary rounded-pill px-4 fw-semibold mx-2"
            to="/addUser"
            style={{ borderColor: isDarkMode ? 'aliceblue' : '#2a2a72', color: isDarkMode ? 'aliceblue' : '#2a2a72' }}
          >
            Add User
          </Link>

          {/* Dark Mode Toggle */}
          <button
            className="btn btn-outline-light rounded-circle p-2"
            onClick={toggleDarkMode}
            style={{ backgroundColor: isDarkMode ? '#2a2a72' : 'white', color: isDarkMode ? 'aliceblue' : '#2a2a72' }}
          >
            <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`} style={{ fontSize: '1.5rem' }} />
          </button>
        </div>
      </div>
    </nav>
  );
}
