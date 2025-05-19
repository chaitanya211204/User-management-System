import React from 'react';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';

const EmployeeSalaryDashboard = () => {
  const monthsPaid = ['January', 'February', 'March', 'April']; // Example data

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">💼 Salary Dashboard</h4>

        <Row className="mb-3">
          <Col md={4} className="d-grid mb-2">
            <Button variant="primary">📄 Generate Payslip</Button>
          </Col>
          <Col md={4} className="d-grid mb-2">
            <Button variant="success">📆 Months Paid</Button>
          </Col>
          <Col md={4} className="d-grid mb-2">
            <Button variant="info">📊 Payment Summary</Button>
          </Col>
        </Row>

        <h5 className="mt-4">🗓️ Recent Months Paid</h5>
        <Table striped bordered hover responsive>
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
      </Card>
    </Container>
  );
};

export default EmployeeSalaryDashboard;
