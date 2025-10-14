import React from 'react';
import '../css/Home.css';

function Certifications() {
  return (
    <section id="certifications">
      <div className="cert-container">
        <h2>Certifications and Badges</h2>
        <div className="certifications-grid">
          <div className="card certification-card">
            <h3>React Developer Certification</h3>
            <p>Certified by XYZ Academy, 2023</p>
          </div>
          <div className="card certification-card">
            <h3>JavaScript Fundamentals</h3>
            <p>Certified by Codecademy, 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;