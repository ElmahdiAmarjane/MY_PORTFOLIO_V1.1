import './myprojects.scss'
import CardProject from "./CardProject.jsx"
import Aos from "aos"
import 'aos/dist/aos.css'
import discovermorepng from "../../assets/images/discovermore.png"
import { useEffect } from 'react'


function Myprojects() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="allprojects "  >
      <div className="carrerTitleDiv">
             <h2> My Projects</h2>
             <hr className="hrincareer"/>
        </div>
        <div className="cards">
       
        <CardProject/>
      
          
        </div>
        <div className="discovermore">
            <h3>DISCOVER MORE THINGS USING NAVIGATION</h3> 
             <img src={discovermorepng} alt="" />
        </div>
      </div>
    </>
  );
}

export default Myprojects;
