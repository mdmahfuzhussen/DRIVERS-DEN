import React from 'react';
import './Homepage.css';

const Homepage = () => (
  <section className="homepage" id="home">
    <div className="homepage-content">
      <h1>DRIVERS <span className="den">DEN</span></h1>
      <p className="tagline">Learn to drive with confidence</p>
      <a href="#booking" className="cta-btn">Book a Lesson</a>
      <ul className="highlights">
        <li>✔️ Certified instructors</li>
        <li>✔️ Affordable pricing</li>
        <li>✔️ High pass rate</li>
      </ul>
    </div>
  </section>
);

export default Homepage;
