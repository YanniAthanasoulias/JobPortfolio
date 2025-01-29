import './InfoBar.css'
import { MdPhoneIphone, MdEmail, MdLanguage } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

function InfoBar() {
  return (
    <>
    <section id="InfoBar">
      
      <section className="info">
      <MdPhoneIphone />
        <h4> 438-503-5013 </h4>
      </section> 
      
      <section className="info">
      <MdEmail />
        <h4> yanni.athanas04@gmail.com </h4>
      </section> 

      <section className="info">
      <MdLanguage />
        <h4> EN | FR </h4>
      </section> 

      <section className="info">
      <SiLinkedin />
        <h4> <a href="https://www.linkedin.com/in/yanni-athanasoulias-08b0b833a/ "> LinkedIn </a> </h4>
      </section> 
    </section>
    </>
  )
}

export default InfoBar