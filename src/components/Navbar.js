
import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  const handleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = (
    <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
      <li><a href="#home" onClick={closeMenu}>Home</a></li>
      <li><a href="#about" onClick={closeMenu}>About</a></li>
      <li><a href="#services" onClick={closeMenu}>Services</a></li>
      <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
      <li><a href="#booking" onClick={closeMenu}>Booking</a></li>
      <li><a href="#area" onClick={closeMenu}>Service Area</a></li>
      <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
      <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
      <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      <li><a href="#safety" onClick={closeMenu}>Safety</a></li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-title">DRIVERS <span className="den">DEN</span></span>
      </div>
      <div className="navbar-menu-bar">
        <button className="menu-icon" onClick={handleMenu} aria-label="Menu">
          <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
          <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
          <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
        </button>
      </div>
      {navLinks}
      <button className="dark-toggle" onClick={handleToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
