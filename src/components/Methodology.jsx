import React from 'react';
import './Methodology.css';

const Methodology = () => {
  const methdologies = [
    {
      title: "Interactive Live Classes",
      description: "Engaging 2-way sessions using advanced whiteboarding and instant doubt resolution—not just a one-way broadcast.",
      icon: "🎥",
      colorClass: "method-blue"
    },
    {
      title: "Structured Curriculum",
      description: "Meticulously designed chapter modules focusing on core mathematical concepts and scientific principles for 7th-10th grades.",
      icon: "📚",
      colorClass: "method-purple"
    },
    {
      title: "Automated Tracking",
      description: "Real-time attendance logs, mock test scores, and performance analytics sent directly to the Parent's Dashboard.",
      icon: "📈",
      colorClass: "method-orange"
    },
    {
      title: "24/7 Doubt Forum",
      description: "Stuck on a problem at 10 PM? Post a photo to our exclusive student community platform and get answers fast.",
      icon: "💡",
      colorClass: "method-green"
    }
  ];

  return (
    <section id="about" className="methodology py-24">
      <div className="container">
        <div className="methodology-header text-center">
          <h2 className="section-title">Why We're Different:<br/><span className="text-gradient">The Catalyst Advantage</span></h2>
          <p className="section-subtitle">We don't just teach; we catalyze growth. Discover how our digital approach transforms average learners into top-performers.</p>
        </div>

        <div className="methodology-grid">
          {methdologies.map((method, index) => (
            <div className={`method-card glass ${method.colorClass}`} key={index}>
              <div className="method-icon-wrapper">
                <span className="method-icon">{method.icon}</span>
              </div>
              <h3 className="method-title">{method.title}</h3>
              <p className="method-desc">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
