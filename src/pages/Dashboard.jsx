import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, FileText, BookOpen, Menu, X, LogOut, LayoutDashboard, Clock } from 'lucide-react';
import '../pages.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('classes');

  const classesData = [
    { title: "Quadratic Equations - Part 2", subject: "Maths - Class 10", date: "Today", duration: "1h 15m", icon: PlayCircle, color: "bg-blue-light" },
    { title: "Light: Reflection & Refraction", subject: "Physics - Class 10", date: "Yesterday", duration: "1h 30m", icon: PlayCircle, color: "bg-purple-light" },
    { title: "Chemical Reactions", subject: "Chemistry - Class 10", date: "Oct 12", duration: "1h", icon: PlayCircle, color: "bg-orange-light" }
  ];

  const notesData = [
    { title: "Trigonometry Formula Sheet", subject: "Maths", type: "PDF", size: "2.4 MB", icon: FileText, color: "bg-blue-light" },
    { title: "Carbon and its Compounds Notes", subject: "Chemistry", type: "PDF", size: "4.1 MB", icon: FileText, color: "bg-orange-light" },
    { title: "Life Processes Diagram Pack", subject: "Biology", type: "PPTX", size: "8.5 MB", icon: FileText, color: "bg-purple-light" }
  ];

  const pyqData = [
    { title: "CBSE Class 10 Maths 2024", type: "Question Paper + Solutions", icon: BookOpen, color: "bg-blue-light" },
    { title: "CBSE Class 10 Science 2024", type: "Question Paper + Solutions", icon: BookOpen, color: "bg-purple-light" },
    { title: "5 Year Previous Paper Bundle", type: "All Subjects", icon: BookOpen, color: "bg-orange-light" }
  ];

  const renderContent = () => {
    let data = [];
    let emptyMsg = "";
    
    if (activeTab === 'classes') { data = classesData; emptyMsg = "No recorded classes available yet."; }
    if (activeTab === 'notes') { data = notesData; emptyMsg = "No notes uploaded yet."; }
    if (activeTab === 'pyq') { data = pyqData; emptyMsg = "No previous year papers available yet."; }

    return (
      <div className="resource-grid animate-fade-in-up">
        {data.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div className="resource-card glass" key={idx}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div className={`resource-icon-wrapper ${item.color}`}>
                  <Icon size={24} />
                </div>
                {item.duration && <span className="resource-meta flex-center" style={{gap: '0.25rem'}}><Clock size={14}/> {item.duration}</span>}
              </div>
              
              <div>
                <h3 className="resource-title">{item.title}</h3>
                <p className="resource-meta">{item.subject || item.type}</p>
                {item.date && <p className="resource-meta mt-1">Recorded: {item.date}</p>}
                {item.size && <p className="resource-meta mt-1">Size: {item.size}</p>}
              </div>

              <button className="btn btn-outline w-full" style={{marginTop: 'auto'}}>
                {activeTab === 'classes' ? 'Watch Recording' : 'Download File'}
              </button>
            </div>
          )
        })}
      </div>
    );
  };

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
          <p className="sidebar-heading" style={{padding: '0 1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>Learning Hub</p>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'classes' ? 'active' : ''}`} onClick={() => {setActiveTab('classes'); setSidebarOpen(false)}}>
            <PlayCircle size={20} /> Recorded Classes
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => {setActiveTab('notes'); setSidebarOpen(false)}}>
            <FileText size={20} /> PDF Notes
          </button>
          <button className={`sidebar-link w-full bg-transparent border-none cursor-pointer ${activeTab === 'pyq' ? 'active' : ''}`} onClick={() => {setActiveTab('pyq'); setSidebarOpen(false)}}>
            <BookOpen size={20} /> Previous Year Papers
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
              <h1 style={{fontSize: '1.5rem', lineHeight: 1.2}}>Student Portal</h1>
              <p className="resource-meta">Class 10th Board Excellence</p>
            </div>
          </div>

          <div className="user-profile-sm glass" style={{padding: '0.5rem', paddingRight: '1rem', borderRadius: 'var(--br-round)'}}>
            <div className="avatar-sm">VD</div>
            <span style={{fontWeight: 500, fontSize: '0.875rem'}}>Vikram D.</span>
          </div>
        </header>

        <div className="dashboard-content">
          <h2 style={{fontSize: '1.25rem', marginBottom: '2rem', textTransform: 'capitalize'}}>
            {activeTab === 'pyq' ? 'Previous Year Papers' : activeTab}
          </h2>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
