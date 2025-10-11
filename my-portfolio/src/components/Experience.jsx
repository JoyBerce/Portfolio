import React from 'react';
import '../css/Experience.css';

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "FEU Information Technology Service Unit (ITSO)",
    duration: "Nov 2024 – Jul 2025",
    details: [
      "Designed and developed the Associates Portal, including Clearance and Negative Listing, Announcements, Work Schedule, Time and Attendance - Attendance Ledger, Absences and Tardiness Summary, Announcement and Ultimate Dashboard.",
      "Used PHP, HTML, CSS, Bootstrap and CodeIgniter 3 and MySQL (Navicat) for both frontend and backend functionality.",
      "Integrated PDF and Excel export functionalities for generating formal records and reports.",
      "Collaborated on the successful deployment and implementation of the system across FEU Institute of Technology, FEU Alabang, and FEU Diliman servers."
    ],
  },
  {
    title: "SIKAPTala 2025 Oral Research Presentation",
    company: "Junior Officer for Outreach and Initiatives, CICS Student Government De La Salle University - Dasmariñas",
    duration: "March 24, 2025",
    details: [
      "Presented the research project Kultoura: A Web and Mobile Tour Navigation Guide With 360-Pinned Virtual View for Manila at SIKAPTala 2025, an academic research conference organized by the College of Information and Computer Studies Student Government of De La Salle University – Dasmariñas. The project was recognized under the Computing and Information Systems category for its innovative approach to digital tourism. Developed using modern web and mobile technologies, the system provides users with an interactive, location-based tour guide experience enhanced with 360-degree virtual views of key cultural landmarks in Manila.",
      "Participated in virtual presentation sessions and engaged with fellow researchers and academic professionals to share insights and receive feedback."
    ],
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map(({ title, company, duration, details, }, index) => (
            <div
              key={index}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-dot" />
              <div className="experience-content">
                {index % 2 === 0 ? (
                  <>
                    <div className="text-content">
                      <h3 className="job-title">{title}</h3>
                      <p className="company-name">{company} | {duration}</p>
                      <ul className="job-description">
                        {details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-content">
                      <h3 className="job-title">{title}</h3>
                      <p className="company-name">{company} | {duration}</p>
                      <ul className="job-description">
                        {details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
