import './TechnicalInfo.css'
import {useState} from 'react'
import Experience from './TechInfo/Experience.jsx'
import Projects from './TechInfo/Projects.jsx'
import TechnicalSkills from './TechInfo/TechnicalSkills.jsx'

function TechnicalInfo() {
  const [projectsPopUp, setProjectsPopUp] = useState(false)
  const [skillsPopUp, setSkillsPopUp] = useState(false)
  const [expPopUp, setExpPopUp] = useState(false)

  return (
    <>
      <section id="Tech-Nav-Bar">
        <button id="projButton" onClick={() => setProjectsPopUp(true)}> Projects </button>
        <button id="skillsButton" onClick={() => setSkillsPopUp(true)}> Technical Skills </button>
        <button id="expButton" onClick={() => setExpPopUp(true)}> Experience </button>

        { projectsPopUp && <Projects setProjectsPopUp={setProjectsPopUp}/> }
        { skillsPopUp && <TechnicalSkills/> }
        { expPopUp && <Experience/> }

      </section>
    </>
  )
}

export default TechnicalInfo