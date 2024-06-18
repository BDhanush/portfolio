import React from 'react'
import './Achievements.css'
import CP from './CP'
import { achievementItems } from '../data/AchivementsData'

function Achievements () {
  return (
    <div id='achievements'>
      <h2>Achievements</h2>
      <ul style={{margin:'auto 50px'}}>
      {achievementItems.map((item,index) => 
        item.link? <a href={item.link} target="_blank" rel="noopener noreferrer"><li key={index}>{item.text}</li></a> : <li key={index}>{item.text}</li>
      )}
      </ul>
      <CP/>
    </div>
  )
}

export default Achievements