// import React from 'react';
// import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';

// const EmployeeSalaryDashboard = () => {
//   const monthsPaid = ['February', 'March', 'April'];

//   return (
//     <Container className="mt-4">
//       <Card className="p-4 shadow-sm">
//         <h4 className="mb-4">💼 Salary Dashboard</h4>

//         <Row className="mb-3">
//           <Col md={4} className="d-grid mb-2">
//             <Button variant="primary">📄 Generate Payslip</Button>
//           </Col>
//           <Col md={4} className="d-grid mb-2">
//             <Button variant="success">📆 Months Paid</Button>
//           </Col>
//           <Col md={4} className="d-grid mb-2">
//             <Button variant="info">📊 Payment Summary</Button>
//           </Col>
//         </Row>

//         <h5 className="mt-4">🗓️ Recent Months Paid</h5>
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>Month</th>
//               <th>Year</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {monthsPaid.map((month, idx) => (
//               <tr key={idx}>
//                 <td>{month}</td>
//                 <td>2025</td>
//                 <td>₹50,000</td>
//                 <td>✅ Paid</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card>
//     </Container>
//   );
// };

// export default EmployeeSalaryDashboard;


import React from 'react';
import { Button, Table } from 'react-bootstrap';
import illustration from '../assets/Pay attention-cuate.svg';

const EmployeeSalaryDashboard = () => {
  const monthsPaid = ['February', 'March', 'April'];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#e6e6e9',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#333',
        }}
      >
        <div>
          <img
            src= {illustration}
            alt="SVG"
            style={{ width: '80%', marginBottom: '2rem' }}
          />
          <h2 style={{ fontWeight: 600 }}>Empowering Employees</h2>
          <p style={{ fontStyle: 'italic' }}>Your salary journey, simplified.</p>
          <p style={{ fontStyle: 'italic' }}>Transparency. Trust. Timeliness.</p>
        </div>
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: 2,
          backgroundColor: '#666666',
          padding: '3rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            padding: '2rem',
            width: '100%',
            maxWidth: '900px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: '#fff',
          }}
        >
          <h3 style={{ marginBottom: '2rem' }}>💼 Salary Dashboard</h3>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Button variant="light" className="w-100 w-md-30">
              📄 Generate Payslip
            </Button>
            <Button variant="light" className="w-100 w-md-30">
              📆 Months Paid
            </Button>
            <Button variant="light" className="w-100 w-md-30">
              📊 Payment Summary
            </Button>
          </div>

          <h5 className="mb-3">🗓️ Recent Months Paid</h5>
          <div style={{ overflowX: 'auto' }}>
            <Table
              striped
              bordered
              responsive
              variant="dark"
              style={{ borderRadius: '1rem', overflow: 'hidden' }}
            >
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {monthsPaid.map((month, idx) => (
                  <tr key={idx}>
                    <td>{month}</td>
                    <td>2025</td>
                    <td>₹50,000</td>
                    <td>✅ Paid</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalaryDashboard;
