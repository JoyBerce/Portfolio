import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <section id="home" className="section">
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

