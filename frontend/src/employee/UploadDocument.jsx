// import React, { useState } from 'react';
// import { Form, Button, ListGroup, Container, Row, Col, Alert } from 'react-bootstrap';

// const UploadDocuments = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadSuccess, setUploadSuccess] = useState(false);

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(prev => [...prev, ...files]);
//     setUploadSuccess(false);
//   };

//   const handleUpload = () => {
//     // Simulate file upload
//     setUploadSuccess(true);
//     console.log('Uploading files:', selectedFiles);
//     // In a real app, use FormData + axios/fetch to upload to your backend
//   };

//   const removeFile = (index) => {
//     setSelectedFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <Container className="mt-4 p-4 border rounded">
//       <h4 className="mb-3">📁 Upload Documents</h4>

//       <Form.Group controlId="formFileMultiple" className="mb-3">
//         <Form.Label>Select Files</Form.Label>
//         <Form.Control type="file" multiple onChange={handleFileChange} />
//       </Form.Group>

//       {selectedFiles.length > 0 && (
//         <div className="mb-3">
//           <h6>📝 Selected Files:</h6>
//           <ListGroup>
//             {selectedFiles.map((file, index) => (
//               <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
//                 {file.name}
//                 <Button variant="outline-danger" size="sm" onClick={() => removeFile(index)}>
//                   Remove
//                 </Button>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </div>
//       )}

//       <Row>
//         <Col>
//           <Button variant="primary" onClick={handleUpload} disabled={selectedFiles.length === 0}>
//             Upload
//           </Button>
//         </Col>
//       </Row>

//       {uploadSuccess && (
//         <Alert variant="success" className="mt-3">
//           🎉 Files uploaded successfully!
//         </Alert>
//       )}
//     </Container>
//   );
// };

// export default UploadDocuments;


import React, { useState } from 'react';
import { Form, Button, ListGroup, Alert } from 'react-bootstrap';
import illustration from '../assets/Documents-rafiki.svg';

const UploadDocuments = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prev) => [...prev, ...files]);
    setUploadSuccess(false);
  };

  const handleUpload = () => {
    setUploadSuccess(true);
    console.log('Uploading files:', selectedFiles);
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side */}
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
            src={illustration}
            alt="Upload SVG"
            style={{ width: '80%', marginBottom: '2rem' }}
          />
          <h2 style={{ fontWeight: 600 }}>Secure Uploads</h2>
          <p style={{ fontStyle: 'italic' }}>Easily manage your documents</p>
          <p style={{ fontStyle: 'italic' }}>Private. Safe. Accessible.</p>
        </div>
      </div>

      {/* Right Side */}
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
            maxWidth: '700px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            color: '#fff',
          }}
        >
          <h3 className="mb-4">📁 Upload Documents</h3>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Select Files</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleFileChange}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
              }}
            />
          </Form.Group>

          {selectedFiles.length > 0 && (
            <div className="mb-3">
              <h6>📝 Selected Files:</h6>
              <ListGroup variant="flush">
                {selectedFiles.map((file, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}
                  >
                    {file.name}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFile(index)}
                    >
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}

          <div className="d-grid mt-3">
            <Button
              variant="light"
              onClick={handleUpload}
              disabled={selectedFiles.length === 0}
            >
              🚀 Upload
            </Button>
          </div>

          {uploadSuccess && (
            <Alert variant="success" className="mt-3">
              🎉 Files uploaded successfully!
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
