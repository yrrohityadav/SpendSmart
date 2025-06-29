// ✅ src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SpendSmart. All rights reserved.</p>
    </footer>
  );
};

export default Footer; // ✅ must be default
