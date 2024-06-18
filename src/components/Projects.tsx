import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'
import { projectItems } from '../data/ProjectData';

const Projects = () => {

  return (
    <div id='projects'>
      <h2>Projects</h2>
      <div className="card-container">
        {projectItems.map((card,index) => (
          
          <ProjectCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            summary={card.summary}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
