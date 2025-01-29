import './About.css'

function About() {
  return (
    <>
    <section>
        <section id="about">
          <img src="/PortfolioImg.jpg" id="profileImg" />
          <section id="About-Professional"> 
            {/* In the past 4 years of coding, I have been working on group projects with classmates. Now I want to get real experience. My main objective is to improve my skills as a developer, and to work with others  */}
            <h4> Professional Objectives </h4>
            <ul>
              <li> Technical Work Experience </li>
              <li> Improve Technical Skills </li>
              <li> Learn New Technology </li>
              <li> Meet Like-Minded People </li>
            </ul>
          </section> 
            <section id="About-Personal"> 
              <h4> Personal Interests </h4>
                <ul>
                  <li> Basketball Discourse</li>
                  <li> Story Driven Games </li>
                  <li> Modding Older Games </li>
                  <li> Playing Hockey & Basketball </li>
                </ul>
            </section>
        </section>
    </section>
    </>
  )
}

export default About