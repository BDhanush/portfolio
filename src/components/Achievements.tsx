import './Achievements.css'
import CP from './CP'
import { achievementItems, images } from '../data/AchievementsData'
import Gallery from './Gallery'

function Achievements () {
  return (
    <div id='achievements'>
      <h2>Achievements</h2>
      <ul style={{paddingBottom:"20px"}}>
      {achievementItems.map((item,index) => 
        item.link? <a href={item.link} target="_blank" rel="noopener noreferrer"><li key={index}>{item.text}</li></a> : <li key={index}>{item.text}</li>
      )}
      </ul>
      <Gallery images={images} />
      <CP/>
    </div>
  )
}

export default Achievements