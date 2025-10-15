import React, { useState } from "react";
import "../css/Projects.css";

const projectsData = [
  {
    title: "KULTOURA: A WEB AND MOBILE TOUR NAVIGATION GUIDE WITH 360-PINNED VIRTUAL VIEW FOR MANILA",
    images: ["../project/Kultoura (1).jpg", "../project/Kultoura (2).jpg"],
    description: (
      <>
        Kultoura is a thesis project and a cross-platform app designed to enhance the travel experience for tourists in Manila. The app connects tourists with local drivers of kalesa, e-trikes, and e-jeepneys, offering fixed fare rates to eliminate concerns about overcharging. 
        Features include a real-time chat for safety, a 360-degree pinned virtual view, and a customizable itinerary for a more interactive and informative journey. Users can easily track their location, pick-up, and drop-off points.
        This project was developed using <span className="highlight-tech">PHP</span>, the <span className="highlight-tech">Laravel</span> framework, and <span className="highlight-tech">Firebase</span>.
      </>
    ),
  },

  {
    title: "Clearance and Negative Listing System",
    images: ["../project/cnl(0).png", 
      "../project/cnl(0.1).png", 
      "../project/cnl(1).png",
      "../project/cnl(2).png", 
      "../project/cnl(3).png", 
      "../project/cnl(4).png",],
    description: (
      <>
        This project involves the creation of a clearance and negative listing system, enabling the management of individuals with financial or administrative issues within an organization. It ensures that users with pending clearances or violations are flagged and cannot proceed with certain transactions.
        Developed with a focus on secure data handling and efficient processing of clearance statuses.
      </>
    ),
  },

  {
    title: "Associates Portal (Work Schedule)",
    images:["../project/ws(1).png", 
      "../project/ws(2).png",
      "../project/ws(3).png", 
      "../project/ws(4).png", ],
    description: (
      <>
        The Associates Portal for Work Schedules streamlines employee schedule management. Employees can submit, confirm, and track their work schedules, ensuring they match their time-in and time-out records via fingerprint authentication when entering the workplace. The system also facilitates leave requests. 
        Backend was built with <span className="highlight-tech">MySQL (Navicat)</span>, while frontend technologies include <span className="highlight-tech">CSS</span>, <span className="highlight-tech">HTML</span>, <span className="highlight-tech">Bootstrap</span>, and <span className="highlight-tech">PHP</span>.
      </>
    ),
  },

  {
    title: "Associates Portal (Attendance Report & Announcements)",
    images: ["../project/assoc (1).png", 
      "../project/assoc (2).png",
      "../project/assoc (3).png", 
      "../project/assoc (4).png", ],

    description: (
      <>
        This project consolidates employee attendance reports and announcements in one portal. It allows the admin to manage attendance data for various branches (e.g., FEU Alabang, Tech, or Diliman) and push important announcements to employees. The system supports both admin and user roles, ensuring a seamless experience for all users.
        Developed using <span className="highlight-tech">MySQL (Navicat)</span> for the backend, with <span className="highlight-tech">CSS</span>, <span className="highlight-tech">HTML</span>, <span className="highlight-tech">Bootstrap</span>, and <span className="highlight-tech">PHP</span> for the frontend, and <span className="highlight-tech">CodeIgniter3</span> for framework..
      </>
    ),
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
    description: (
      <>
        The Ultimate Dashboard is a centralized platform that provides university staff with access to all internal applications in one interface. Designed for ease of navigation and optimal user experience, this project was developed using <span className="highlight-tech">PHP</span>, <span className="highlight-tech">CSS</span>, <span className="highlight-tech">HTML</span>, <span className="highlight-tech">Bootstrap</span>, and <span className="highlight-tech">CodeIgniter3</span> for framework.
      </>
    ),
  },

    {
    title: "Quokky Bites: Online Food Ordering System",
    images: ["../project/quokky-1.png",
      "../project/quokky-2.png",
      "../project/quokky-3.png",
      "../project/quokky-4.png",
      "../project/quokky-5.png",
    ],
    description: (
      <>
        Quokky Bites is an online food ordering system that allows users to browse and order food from various vendors, providing both user and admin interfaces for a smooth transaction process. It’s designed to enhance the customer ordering experience with a clean and user-friendly interface.
        The backend was built using <span className="highlight-tech">MySQL</span>, while the frontend leverages <span className="highlight-tech">CSS</span>, <span className="highlight-tech">HTML</span>, <span className="highlight-tech">Bootstrap</span>, <span className="highlight-tech">PHP</span>, and <span className="highlight-tech">CodeIgniter3</span> for framework.
      </>
    ),
  },
]




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
