import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../css/App.css';

function Contact() {
  return (
    <section id="contact" className="bg-light-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
            <FaFacebook className="contact-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-icon-link">
            <FaLinkedin className="contact-icon" />
          </a>
          <a href="mailto:jody@example.com" className="contact-icon-link">
            <FaEnvelope className="contact-icon" />
          </a>
          <a href="tel:123-456-7890" className="contact-icon-link">
            <FaPhone className="contact-icon" />
          </a>
        </div>
        <p className="contact-info">Email: jody@example.com | Phone: 123-456-7890</p>
      </div>
    </section>
  );
}

export default Contact;