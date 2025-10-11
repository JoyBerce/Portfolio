import React, { useEffect, useRef, useState } from 'react';
import '../css/About.css';

function About() {
  const aboutRef = useRef(null);
  const [showBotQuestion, setShowBotQuestion] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBotQuestion(false);
          setShowTyping(false);
          setShowAnswer(false);

          setTimeout(() => setShowBotQuestion(true), 100);
          setTimeout(() => setShowTyping(true), 1500);
          setTimeout(() => setShowTyping(false), 2500);
          setTimeout(() => setShowAnswer(true), 3000);
        }
      },
      { threshold: 0.5 }
    );

    const current = aboutRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const skills = [
    { title: 'PHP', logo: '../logo/php.png' },
    { title: 'JAVA', logo: '../logo/java.png' },
    { title: 'PYTHON', logo: '../logo/pyth.png' },
    { title: 'React', logo: '../logo/react.png' },
    { title: 'Spring Boot', logo: '../logo/springboot.png' },
    { title: 'CodeIgniter 3', logo: '/logo/ci.png' },
    { title: 'Laravel', logo: '../logo/Laravel.png' },
    { title: 'Bootstrap', logo: '../logo//Bootstrap.png' },
    { title: 'MySQL', logo: '../logo/sql.png' },
    { title: 'Firebase', logo: '../logo/Firebase.png' },
    { title: 'HTMLS', logo: '../logo/html5.png' },
    { title: 'Visual Studio Code', logo: '../logo/vs.png' },
    { title: 'IntelliJ', logo: '../logo/tellij.png' },
  ];

  return (
    <section id="about" className="bg-light-section" ref={aboutRef}>
      <div className="container">
        <div className="chat-container">
          {showBotQuestion && (
            <div className="bot-message typing">
              🤖 <span>About Joy Veatrice Bercenio?</span>
            </div>
          )}

          {showTyping && (
            <div className="user-message typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          {showAnswer && (
            <div className="user-message fade-in">
              <div className="message-text">
                Hi there I'm Vea👋!!! <br />
                A dedicated and goal-oriented graduate from the FEU Institute
                of Technology with a degree in Bachelor of Science in
                Information Technology specialized in Web and Mobile Application.
                Eager to contribute my skills to a dynamic company that values
                continuous learning. My strong communication, organizational, and
                planning skills help me align with company goals while growing
                professionally and personally.
              </div>
              <img
                src="grad pic.jpg"
                alt="Joy Veatrice Bercenio"
                className="profile-photo"
              />
            </div>
          )}
        </div>

        {/* Skill Highlights Section */}
        <div className="skills-section">
          <h2>Skill Highlights</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-box">
                <img src={skill.logo} alt={skill.title} />
                <div className="skill-title">{skill.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
