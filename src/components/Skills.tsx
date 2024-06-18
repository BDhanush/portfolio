import './Skills.css'
import { skillsItems } from '../data/skillsData'

function Skills() {
  return (
    <div id='skills'>
      <h2>Skills</h2>
      {skillsItems.map((item) => (
        <div
          className="chip"
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Skills