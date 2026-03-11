import React, { useState } from 'react';
import './Courses.css';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('10th');

  const courseData = {
    '7th': {
      title: 'Class 7th Foundation',
      subtitle: 'Building the fundamental blocks for future competitive exams.',
      highlights: ['Conceptual Mathematics', 'Basic Sciences (Physics/Chem/Bio)', 'Olympiad Orientation']
    },
    '8th': {
      title: 'Class 8th Pre-Board Prep',
      subtitle: 'Transitioning from basic to advanced learning frameworks.',
      highlights: ['Abstract Mathematics', 'Detailed Science Modules', 'Mental Ability & Aptitude']
    },
    '9th': {
      title: 'Class 9th Advanced',
      subtitle: 'Developing critical thinking for high-level problem solving.',
      highlights: ['Introduction to Board Patterns', 'In-depth Physics & Chemistry', 'Complex Core Math']
    },
    '10th': {
      title: 'Class 10th Board Excellence',
      subtitle: 'Our signature program guaranteeing stellar board results.',
      highlights: ['Rigorous Mock Tests', 'Previous Year Paper Analysis', 'Personalized Mentorship', 'Complete Syllabus Revision']
    }
  };

  const tabs = ['7th', '8th', '9th', '10th'];

  return (
    <section id="courses" className="courses py-24 bg-gradient-modern">
      <div className="container">
        <div className="courses-header text-center">
          <h2 className="section-title">Academic <span className="text-gradient">Programs</span></h2>
          <p className="section-subtitle">Tailored curriculum designed for maximum impact at every stage.</p>
        </div>

        <div className="courses-wrapper">
          <div className="courses-tabs">
            {tabs.map((tab) => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                Class {tab}
              </button>
            ))}
          </div>

          <div className="course-card glass">
            <div className="course-content">
              <div className="course-badge">Most Popular</div>
              <h3 className="course-title">{courseData[activeTab].title}</h3>
              <p className="course-subtitle">{courseData[activeTab].subtitle}</p>
              
              <div className="course-highlights">
                <h4>Curriculum Highlights:</h4>
                <ul>
                  {courseData[activeTab].highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="btn btn-primary mt-6">Enroll Now</button>
            </div>
            
            <div className="course-visual">
              <div className={`abstract-shape shape-${activeTab}`}>
                <span className="shape-text">{activeTab}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
