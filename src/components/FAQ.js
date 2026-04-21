import React from 'react';
import './FAQ.css';

const FAQ = () => (
  <section className="faq fade-in" id="faq">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">
      <div className="faq-item">
        <h4>Do I need a learner’s license?</h4>
        <p>Yes, you need a valid learner’s license before starting lessons.</p>
      </div>
      <div className="faq-item">
        <h4>How many lessons do I need?</h4>
        <p>It depends on your experience. Most beginners take 10-15 lessons.</p>
      </div>
      <div className="faq-item">
        <h4>What car will I use?</h4>
        <p>We provide a modern, dual-control car for all lessons.</p>
      </div>
      <div className="faq-item">
        <h4>Can I choose lesson times?</h4>
        <p>Yes, you can select available dates and times when booking.</p>
      </div>
    </div>
  </section>
);

export default FAQ;
