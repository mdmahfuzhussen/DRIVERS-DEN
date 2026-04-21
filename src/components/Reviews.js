import React from 'react';
import './Reviews.css';

const Reviews = () => (
  <section className="reviews fade-in" id="reviews">
    <h2>Student Reviews</h2>
    <div className="reviews-list">
      <div className="review-item">
        <p>"Passed my test on the first try! The lessons were clear and the instructor was so patient."</p>
        <span>- Sarah K.</span>
      </div>
      <div className="review-item">
        <p>"Affordable and flexible scheduling. Highly recommend DRIVERS DEN!"</p>
        <span>- Mike T.</span>
      </div>
      <div className="review-item">
        <p>"I was nervous but the instructor made me feel comfortable and confident."</p>
        <span>- Priya S.</span>
      </div>
    </div>
  </section>
);

export default Reviews;
