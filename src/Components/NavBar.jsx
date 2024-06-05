import React from 'react';

const NavBar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News-Mania</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Technology
              </div>
            </li>
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("business")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Business
              </div>
            </li>
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("health")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Health
              </div>
            </li>
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("science")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Science
              </div>
            </li>
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("sports")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Sports
              </div>
            </li>
            <li className="nav-item mx-3">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
                style={{ cursor: 'pointer', color: '#d3d3d3', fontSize: '18px' }}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
