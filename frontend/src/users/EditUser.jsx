import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
  });

  const { username, firstname, lastname, email } = user;

  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/admin/getusers/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/admin/users/${id}`, user);
    navigate('/home');
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: 'white', minHeight: '100vh', padding: '2rem' }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 border rounded p-4 shadow-lg">
          <h2 className="text-center mb-4" style={{ color: '#2a2a72' }}>
            Edit User
          </h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Jan Doe"
                name="username"
                value={username}
                onChange={onInput}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                FirstName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Jan"
                name="firstname"
                value={firstname}
                onChange={onInput}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                LastName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Doe"
                name="lastname"
                value={lastname}
                onChange={onInput}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="jan21doe@gmail.com"
                name="email"
                value={email}
                onChange={onInput}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-outline-primary rounded-pill px-4">
                Submit
              </button>
              <Link
                to="/"
                className="btn btn-outline-danger rounded-pill px-4"
                style={{ color: '#e74c3c', borderColor: '#e74c3c' }}
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
