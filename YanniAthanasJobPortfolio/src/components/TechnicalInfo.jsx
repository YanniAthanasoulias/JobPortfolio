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
        <section className="Button" onClick={() => setProjectsPopUp(true)}><span> Projects </span></section>
        <section className="Button" onClick={() => setSkillsPopUp(true)}><span> Technical Skills </span></section>
        <section className="Button" onClick={() => setExpPopUp(true)}><span> Experience </span></section>

        { projectsPopUp && <Projects setProjectsPopUp={setProjectsPopUp}/> }
        { skillsPopUp && <TechnicalSkills setSkillsPopUp={setSkillsPopUp}/> }
        { expPopUp && <Experience setExpPopUp={setExpPopUp}/> }

      </section>
    </>
  )
}

export default TechnicalInfo