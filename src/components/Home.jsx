import React, { useState } from 'react';
import '../css/Home.css';

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      id="home"
      className="section"
      onMouseMove={handleMouseMove}
      style={{
        '--x': `${mousePosition.x}px`,
        '--y': `${mousePosition.y}px`,
      }}
    >
      <div className="container">
        <div className="profile-photo-container">
          <img src="grad pic.jpg" alt="Jody" className="profile-photo" />
        </div>
        <h1 className="name-title">Joy Veatrice S. Bercenio</h1>
        <p className="graduate-subtitle">BSIT - Web and Mobile Application Graduate</p>
        <p className="intro-text"> FEU Institute of Technology Graduate</p>
      </div>
    </section>
  );
}

export default Home;
