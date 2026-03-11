import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Calendar, Award, Menu, X, LogOut, FileText } from 'lucide-react';
import '../pages.css';

const ParentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('report');

  const testMarks = [
    { subject: 'Mathematics', score: '95/100', grade: 'A+' },
    { subject: 'Science', score: '88/100', grade: 'A' },
    { subject: 'English', score: '92/100', grade: 'A+' }
  ];

  return (
    <div className="dashboard-layout">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header flex-center" style={{justifyContent: 'space-between'}}>
          <Link to="/" className="nav-logo">
            <span className="logo-text">CATALYST</span>
            <span className="logo-accent" style={{marginLeft: '0.25rem'}}>+ COACHING</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <p className="sidebar-heading" style={{padding: '0 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>Parent Portal</p>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'report' ? 'active' : ''}`} onClick={() => {setActiveTab('report'); setSidebarOpen(false)}}>
            <LineChart size={20} /> Child Improvement
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'attendance' ? 'active' : ''}`} onClick={() => {setActiveTab('attendance'); setSidebarOpen(false)}}>
            <Calendar size={20} /> Attendance
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'marks' ? 'active' : ''}`} onClick={() => {setActiveTab('marks'); setSidebarOpen(false)}}>
            <Award size={20} /> Subject Marks
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link" style={{color: 'hsl(var(--error))'}}>
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header-bar">
          <div className="flex-center">
            <button className={`dashboard-menu-btn ${sidebarOpen ? 'hidden' : ''}`} onClick={() => setSidebarOpen(true)}>
              <Menu size={24} color="hsl(var(--text-main))" />
            </button>
            <div>
              <h1 style={{fontSize: '1.5rem', lineHeight: 1.2}}>Parent Dashboard</h1>
              <p className="resource-meta">Monitoring: Vikram D. (Class 10)</p>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          <h2 style={{fontSize: '1.25rem', marginBottom: '2rem', textTransform: 'capitalize'}}>
            {activeTab === 'report' && 'Improvement Overview'}
            {activeTab === 'attendance' && 'Attendance Records'}
            {activeTab === 'marks' && 'Recent Test Scores'}
          </h2>

          {activeTab === 'report' && (
            <div className="glass" style={{padding: '2rem', borderRadius: 'var(--br-lg)'}}>
              <div className="flex-center" style={{gap: '2rem', flexWrap: 'wrap'}}>
                <div style={{flex: 1, minWidth: '250px'}}>
                  <h3 style={{marginBottom: '1rem'}}>Overall Growth</h3>
                  <p className="resource-meta">Vikram has shown a 15% improvement in Sciences over the last month. Regular assignments are being submitted on time.</p>
                  <div style={{height: '8px', background: 'hsla(var(--primary), 0.2)', borderRadius: '4px', marginTop: '1rem'}}>
                    <div style={{height: '100%', width: '85%', background: 'hsl(var(--primary))', borderRadius: '4px'}}></div>
                  </div>
                  <p className="resource-meta mt-1">Course Completion: 85%</p>
                </div>
                <div className="resource-card bg-orange-light text-center" style={{padding: '2rem', flex: 1}}>
                  <h4 style={{fontSize: '2rem', color: 'hsl(var(--accent))'}}>Rank #3</h4>
                  <p>In current batch</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attendance' && (
            <div className="resource-grid">
              <div className="resource-card glass text-center">
                <div className="resource-icon-wrapper bg-blue-light mx-auto" style={{margin: '0 auto 1rem'}}>
                  <Calendar size={24} />
                </div>
                <h3>Classes Attended</h3>
                <h4 style={{fontSize: '2rem', color: 'hsl(var(--primary))'}}>42 / 45</h4>
                <p className="resource-meta">93% Attendance Rate</p>
              </div>
              <div className="resource-card glass text-center">
                <div className="resource-icon-wrapper bg-purple-light mx-auto" style={{margin: '0 auto 1rem'}}>
                  <FileText size={24} />
                </div>
                <h3>Assignments Submitted</h3>
                <h4 style={{fontSize: '2rem', color: 'hsl(var(--secondary))'}}>18 / 20</h4>
                <p className="resource-meta">90% Submission Rate</p>
              </div>
            </div>
          )}

          {activeTab === 'marks' && (
            <div className="glass" style={{borderRadius: 'var(--br-lg)', overflow: 'hidden'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
                <thead>
                  <tr style={{background: 'hsla(var(--primary), 0.1)'}}>
                    <th style={{padding: '1rem 1.5rem'}}>Subject</th>
                    <th style={{padding: '1rem 1.5rem'}}>Score</th>
                    <th style={{padding: '1rem 1.5rem'}}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {testMarks.map((mark, i) => (
                    <tr key={i} style={{borderBottom: '1px solid var(--glass-border)'}}>
                      <td style={{padding: '1rem 1.5rem', fontWeight: 500}}>{mark.subject}</td>
                      <td style={{padding: '1rem 1.5rem'}}>{mark.score}</td>
                      <td style={{padding: '1rem 1.5rem', color: 'hsl(var(--success))', fontWeight: 600}}>{mark.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
