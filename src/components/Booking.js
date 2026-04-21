import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you soon.');
    setForm({ name: '', email: '', date: '', time: '', message: '' });
  };
  return (
    <section className="booking" id="booking">
      <h2>Book a Lesson</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="time" name="time" value={form.time} onChange={handleChange} required />
        <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
