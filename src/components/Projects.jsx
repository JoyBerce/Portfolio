// my-portfolio/src/components/Projects.jsx
import React, { useState } from "react";
import "../css/Projects.css";

const projectsData = [
  {
    title: "KULTOURA: A WEB AND MOBILE TOUR NAVIGATION GUIDE WITH 360- PINNED VIRTUAL VIEW FOR MANILA",
    images: ["../project/Kultoura (1).jpg", "../project/Kultoura (2).jpg"],
    description:
      "Kultoura is an app for both web and mobile that helps tourists have a better travel experience in Manila. It provides an easy-to-use platform for tourists to plan their trips, with a travel itinerary feature to track their to-dos and desired destinations. Kultoura connects tourists with drivers who offer fixed fare rates, so there’s no worry about overcharging. For added safety, the app includes a real-time chat feature during trips and a 360-degree virtual view, allowing users to track their journey and monitor their pick-up, drop-off, and current location.",
  },
  {
    title: "Clearance and Negative Listing",
    images: ["/images/proj2-1.png", "/images/proj2-2.png"],
    description: "Amazing second project description.",
  },
  {
    title: "Associates Portal (Weekly Schedule)",
    images: ["/images/proj3-1.png", "/images/proj3-2.png"],
    description: "Aesthetic and powerful third project.",
  },
  {
    title: "Ultimate Dashboard",
    images: [
      "../project/ultdash (1).jpg",
      "../project/ultdash (2).jpg",
      "../project/ultdash (3).jpg",
      "../project/ultdash (4).jpg",
      "../project/ultdash (5).jpg",
    ],
    description: "Fifth project overview here.",
  },
  {
    title: "Quokky Bites",
    images: ["/images/proj6-1.png"],
    description: "Final project showcase!",
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projectsData[currentProjectIndex];
  const totalProjects = projectsData.length;
  const totalImages = currentProject.images.length;

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % totalProjects);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h1 className="projects-title">PROJECTS</h1>
<div className="project-nav">
  <div className="project-wrapper">
    <button onClick={prevProject} className="project-btn project-btn-left">⟨</button>

    <div className="project-content">
      <div className="project-image-container">
        <img
          src={currentProject.images[currentImageIndex]}
          alt={currentProject.title}
          className="project-image"
        />
        {totalImages > 1 && (
          <div className="image-nav">
            <button onClick={prevImage}>◀</button>
            <span>{currentImageIndex + 1}/{totalImages}</span>
            <button onClick={nextImage}>▶</button>
          </div>
        )}
      </div>
      <div className="project-description">
        <h2>{currentProject.title}</h2>
        <p>{currentProject.description}</p>
      </div>
    </div>

    <button onClick={nextProject} className="project-btn project-btn-right">⟩</button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Projects;
