import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPage.css'; // For styling
import { FaGithub } from 'react-icons/fa';
import { projectItems, getLink } from '../data/ProjectData';
import NotFound from './NotFound';

const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  const project = projectItems.find(item => getLink(item.title) === slug);

  if (!project) return <NotFound />;

  const { ytLink, title, description, githubLink } = project;
  const otherLinks = 'otherLinks' in project ? project.otherLinks : undefined;
  const descriptionList = description.split('.').map((item) =>
    item+='.'
  )

  return (
    <div id='projectPage'>
    <h2>{title}</h2>
    {ytLink &&
      <div className="video-wrapper">
        <iframe
          src={ytLink}
          title="YouTube video player"
          loading="lazy"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>}
      <div className="list-container">
        <ul>
            {descriptionList.map((item,index) =>
            <li key={index}>{item}</li>
          )}
        </ul>
      </div>
      {githubLink &&
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
        <FaGithub style={{fontSize:'24px',marginRight: '10px',}}/>
        <span className="button-text">Source Code</span>
        </a>
      }
      {otherLinks &&
        <div>
        <h3>Other Links</h3>
        {otherLinks.map((item,index) =>
        <div style={{padding:'10px 0px'}} key={index}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
        {item.title}
        </a>
        </div>
        )}
        </div>
      }
      </div>
  );
};

export default ProjectPage;
