import React from 'react';
import './Pricing.css';

const Pricing = () => (
  <section className="pricing fade-in" id="pricing">
    <h2>Pricing</h2>
    <div className="pricing-table">
      <div className="pricing-item">
        <h3>Single Lesson</h3>
        <p className="price">$40 / hour</p>
      </div>
      <div className="pricing-item">
        <h3>10 Lesson Package</h3>
        <p className="price">$350 (Save $50)</p>
      </div>
      <div className="pricing-item">
        <h3>Test Preparation</h3>
        <p className="price">$60 / session</p>
      </div>
      <div className="pricing-item">
        <h3>Extra Fees</h3>
        <p>None. No hidden charges.</p>
      </div>
    </div>
    <p className="pricing-note">Simple, transparent pricing. No surprises.</p>
  </section>
);

export default Pricing;
