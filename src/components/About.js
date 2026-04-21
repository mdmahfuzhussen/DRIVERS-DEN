import React from 'react';
import './About.css';
import instructorPhoto from '../assets/new.jpeg';

const About = () => (
  <section className="about" id="about">
    <h2>About the Instructor</h2>
    <div className="about-content">
      <img src={instructorPhoto} alt="Instructor" className="instructor-photo animated-photo" />
      <div>
        <h3>John Doe</h3>
        <p>15+ years experience | Certified Driving Instructor</p>
        <p>Calm, patient, and beginner-friendly teaching style. Dedicated to helping every student become a safe and confident driver.</p>
      </div>
    </div>
  </section>
);

export default About;
