import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TrackAttendance.css'; // Custom styles

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

  return (
    <div className="attendance-fullpage">
      <div className="calendar-wrapper">
        <h2 className="calendar-title">Track Attendance</h2>
        <Calendar
          tileClassName={({ date }) =>
            isAbsent(date) ? 'present-day' : null
          }
          className="custom-calendar"
        />
        <div className="summary mt-3">
          <h5 className="text-white text-center">
            ✅ Total Days Absent: {absentDates.length}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TrackAttendance;
