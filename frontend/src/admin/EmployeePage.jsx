import React, { useEffect, useState } from 'react';
import axios from 'axios';
import illustration from '../assets/Status update.svg';
import './EmployeePage.css'; // <- custom styles for glass effect

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/auth/employees', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setEmployees(res.data);
        console.log(res.data);
      } catch (err) {
        console.error('Error fetching employees:', err);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left - Illustration */}
      <div
        className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: '#e6e6e9' }}
      >
        <img
          src={illustration}
          alt="Illustration"
          className="img-fluid mb-4"
          style={{ maxHeight: '300px' }}
        />
        <h4 className="text-dark fw-semibold">Meet Our Team</h4>
        <p className="text-muted text-center px-4">
          Get to know your fellow team members and their departments.
        </p>
      </div>

      {/* Right - Employee Cards */}
      <div
        className="col-md-6 d-flex flex-column text-white p-5 overflow-auto"
        style={{ backgroundColor: '#666666' }}
      >
        <h2 className="mb-4 fw-bold text-center">EMPLOYEES</h2>

        <div className="row">
          {employees.map((emp, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="glass-card p-3 rounded-4">
                <h5 className="mb-1">{emp.firstname}</h5>
                <p className="mb-1 text-light-emphasis">{emp.designation}</p>
                <small className="text-muted">Dept: {emp.department}</small>
              </div>
            </div>
          ))}
        </div>

        {employees.length === 0 && (
          <p className="text-center text-light mt-5">No employee data available.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeePage;
