import './Experience.css'

// eslint-disable-next-line react/prop-types
function Experience({setExpPopUp}) {
  return (
    <>
    <section id="exp-container">
      <section id="Jobs"> 
        <h3> Accès Pharma Kirkland </h3>
        <img src="/Experience/AccesPharmaLogo.webp" alt="Acces Pharma Logo" />
        <section id="ProjInfo">
          <section id="taskSection">
          <p id="mini-header"> Tasks </p>
            <ul>
              <li> Serve Customers </li>
              <li> Take Calls </li>
              <li> Place Stock </li>
              <li> Cashier </li>
            </ul>
          </section>
          <section id="timeTable">
            <p> Started: <br></br> 02-2019 </p>
            <p> Ended: <br></br> 06-2022 </p>
          </section>
        </section>
        <p> WebSite Link: <a href="https://www.accespharma.ca/en"> Accès Pharma Homepage </a> </p>
      </section>
      <section id="Jobs"> 
        <h3> Jack Astor&apos;s Bar and Grill Laval </h3>
        <img src="/Experience/jackAstorsLogo.webp" alt="Jack Astor's Logo"/>
        <section id="ProjInfo">
          <section id="taskSection">
          <p id="mini-header"> Tasks </p>
            <ul>
              <li> Serve Customers </li>
              <li> Clean Tables </li>
              <li> Run Meals </li>
              <li> Help Waiters </li>
            </ul>
          </section>
          <section id="timeTable">
            <p> Started: <br></br> 10-2022 </p>
            <p> Ended: <br></br> 08-2023 </p>
          </section>
        </section>
        <p> WebSite Link: <a href="https://jackastors.com/"> Jack Astor&apos;s Homepage </a> </p>
      </section>
      <section id="Jobs"> 
        <h3> Accès Pharma Kirkland </h3>
        <img src="/Experience/Scala20Logo.webp" alt="Acces Pharma Logo" />
        <section id="ProjInfo">
          <section id="taskSection">
          <p id="mini-header"> Tasks </p>
            <ul>
              <li> Serve Customers </li>
              <li> Take Calls </li>
              <li> Place Stock </li>
              <li> Cashier </li>
            </ul>
          </section>
          <section id="timeTable">
            <p> Started: <br></br> 02-2019 </p>
            <p> Ended: <br></br> 06-2022 </p>
          </section>
        </section>
        <p> WebSite Link: <a href="https://www.accespharma.ca/en"> Acces Pharma Homepage </a> </p>
      </section>
      <button id="exit" onClick={() => setExpPopUp(false)}> Exit </button>
    </section>
    </>
  )
}

export default Experience