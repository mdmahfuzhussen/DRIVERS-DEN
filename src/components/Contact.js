import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Us</h2>
    <div className="contact-info">
      <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></p>
      <p><strong>WhatsApp:</strong> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@driversden.com">info@driversden.com</a></p>
    </div>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
