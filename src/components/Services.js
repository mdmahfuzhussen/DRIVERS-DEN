import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services fade-in" id="services">
    <h2>Our Lessons</h2>
    <div className="services-list">
      <div className="service-item"><h3>Beginner Lessons</h3><p>Start from scratch with patient, step-by-step guidance.</p></div>
      <div className="service-item"><h3>Refresher Courses</h3><p>For those who want to regain confidence behind the wheel.</p></div>
      <div className="service-item"><h3>Intensive Courses</h3><p>Fast-track your learning with focused, immersive lessons.</p></div>
      <div className="service-item"><h3>Test Preparation</h3><p>Get ready for your driving test with expert tips and mock exams.</p></div>
      <div className="service-item"><h3>Automatic & Manual</h3><p>Choose your preferred transmission type.</p></div>
      <div className="service-item"><h3>Instructor Options</h3><p>Male or female instructor available upon request.</p></div>
    </div>
  </section>
);

export default Services;
