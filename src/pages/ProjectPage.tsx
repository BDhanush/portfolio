import React from 'react';
import './ProjectPage.css'; // For styling

interface OtherLinks{
  title:string;
  link:string;
}

interface Props {
  ytLink: string;
  title: string;
  description: string;
  images: string[];
  githubLink:string;
  otherLinks:OtherLinks[] | undefined;
  
}

const ProjectPage: React.FC<Props> = ({ ytLink, title, description, images, githubLink, otherLinks }) => {

  const descriptionList = description.split('.').map((item) =>
    item+='.'
  )
  images
  return (
    <div id='projectPage'>
    <h2>{title}</h2>
    {ytLink && <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={ytLink}
          title="YouTube video player"
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
        <img 
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
          alt="GitHub logo" 
          className="github-logo" 
        />
        <span className="button-text">Source Code</span>
        </a>
      }
      {otherLinks &&
        <div>
        <h3>Other Links</h3>
        {otherLinks.map((item,index) =>
        <div style={{padding:'10px 0px'}}>
        <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
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