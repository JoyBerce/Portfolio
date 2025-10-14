import React from 'react';
import '../css/Cert.css';

function Certifications() {
  return (
    <section id="certifications">
      <div className="cert-container">
        <h2>Certifications and Badges</h2>
        <div className="certifications-grid">
          <div className="card certification-card">
            <div className="certification-image">
              <img src="../cert/cybersec.png" alt="Cybersec" />
            </div>
            <div className="cert-description">
              <h3>Cybersecurity</h3>
              <p>The purpose of obtaining an Information Technology Specialist Certification in Cybersecurity is to demonstrates that the earner has achieved competency in key areas such as network security, threats and vulnerabilities, and security best practices. It serves as a valuable credential for those pursuing careers in information security, enhancing employability and supporting further advancement in the IT field. </p>      
          </div>
          </div>
          <div className="card certification-card">
            <div className="certification-image">
              <img src="../cert/networking.png" alt="Networking" />
            </div>
            <div className="cert-description">
              <h3>Networking</h3>
              <p>Earners of the IT Specialist Certification in Networking demonstrate validated expertise and practical skills in computer networking through an industry-recognized credential. This certification confirms that achievers have met the standards required in the IT networking field, supporting their career development and opening opportunities for advancement in the technology sector.</p>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="badge-section">
          <h3>Badges</h3>
          <div className="badge-grid">
            <div className="badge">
              <img src="path_to_html_badge.jpg" alt="HTML5 Badge" />
            </div>
            <div className="badge">
              <img src="path_to_css_badge.jpg" alt="CSS3 Badge" />
            </div>
            <div className="badge">
              <img src="path_to_react_badge.jpg" alt="React Badge" />
            </div>
            <div className="badge">
              <img src="path_to_js_badge.jpg" alt="JavaScript Badge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
