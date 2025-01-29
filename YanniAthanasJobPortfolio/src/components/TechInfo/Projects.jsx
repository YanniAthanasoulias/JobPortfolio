import './Projects.css'
import {useEffect, useRef} from 'react'

// eslint-disable-next-line react/prop-types
function Projects({setProjectsPopUp}) {

  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( sectionRef.current && 
        !event.target.closest("#proj") &&
        !sectionRef.current.contains(event.target)) {
        setProjectsPopUp(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setProjectsPopUp]);

  return (
    <>
    <section id="projsContainer" ref={sectionRef}>
      <section id="proj"> 
        <h3> US Obesity and Nutrition Map </h3>
          <img src="/USMap.png" alt="US Obesity & Nutrition Map" />
        <section id="ProjInfo">
          <section id="toolSection">
          <p id="mini-header"> Tools </p>
            <ul>
              <li> React </li>
              <li> Js </li>
              <li> Node.js </li>
              <li> Express </li>
              <li> MongoDb </li>
              <li> Leaflet </li>
              <li> Chart.js </li>
            </ul>
          </section>
          <p>
            React and Node JS app. Displays obesity and nutritional data of the US to maps and charts.
            Data is parsed and fetched using Express to create different routes to get specific data. 
            Uses MongoDB to store all data. Includes Unit testing, Express routes, React app, etc.
          </p>
        </section>
        <p> GitHub Link: <a href="https://github.com/YanniAthanasoulias/USObesity-NutritionMap"> US Obesity and Nutrition Map Repo </a> </p>
      </section>

      <section id="proj"> 
        <h3> Paintdrop Simulator </h3>
        <video controls muted>
          <source src="/PaintDrop.mp4" type="video/mp4"/>
        </video>
        <section id="ProjInfo">
          <section id="toolSection">
          <p id="mini-header"> Tools </p>
            <ul>
              <li> C# </li>
              <li> JUnit </li>
              <li> Monogame </li>
              <li> Visual Studio </li>
              <li> Git Artifacts </li>
            </ul>
          </section>
          <p>
            C# application which allows users to create, search, rate and comment on recipes. 
            Includes validation for users, full front-end UI app using Avalonia. 
            Includes use of a database (SQL) to store all the recipe and user info.
          </p>
        </section>
        <p> GitHub Link: <a href="https://github.com/YanniAthanasoulias/PaintDrop"> PaintDrop Repo </a> </p>
      </section>

      <section id="proj"> 
        <h3> Medical System </h3>
        <img src="/MedicalSystem.png" alt="Medical System" />
        <section id="ProjInfo">
          <section id="toolSection">
          <p id="mini-header"> Tools </p>
            <ul>
              <li> Python </li>
              <li> SQL </li>
              <li> Flask </li>
              <li> Api tokens </li>
              <li> OracleDB </li>
              <li> SQL<br></br>Developper </li>
            </ul>
          </section>
          <p>
            Full stack Flask Hospital python website. 
            Api tokens decide the different access levels of different users in the website
            Depending on the user type, they can create/handle appointments, accept them, disable and enable users, etc.
            Everything in the Website gets saved to Tables in sqlDevelopper
          </p>
        </section>
        <p> GitHub Link: <a href="https://github.com/YanniAthanasoulias/MedicalSystem"> Medical System Repo </a> </p>
      </section>

      <section id="proj"> 
        <h3> ColorGuesser </h3>
        <img src="/ColorGuesser.png" alt="Color Guesser Game" />
        <section id="ProjInfo">
          <section id="toolSection">
          <p id="mini-header"> Tools </p>
            <ul>
              <li> Js </li>
              <li> Html Native </li>
              <li> Css Native </li>
            </ul>
          </section>
          <p>
            Js Tile Color Guessing Game. Users can choose between 3-6 rows of tiles, which get set to a random color. 
            Depending on the difficulty the user choosers the shade of the colors will get closer and closer to each other.
            Users can see their results when they submit their guesses.
          </p>
        </section>
        <p> GitHub Link: <a href="https://github.com/YanniAthanasoulias/ColorGuesser"> Color Guesser Repo </a> </p>
      </section>

      <section id="proj"> 
        <h3> Weather Forecaster </h3>
        <img src="/WeatherForecaster.png" alt="Weather Forecaster App" />
        <section id="ProjInfo">
          <section id="toolSection">
          <p id="mini-header"> Tools </p>
            <ul>
              <li> Js </li>
              <li> Html Native </li>
              <li> Css Native </li>
              <li> Fetching </li>
            </ul>
          </section>
          <p>
            Weather Forecaster app. Users can choose a city, which fetches for all the different cities with that name.
            Once you choose your city, the Longitude/Latitude of that city is displayed. 
            Once you press submit, the weather forecast for the next three days will be displayed for that city
          </p>
        </section>
        <p> WebSite Link: <a href="https://yanniathanasouliasweatherapiapp.netlify.app/"> Weather Forecaster </a> </p>
      </section>

      <section id="proj"> 
        <h3> Currently Working on... </h3>
        <img src="/comingSoon.webp" alt="Coming Soon img" />
        <h1> Hockey Card Collecting Game WebSite </h1>
      </section>
    </section>
    </>
  )
}

export default Projects