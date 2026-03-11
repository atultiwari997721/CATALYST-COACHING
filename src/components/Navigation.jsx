import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll listener for sticky nav effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">CATALYST</span>
          <span className="logo-accent" style={{marginLeft: '0.25rem'}}>+ COACHING</span>
        </Link>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <a href="/#courses" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Courses</a>
          <Link to="/parent-dashboard" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Parent Login</Link>
          <Link to="/teacher-dashboard" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Teacher Login</Link>
          <Link to="/admin-dashboard" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link>
          <div className="mobile-only-action">
             <Link to="/login" className="btn btn-primary nav-btn w-full mt-4" style={{display: 'inline-block', textAlign: 'center'}} onClick={() => setIsMobileMenuOpen(false)}>Student Login</Link>
          </div>
        </div>
        
        <div className="nav-actions flex-center">
          <Link to="/login" className="btn btn-primary nav-btn desktop-only">Student Login</Link>
          <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open-1' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open-2' : ''}`}></span>
            <span className={`hamburger-line ${isMobileMenuOpen ? 'open-3' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
