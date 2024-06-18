import React from 'react';
import './Card.css'; // For styling
import { getLink } from '../data/ProjectData';

interface CardProps {
  imageSrc: string;
  title: string;
  summary: string;
  
}

const ProjectCard: React.FC<CardProps> = ({ imageSrc, title, summary }) => {
  return (
    <a href={`projects/${getLink(title)}`}>
    <div className="card">
    <div className="card-image">
      <img src={imageSrc} alt={title} />
      <div className="overlay">
        <div className="text">{summary}</div>
      </div>
    </div>
    <div className="card-title">{title}</div> {/* Title below the image */}
  </div>
  </a>
  );
};


export default ProjectCard;