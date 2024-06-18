import React from 'react'
import './CP.css'
import { cpItems } from '../data/cpLinksData'

function CP() {
    
  return (
    <div id='competitiveProgramming'>
        <h2>Competitive Programming</h2>
        <div className="centered-container">
      {cpItems.map((item, index) => (
        <a 
        href={item.link} 
        key={index} 
        target="_blank"
        rel="noopener noreferrer"
        text-decoration= "none"
        className="centered-item">
          <div className="top-text">{item.title}</div>
          <div className="bottom-text">{item.ratingInfo}</div>
        </a>
      ))}
    </div>
    </div>
  )
}

export default CP