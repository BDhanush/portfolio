import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // For styling
import { getLink } from '../data/ProjectData';

interface CardProps {
  imageSrc: string;
  title: string;
  summary: string;
  
}

const ProjectCard: React.FC<CardProps> = ({ imageSrc, title, summary }) => {
  return (
    <Link to={`/projects/${getLink(title)}`}>
    <div className="card">
    <div className="card-image">
      <img src={imageSrc} alt={title} loading="lazy" decoding="async" />
      <div className="overlay">
        <div className="text">{summary}</div>
      </div>
    </div>
    <div className="card-title">{title}</div> {/* Title below the image */}
  </div>
  </Link>
  );
};


export default ProjectCard;