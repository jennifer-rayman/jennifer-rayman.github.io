import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-item">About</Link>
        </li>
        <li>
          <Link to="/services" className="nav-item">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">Resume</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;