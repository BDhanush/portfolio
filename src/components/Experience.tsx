import './Experience.css'
import { experienceItems } from '../data/ExperienceData';

export default function Experience() {
  return (
    <div id='experience'>
      <h2>Experience</h2>
      <ul className='timeline'>
        {experienceItems.map((item, index) => (
          <li className='timeline-item' key={index}>
            <div className='timeline-time'>{item.time}</div>

            <div className='timeline-separator'>
              <span className='timeline-dot' />
              {index !== experienceItems.length - 1 && <span className='timeline-connector' />}
            </div>

            <div className='timeline-content'>
              <a href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className='timeline-time-mobile'>{item.time}</p>
                <h3>
                  {item.company}
                </h3>
                <h4>
                  {item.role}
                </h4>
              </a>
              <ul>
                {item.description.split('.').map((sentence, i) =>
                  <li key={i}>{sentence + '.'}</li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
