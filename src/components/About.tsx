import './About.css'
import ProfilePicture from "../assets/ProfilePicture.jpg";
import Skills from './Skills';
import Socials from './Socials';
import {authorName,introHeader,introText} from '../data/AboutData'

function About() {
  return (
    <div id='about'>
      <div className='intro'>
        <div className="container">
          <h1>I'm<br></br>{authorName}</h1>
        <div className="content">
          <div className="text-wrapper">
            <h3 style={{paddingBottom:"10px"}}>{introHeader}</h3>
            <p>{introText}</p>
          </div>
          <div className="image-socials-wrapper">
            <img src={ProfilePicture} className="profile-image" />
            <Socials/>
          </div>
        </div>
      </div>
    </div>
    <Skills/>
    </div>
  )
}

export default About