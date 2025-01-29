import './TechnicalSkills.css'
import {useEffect, useRef} from 'react'

// eslint-disable-next-line react/prop-types
function TechnicalSkills({setSkillsPopUp}) {

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.tagName !== 'IMG') {
        setSkillsPopUp(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSkillsPopUp]);

  return (
    <>
    <section id="skills-container" ref={sectionRef}>
    <img className="language-framework-logo" src="LanguageLogos\csharp.svg" alt="C# Logo" title="C#"></img>
      <img className="language-framework-logo" src="LanguageLogos\java.svg" alt="Java Logo" title="Java"></img>
      <img className="language-framework-logo" src="LanguageLogos\kotlin.svg" alt="Kotlin Logo" title="Kotlin"></img>
      <img className="language-framework-logo" src="LanguageLogos\python.svg" alt="Python Logo" title="Python"></img>
      <img className="language-framework-logo" src="LanguageLogos\html-5.svg" alt="HTML Logo" title="HTML"></img>
      <img className="language-framework-logo" src="LanguageLogos\css.svg" alt="CSS Logo" title="CSS"></img>
      <img className="language-framework-logo" src="LanguageLogos\javascript.svg" alt="JavaScript Logo" title="JavaScript"></img>
      <img className="language-framework-logo" src="LanguageLogos\sql.svg" alt="SQL Logo" title="SQL"></img>
      <img className="language-framework-logo" src="FrameWorkLogos\react.svg" alt="React Logo" title="React"></img>
      <img className="language-framework-logo" src="FrameWorkLogos\node-js.svg" alt="Node.js Logo" title="Node.js"></img>
      <img className="language-framework-logo" src="FrameWorkLogos\git.png" alt="Git Logo" title="Git"></img>
    </section>
    </>
  )
}

export default TechnicalSkills