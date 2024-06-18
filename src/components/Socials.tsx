// SocialLinks.js
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { email, githubLink, instagramLink, linkedinLink } from '../data/SocialsData';

const Socials = () => {
  const iconStyle = {
    color: '#ffffff',
    margin: '0 10px',
    fontSize: '24px',
    transition: 'color 0.3s',
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FaGithub style={iconStyle} />
      </a>
      <a
        href={linkedinLink}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FaLinkedin style={iconStyle} />
      </a>
      <a
        href={`mailto:${email}`}
        style={linkStyle}
      >
        <FaEnvelope style={iconStyle} />
      </a>
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        <FaInstagram style={iconStyle} />
      </a>
    </div>
  );
};

export default Socials;
