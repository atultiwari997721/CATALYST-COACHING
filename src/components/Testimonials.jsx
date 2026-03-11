import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Parent of Class 9th Student",
      text: "Catalyst completely transformed my child's approach to Math. The jump from 70% in 8th grade to 95% in 9th grade was phenomenal!",
      rating: 5,
      avatar: "R"
    },
    {
      name: "Sneha M.",
      role: "Class 10th Board Topper",
      text: "The rigorous mock tests and 24/7 doubt clearing forum helped me secure 98% in my boards. The teachers are incredible mentors.",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Vikram R.",
      role: "Parent of Class 7th Student",
      text: "We wanted a strong foundation for Vikram before high school. The interactive live classes keep him engaged, and we love the automated progress reports.",
      rating: 5,
      avatar: "V"
    },
    {
      name: "Priya T.",
      role: "Class 8th Student",
      text: "The methodologies are so clear! I used to hate science, but now I look forward to the interactive models they show us during class.",
      rating: 5,
      avatar: "P"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" className="testimonials py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Proven Results.<br/><span className="text-gradient">Proud Parents.</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Here's what our community says.</p>
        </div>

        <div className="testimonial-slider-container">
          <button className="slider-btn prev-btn" onClick={prevSlide}>&larr;</button>
          
          <div className="slider-wrapper">
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((test, index) => (
                <div className="slider-slide" key={index}>
                  <div className="testimonial-card glass">
                    <div className="stars">
                      {[...Array(test.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{test.text}"</p>
                    
                    <div className="testimonial-author">
                      <div className="author-avatar">{test.avatar}</div>
                      <div className="author-info">
                        <h4 className="author-name">{test.name}</h4>
                        <p className="author-role">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>&rarr;</button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className="cta-banner mt-20 glass text-center">
          <h3 className="cta-banner-title">Ready to see these results for your child?</h3>
          <p className="cta-banner-text">Join the top-rated coaching institute in Jabalpur today.</p>
          <button className="btn btn-primary btn-lg mt-6 pulse-animation">Book a Free Demo Class</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
