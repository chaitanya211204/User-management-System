// import React, { useState } from 'react';
// import { Card, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

// const SalaryStructureForm = () => {
//   const [salary, setSalary] = useState({
//     basic: 20000,
//     hra: 8000,
//     conveyance: 1600,
//     medical: 1250,
//     special: 9750,
//     pf: 2400,
//     pt: 200,
//     tds: 1500
//   });

//   const gross = salary.basic + salary.hra + salary.conveyance + salary.medical + salary.special;
//   const net = gross - (salary.pf + salary.pt + salary.tds);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSalary(prev => ({ ...prev, [name]: Number(value) }));
//   };

//   return (
//     <div className="container my-4">
//       <Row>
//         {/* Left Card: Employee Info */}
//         <Col md={4}>
//           <Card className="p-3 text-white" style={{
//             background: 'rgba(255, 255, 255, 0.05)',
//             backdropFilter: 'blur(8px)',
//             borderRadius: '1rem',
//             border: '1px solid rgba(255, 255, 255, 0.1)'
//           }}>
//             <h5 className="text-center">Employee Details</h5>
//             <hr className="border-light" />
//             <p><strong>Name:</strong> Rahul Sharma</p>
//             <p><strong>Designation:</strong> Software Engineer</p>
//             <p><strong>Department:</strong> IT</p>
//             <p><strong>Employee ID:</strong> EMP1023</p>
//           </Card>
//         </Col>

//         {/* Right Card: Salary Structure */}
//         <Col md={8}>
//           <Card className="p-4 text-white" style={{
//             background: 'linear-gradient(to right, #0f0f0f, #3a3a3a)',
//             borderRadius: '1rem'
//           }}>
//             <h4 className="text-center mb-4">Salary Structure</h4>

//             <Form>
//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="basic">
//                     <Form.Label>Basic Salary</Form.Label>
//                     <Form.Control type="number" name="basic" value={salary.basic} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="hra">
//                     <Form.Label>House Rent Allowance (HRA)</Form.Label>
//                     <Form.Control type="number" name="hra" value={salary.hra} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <Form.Group controlId="conveyance">
//                     <Form.Label>Conveyance Allowance</Form.Label>
//                     <Form.Control type="number" name="conveyance" value={salary.conveyance} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//                 <Col md={6}>
//                   <Form.Group controlId="medical">
//                     <Form.Label>Medical Allowance</Form.Label>
//                     <Form.Control type="number" name="medical" value={salary.medical} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Form.Group className="mb-3" controlId="special">
//                 <Form.Label>Special Allowance</Form.Label>
//                 <Form.Control type="number" name="special" value={salary.special} onChange={handleChange} />
//               </Form.Group>

//               <hr className="border-light" />

//               <h5>Deductions</h5>
//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="pf">
//                     <Form.Label>PF</Form.Label>
//                     <Form.Control type="number" name="pf" value={salary.pf} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="pt">
//                     <Form.Label>Professional Tax</Form.Label>
//                     <Form.Control type="number" name="pt" value={salary.pt} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="tds">
//                     <Form.Label>Income Tax (TDS)</Form.Label>
//                     <Form.Control type="number" name="tds" value={salary.tds} onChange={handleChange} />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <hr className="border-light" />

//               <Row className="mb-3">
//                 <Col md={6}>
//                   <h5>Gross Salary: ₹{gross}</h5>
//                 </Col>
//                 <Col md={6}>
//                   <h5>Net Salary: ₹{net}</h5>
//                 </Col>
//               </Row>

//               <div className="text-end">
//                 <Button variant="light" className="me-2">Preview Payslip</Button>
//                 <Button variant="success">Save Structure</Button>
//               </div>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default SalaryStructureForm;


import React, { useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaBriefcase, FaBuilding, FaIdBadge } from 'react-icons/fa';

const SalaryStructureForm = () => {
  const [salary, setSalary] = useState({
    basic: 20000,
    hra: 8000,
    conveyance: 1600,
    medical: 1250,
    special: 9750,
    pf: 2400,
    pt: 200,
    tds: 1500
  });

  const gross = salary.basic + salary.hra + salary.conveyance + salary.medical + salary.special;
  const net = gross - (salary.pf + salary.pt + salary.tds);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalary(prev => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="container my-4">
      <Card className="p-4 text-white" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Row>
          {/* Left Partition */}
          <Col md={4} className="border-end border-light pe-4">
            <div className="text-center mb-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Employee"
                className="rounded-circle mb-3"
              />
              <h5>Rahul Sharma</h5>
              <p>Software Engineer</p>
            </div>
            <div className="mb-3">
              <FaBriefcase className="me-2" />
              <strong>Department:</strong> IT
            </div>
            <div className="mb-3">
              <FaBuilding className="me-2" />
              <strong>Location:</strong> Delhi HQ
            </div>
            <div className="mb-3">
              <FaIdBadge className="me-2" />
              <strong>Emp ID:</strong> EMP1023
            </div>
          </Col>

          {/* Right Partition: Salary Structure Form */}
          <Col md={8}>
            <h4 className="mb-4">Salary Structure</h4>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="basic">
                    <Form.Label>Basic Salary</Form.Label>
                    <Form.Control type="number" name="basic" value={salary.basic} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="hra">
                    <Form.Label>HRA</Form.Label>
                    <Form.Control type="number" name="hra" value={salary.hra} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="conveyance">
                    <Form.Label>Conveyance</Form.Label>
                    <Form.Control type="number" name="conveyance" value={salary.conveyance} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="medical">
                    <Form.Label>Medical</Form.Label>
                    <Form.Control type="number" name="medical" value={salary.medical} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="special">
                <Form.Label>Special Allowance</Form.Label>
                <Form.Control type="number" name="special" value={salary.special} onChange={handleChange} />
              </Form.Group>

              <hr className="border-light" />

              <h5 className="mt-3">Deductions</h5>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="pf">
                    <Form.Label>PF</Form.Label>
                    <Form.Control type="number" name="pf" value={salary.pf} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="pt">
                    <Form.Label>Prof. Tax</Form.Label>
                    <Form.Control type="number" name="pt" value={salary.pt} onChange={handleChange} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="tds">
                    <Form.Label>TDS</Form.Label>
                    <Form.Control type="number" name="tds" value={salary.tds} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}><h5>Gross Salary: ₹{gross}</h5></Col>
                <Col md={6}><h5>Net Salary: ₹{net}</h5></Col>
              </Row>

              <div className="text-end">
                <Button variant="outline-light" className="me-2">Preview Payslip</Button>
                <Button variant="success">Save Structure</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default SalaryStructureForm;
