import React from "react";
import "./cardProject.scss"
const CardProject = ()=>{



    return (

        <div className="cardProject" style={{ width: "18rem" }}>
        <img src="./src/assets/images/pfeessaouira.jpg" className="card-img-top-" alt="..." />
        <div className="card-body-">
          <h5 className="card-title-">WORLD CUP QATAR 2022</h5>
          <p className="card-text-">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <button  className="btnDiscover">
            Discover 
          </button>
        </div>
      </div>
    )

}

export default CardProject;