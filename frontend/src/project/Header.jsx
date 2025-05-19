import React from 'react';
import { Button } from 'react-bootstrap';

const Header = ({ projectTitle }) => (
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h2>{projectTitle}</h2>
    <div>
      <Button variant="primary" className="me-2">Edit</Button>
      <Button variant="danger">Delete</Button>
    </div>
  </div>
);

export default Header;
