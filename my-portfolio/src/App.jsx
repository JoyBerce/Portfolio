import React from 'react';
import './css/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Home />
      <About />
      <hr className="section-divider"/> 
      <Projects />
      <Certifications />
      <Experience />
    </div>
  );
}


export default App;
