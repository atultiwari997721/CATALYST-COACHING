import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, DollarSign, Menu, X, LogOut, TrendingUp } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import '../pages.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-layout">
      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header flex-center" style={{justifyContent: 'space-between'}}>
          <Link to="/" className="nav-logo">
            <span className="logo-text">CATALYST</span>
            <span className="logo-accent" style={{marginLeft: '0.25rem'}}>+ COACHING</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-heading" style={{padding: '0 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>Management</p>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => {setActiveTab('overview'); setSidebarOpen(false)}}>
            <LayoutDashboard size={20} /> System Overview
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'students' ? 'active' : ''}`} onClick={() => {setActiveTab('students'); setSidebarOpen(false)}}>
            <Users size={20} /> Manage Students
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'teachers' ? 'active' : ''}`} onClick={() => {setActiveTab('teachers'); setSidebarOpen(false)}}>
            <BookOpen size={20} /> Manage Teachers
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link" style={{color: 'hsl(var(--error))'}}>
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header-bar">
          <div className="flex-center">
            <button className={`dashboard-menu-btn ${sidebarOpen ? 'hidden' : ''}`} onClick={() => setSidebarOpen(true)}>
              <Menu size={24} color="hsl(var(--text-main))" />
            </button>
            <div>
              <h1 style={{fontSize: '1.5rem', lineHeight: 1.2}}>Admin Dashboard</h1>
              <p className="resource-meta">Center Level Overview</p>
            </div>
          </div>

          <div className="user-profile-sm glass" style={{padding: '0.5rem', paddingRight: '1rem', borderRadius: 'var(--br-round)'}}>
             <ThemeToggle className="mr-4" />
          </div>
        </header>

        <div className="dashboard-content">
          <h2 style={{fontSize: '1.25rem', marginBottom: '2rem', textTransform: 'capitalize'}}>
            {activeTab === 'overview' && 'Executive Summary'}
            {activeTab === 'students' && 'Student Directory'}
            {activeTab === 'teachers' && 'Faculty Roster'}
          </h2>

          {activeTab === 'overview' && (
            <div className="resource-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
              <div className="resource-card glass">
                <div className="flex-center" style={{justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1rem', color: 'hsl(var(--text-muted))'}}>Total Students</h3>
                  <div className="resource-icon-wrapper bg-blue-light" style={{width: 32, height: 32}}><Users size={16}/></div>
                </div>
                <h4 style={{fontSize: '2rem'}}>450</h4>
                <p className="resource-meta" style={{color: 'hsl(var(--success))', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                  <TrendingUp size={14}/> +12% from last month
                </p>
              </div>

              <div className="resource-card glass">
                <div className="flex-center" style={{justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1rem', color: 'hsl(var(--text-muted))'}}>Active Teachers</h3>
                  <div className="resource-icon-wrapper bg-purple-light" style={{width: 32, height: 32}}><BookOpen size={16}/></div>
                </div>
                <h4 style={{fontSize: '2rem'}}>24</h4>
                <p className="resource-meta">All classes fully staffed</p>
              </div>

              <div className="resource-card glass">
                <div className="flex-center" style={{justifyContent: 'space-between', marginBottom: '1rem'}}>
                  <h3 style={{fontSize: '1rem', color: 'hsl(var(--text-muted))'}}>Monthly Revenue</h3>
                  <div className="resource-icon-wrapper bg-orange-light" style={{width: 32, height: 32}}><DollarSign size={16}/></div>
                </div>
                <h4 style={{fontSize: '2rem'}}>₹4.2L</h4>
                <p className="resource-meta" style={{color: 'hsl(var(--success))', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
                  <TrendingUp size={14}/> On track for Q3 target
                </p>
              </div>
            </div>
          )}

          {activeTab !== 'overview' && (
            <div className="glass flex-center" style={{padding: '5rem', borderRadius: 'var(--br-lg)', justifyContent: 'center', textAlign: 'center', flexDirection: 'column'}}>
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Management View Locked in Demo</h3>
              <p className="resource-meta">This section allows admins to add/remove users, process fees, and assign classes in the full version.</p>
              <button className="btn btn-outline" style={{marginTop: '2rem'}} onClick={() => setActiveTab('overview')}>Back to Overview</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
