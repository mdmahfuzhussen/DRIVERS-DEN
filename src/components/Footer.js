import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div>© {new Date().getFullYear()} DRIVERS DEN. All rights reserved.</div>
    <div className="footer-links">
      <a href="#safety">Safety & Policies</a>
      <span>|</span>
      <a href="#contact">Contact</a>
    </div>
  </footer>
);

export default Footer;
