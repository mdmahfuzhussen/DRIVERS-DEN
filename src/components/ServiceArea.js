import React from 'react';
import './ServiceArea.css';

const ServiceArea = () => (
  <section className="service-area fade-in" id="area">
    <h2>Service Area</h2>
    <p>We operate in the following areas:</p>
    <ul>
      <li>Downtown City</li>
      <li>Suburbs North & South</li>
      <li>Eastside & Westside</li>
      <li>Nearby Towns</li>
    </ul>
    <div className="map-placeholder">[Map Coming Soon]</div>
  </section>
);

export default ServiceArea;
