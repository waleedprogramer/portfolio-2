'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-item">
            Home
          </Link>
          <Link href="/about" className="nav-item">
            About
          </Link>
          <Link href="/skills" className="nav-item">
            Skills
          </Link>
          <Link href="/projects" className="nav-item">
          Projects
          </Link>
          <Link href="/services" className="nav-item">
          Services
          </Link>
          
          <Link href="/contact" className="nav-item">
            Contact
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;