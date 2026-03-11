import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages.css';

const Auth = ({ type }) => {
  const isLogin = type === 'login';
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for demo purposes
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="auth-container bg-gradient-modern">
      <div className="auth-card glass animate-fade-in-up">
        
        <div className="auth-header">
          <Link href="/" className="nav-logo" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>
            <span className="logo-text">CATALYST</span>
            <span className="logo-accent">+</span>
          </Link>
          <h1 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="auth-subtitle">
            {isLogin 
              ? 'Enter your credentials to access your dashboard' 
              : 'Join the top-rated coaching platform in Jabalpur'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
             <div className="form-group">
               <label className="form-label">Full Name</label>
               <input type="text" className="form-input" placeholder="Student Name" required />
             </div>
          )}
          
          <div className="form-group">
            <label className="form-label">Email or Phone</label>
            <input type="text" className="form-input" placeholder="Enter email or +91..." required />
          </div>

          <div className="form-group">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <label className="form-label" style={{marginBottom: 0}}>Password</label>
              {isLogin && <a href="#" style={{fontSize: '0.875rem'}}>Forgot?</a>}
            </div>
            <input type="password" className="form-input" style={{marginTop: '0.5rem'}} placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
            {loading ? 'Authenticating...' : (isLogin ? 'Sign In' : 'Sign Up')}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
          ) : (
            <p>Already have an account? <Link to="/login">Sign in here</Link></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
