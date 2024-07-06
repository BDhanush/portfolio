import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import './Experience.css'
import { experienceItems } from '../data/ExperienceData';

export default function Experience() {
  return (
    <div id='experience'>
            <h2>Experience</h2>
        <Timeline className='timeline'
        sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
            marginLeft:0,
            paddingLeft:0
            },
        }}
        >
        {experienceItems.map((item, index) => (
            <TimelineItem>
                <TimelineOppositeContent color="aliceblue" style={{minWidth: '175px'}}>
                {item.time}
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                <TimelineDot />

                {index !== experienceItems.length-1 && (<TimelineConnector />)}

                </TimelineSeparator>

                <TimelineContent style={{paddingBottom:'30px'}}>
                  <a href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <h3>
                    {item.company}
                  </h3>
                  <h4>
                    {item.role}
                  </h4>
                  </a>
                  <ul>
                    {item.description.split('.').map((item,index) =>
                    <li key={index}>{item+'.'}</li>
                  )}
                </ul>
                </TimelineContent>

            </TimelineItem>
      ))}
        
        </Timeline>
    </div>
  );
}
