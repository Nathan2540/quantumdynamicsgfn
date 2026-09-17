import React, { useState } from 'react';
import logo from '../../assets/Images/logos.png'; 
import { Image } from '@chakra-ui/react';
import Price from './Price';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar glass-effect">
      <div className="nav-container">
        {/* Brand Logo / Name */}
        <a href="#home" className="nav-logo">
          <Image src={logo} alt="Logo" width={'180px'} />
        </a>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#courses" className="nav-links" onClick={() => setIsOpen(false)}>
              Courses
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className="nav-item mobile-btn">
            <Price />
          </li>
        </ul>

        {/* Action Button (Desktop) */}
        <div className="nav-btn-container">
          <Price />
        </div>

        {/* Hamburger Toggle */}
        <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;