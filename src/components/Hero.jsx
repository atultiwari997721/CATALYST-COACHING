import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-gradient-modern pt-32 pb-20">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="trust-badge glass">
            <span className="star-rating">⭐⭐⭐⭐⭐</span>
            <span className="badge-text">4.9/5 Rating | Trusted by 500+ Parents in Vijay Nagar</span>
          </div>
          
          <h1 className="hero-title">
            Ignite Your Child's <br />
            <span className="text-gradient">Academic Potential</span>
          </h1>
          
          <p className="hero-subtitle">
            Premium foundation building for classes 7th to 10th. From deep conceptual clarity to stellar board results—we make learning rapid and rewarding.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg pulse-animation">
              Book a Free Demo Class
            </button>
            <button className="btn btn-outline btn-lg">
              Explore Methodology
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3 className="stat-value text-gradient">98%</h3>
              <p className="stat-label">Board Pass Rate</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-value text-gradient">500+</h3>
              <p className="stat-label">Students Mentored</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-value text-gradient">Top 10</h3>
              <p className="stat-label">City Ranks</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-value text-gradient">24/7</h3>
              <p className="stat-label">Doubt Support</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* Abstract 3D/Glass element placeholder */}
          <div className="floating-card primary-card glass">
            <div className="card-header">
              <div className="card-dot red"></div>
              <div className="card-dot yellow"></div>
              <div className="card-dot green"></div>
            </div>
            <div className="card-body">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line w-80"></div>
              <div className="skeleton-line w-60"></div>
            </div>
          </div>
          
          <div className="floating-card secondary-card glass">
            <div className="success-icon">✓</div>
            <div className="success-text">Chapter Completed!</div>
          </div>
          
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
