import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './trackAttendance.css';
import illustration from '../assets/Confirmed attendance-rafiki.svg';

const TrackAttendance = () => {
  const absentDates = [
    new Date(2025, 4, 1),
    new Date(2025, 4, 3),
    new Date(2025, 4, 6),
    new Date(2025, 4, 10),
    new Date(2025, 4, 11),
    new Date(2025, 4, 16),
  ];

  const isAbsent = (date) =>
    absentDates.some(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );

  const totalAbsent = absentDates.length;
  const totalDays = 31; // Can be dynamically calculated
  const totalPresent = totalDays - totalAbsent;

  return (
    <div className="attendance-container d-flex h-100">
      {/* Left Panel */}
      <div className="col-md-6 attendance-left p-5 d-flex flex-column justify-content-center align-items-center">
        <img src= {illustration} alt="Attendance SVG" className="img-fluid mb-4" style={{ maxHeight: '470px' }} />
        <h3 className="text-dark fw-bold mb-2">Attendance Tracker</h3>
        <p className="text-muted text-center">
          View your attendance record with a modern, minimal calendar. Easily track days marked absent.
        </p>
        <div className="attendance-summary mt-4">
          <div className="summary-card">✅ Present Days: {totalPresent}</div>
          <div className="summary-card">❌ Absent Days: {totalAbsent}</div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="col-md-6 attendance-right d-flex justify-content-center align-items-center p-4">
        <div className="glass-calendar-wrapper">
          <Calendar
           tileClassName={({ date }) => {
              if (isAbsent(date)) return 'absent-day';
              return 'present-day';
            }}
            className="custom-calendar"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackAttendance;
