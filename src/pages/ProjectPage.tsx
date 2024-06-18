import React from 'react';
import './ProjectPage.css'; // For styling
import { projectItems } from '../data/ProjectData';

interface Props {
  ytLink: string;
  title: string;
  description: string;
  images: string[];
  
}

const ProjectPage: React.FC<Props> = ({ ytLink, title, description, images }) => {

  const descriptionList = description.split('.').map((item) =>
    item+='.'
  )

  return (
    <div id='projectPage'>
    <h2>{title}</h2>
  <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={ytLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="list-container">
        <ul>
            {descriptionList.map((item,index) => 
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      </div>
  );
};

export default ProjectPage;