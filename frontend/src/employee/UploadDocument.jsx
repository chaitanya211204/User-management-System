import React, { useState } from 'react';
import { Form, Button, ListGroup, Container, Row, Col, Alert } from 'react-bootstrap';

const UploadDocuments = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
    setUploadSuccess(false);
  };

  const handleUpload = () => {
    // Simulate file upload
    setUploadSuccess(true);
    console.log('Uploading files:', selectedFiles);
    // In a real app, use FormData + axios/fetch to upload to your backend
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-4 p-4 border rounded">
      <h4 className="mb-3">📁 Upload Documents</h4>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Select Files</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>

      {selectedFiles.length > 0 && (
        <div className="mb-3">
          <h6>📝 Selected Files:</h6>
          <ListGroup>
            {selectedFiles.map((file, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {file.name}
                <Button variant="outline-danger" size="sm" onClick={() => removeFile(index)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      )}

      <Row>
        <Col>
          <Button variant="primary" onClick={handleUpload} disabled={selectedFiles.length === 0}>
            Upload
          </Button>
        </Col>
      </Row>

      {uploadSuccess && (
        <Alert variant="success" className="mt-3">
          🎉 Files uploaded successfully!
        </Alert>
      )}
    </Container>
  );
};

export default UploadDocuments;
