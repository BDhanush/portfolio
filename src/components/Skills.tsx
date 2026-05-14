import './Skills.css'
import { skillsData } from '../data/skillsData'

function Skills() {
  return (
    <div id='skills'>
      <h2>Skills</h2>
      {skillsData.map((section) => (
        <div className="skills-section" key={section.category}>
          <h3 className="skills-category">{section.category}</h3>
          <div className="skills-chips">
            {section.items.map((item) => (
              <div className="chip" key={item}>{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills