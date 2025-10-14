import React from 'react';
import '../css/Experience.css';

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "FEU Information Technology Service Unit (ITSO)",
    duration: "Nov 2024 – Jul 2025",
    image: "/images/itso.jpg", 
    details: [
      "Designed and developed the Associates Portal with modules like Clearance, Announcements, Time & Attendance, and more.",
      "Used PHP, HTML, CSS, Bootstrap, CodeIgniter 3, and MySQL (Navicat).",
      "Added PDF and Excel export for formal records and reports.",
      "System deployed across FEU Institute of Technology, FEU Alabang, and FEU Diliman."
    ],
  },
  {
    title: "SIKAPTala 2025 Oral Research Presentation",
    company: "CICS Student Government, DLSU - Dasmariñas",
    duration: "March 24, 2025",
    image: "../experience/sikaptala.png", 
    details: [
      "Presented 'Kultoura: A Web and Mobile Tour Navigation Guide' with 360° views of Manila landmarks.",
      "Recognized under the Computing and Information Systems category.",
      "Developed with modern web and mobile technologies.",
      "Engaged with fellow researchers for feedback and collaboration."
    ],
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <img src={exp.image} alt={exp.title} className="experience-image" />
              <div className="experience-info">
                <h3>{exp.title}</h3>
                <p className="experience-meta">
                  <strong>{exp.company}</strong><br />
                  <span>{exp.duration}</span>
                </p>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
