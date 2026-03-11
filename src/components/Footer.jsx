import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gradient-modern pt-16 pb-8">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="nav-logo mb-4">
              <span className="logo-text">CATALYST</span>
              <span className="logo-accent">+ COACHING</span>
            </a>
            <p className="footer-desc">
              Premium foundation building for classes 7th to 10th. Trusted by parents across Jabalpur for stellar board results.
            </p>
            <div className="social-links mt-6">
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">YT</a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Programs</h4>
            <ul>
              <li><a href="#">Class 7th Foundation</a></li>
              <li><a href="#">Class 8th Pre-Board</a></li>
              <li><a href="#">Class 9th Advanced</a></li>
              <li><a href="#">Class 10th Excellence</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Portals</h4>
            <ul>
              <li><a href="#">Student Dashboard</a></li>
              <li><a href="#">Parent's Corner</a></li>
              <li><a href="#">Doubt Forum (Discord)</a></li>
              <li><a href="#">Assignment Hub</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>📍 Vijay Nagar, Jabalpur, MP</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@catalystcoaching.in</li>
            </ul>
            <div className="map-placeholder mt-4 glass">
              <span>Google Maps Integration</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Catalyst + Coaching. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
