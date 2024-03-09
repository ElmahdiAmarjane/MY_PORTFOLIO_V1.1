import './myprojects.scss'
import CardProject from "./CardProject.jsx"
function Myprojects() {
  return (
    <>
      <div className="allprojects">
      <div className="carrerTitleDiv">
             <h2> My Projects</h2>
             <hr className="hrincareer"/>
        </div>
        <div className="cards">
       
        <CardProject/>
      
          
        </div>
      </div>
    </>
  );
}

export default Myprojects;
