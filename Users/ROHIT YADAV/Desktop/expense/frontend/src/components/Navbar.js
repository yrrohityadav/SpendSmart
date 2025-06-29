// ✅ src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <h2>💰 SpendSmart</h2>
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar; // ✅ must be default
