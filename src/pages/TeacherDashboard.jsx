import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, Edit3, ClipboardList, FileSpreadsheet, FileCheck, Menu, X, LogOut, Users } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import '../pages.css';

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('attendance');

  const students = [
    { id: 1, name: 'Vikram D.', present: true },
    { id: 2, name: 'Priya T.', present: true },
    { id: 3, name: 'Rahul S.', present: false },
    { id: 4, name: 'Sneha M.', present: true }
  ];

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
          <p className="sidebar-heading" style={{padding: '0 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>Teacher Portal</p>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'attendance' ? 'active' : ''}`} onClick={() => {setActiveTab('attendance'); setSidebarOpen(false)}}>
            <CheckSquare size={20} /> Take Attendance
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'marks' ? 'active' : ''}`} onClick={() => {setActiveTab('marks'); setSidebarOpen(false)}}>
            <Edit3 size={20} /> Add Test Marks
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => {setActiveTab('assignments'); setSidebarOpen(false)}}>
            <ClipboardList size={20} /> Review Assignments
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
              <h1 style={{fontSize: '1.5rem', lineHeight: 1.2}}>Teacher Portal</h1>
              <p className="resource-meta">Welcome back, Mr. Sharma</p>
            </div>
          </div>

          <div className="user-profile-sm glass" style={{padding: '0.5rem', paddingRight: '1rem', borderRadius: 'var(--br-round)'}}>
            <ThemeToggle />
            <div className="avatar-sm ml-2">RS</div>
            <span style={{fontWeight: 500, fontSize: '0.875rem'}}>R. Sharma</span>
          </div>
        </header>

        <div className="dashboard-content">
          <h2 style={{fontSize: '1.25rem', marginBottom: '2rem', textTransform: 'capitalize'}}>
            {activeTab === 'attendance' && 'Today\'s Attendance'}
            {activeTab === 'marks' && 'Upload Test Scores'}
            {activeTab === 'assignments' && 'Pending Submissions'}
          </h2>

          {activeTab === 'attendance' && (
            <div className="glass" style={{padding: '2rem', borderRadius: 'var(--br-lg)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                <h3>Date: Oct 24, 2024</h3>
                <button className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>Mark All Present</button>
              </div>
              <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {students.map(student => (
                  <li key={student.id} style={{display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'hsla(var(--bg-main), 0.5)', borderRadius: 'var(--br-md)'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <Users size={18} color="hsl(var(--text-muted))"/>
                      <span>{student.name}</span>
                    </div>
                    <div>
                      <label style={{marginRight: '1rem', cursor: 'pointer'}}>
                        <input type="radio" name={`att-${student.id}`} defaultChecked={student.present} /> Present
                      </label>
                      <label style={{cursor: 'pointer', color: 'hsl(var(--error))'}}>
                        <input type="radio" name={`att-${student.id}`} defaultChecked={!student.present} /> Absent
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="btn btn-accent w-full mt-4">Save Attendance</button>
            </div>
          )}

          {activeTab === 'marks' && (
            <div className="glass" style={{padding: '2rem', borderRadius: 'var(--br-lg)'}}>
              <h3 style={{marginBottom: '1rem'}}>Enter Marks: Quadratic Equations Mock Test</h3>
              <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: '2fr 1fr'}}>
                {students.map(student => (
                  <React.Fragment key={student.id}>
                    <div style={{padding: '0.75rem 1rem', background: 'hsla(var(--bg-main), 0.5)', borderRadius: 'var(--br-md)'}}>
                      {student.name}
                    </div>
                    <input type="number" className="form-input" placeholder="Out of 100" />
                  </React.Fragment>
                ))}
              </div>
              <button className="btn btn-primary mt-6">Submit Marks</button>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="resource-grid">
              <div className="resource-card glass">
                <div className="flex-center" style={{justifyContent: 'space-between'}}>
                  <h4>Trigonometry Worksheet</h4>
                  <span className="course-badge" style={{position: 'static', padding: '0.25rem 0.5rem', transform: 'none'}}>3 Pending</span>
                </div>
                <p className="resource-meta">Due: Yesterday</p>
                <button className="btn btn-outline w-full">Grade Now</button>
              </div>
              <div className="resource-card glass">
                <div className="flex-center" style={{justifyContent: 'space-between'}}>
                  <h4>Real Numbers Quiz</h4>
                  <span className="course-badge" style={{position: 'static', padding: '0.25rem 0.5rem', transform: 'none'}}>Completed</span>
                </div>
                <p className="resource-meta">Due: Oct 15</p>
                <button className="btn btn-primary w-full">View Report</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
