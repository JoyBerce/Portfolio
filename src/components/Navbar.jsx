import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/navbar.css'; 

function MyNavbar() {
  const sections = ["home", "about", "projects", "certifications", "experience"];
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;
      const offset = 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);

        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection === null && window.scrollY < 50) {
        currentSection = "home";
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items">
            {sections.map((item) => (
              <Nav.Link
                key={item}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(item);
                  if (section) {
                    window.scrollTo({
                      top: section.offsetTop - 100,
                      behavior: 'smooth',
                    });
                  }
                }}
                className={`nav-pill ${activeSection === item ? "active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
