import React from "react";
import "./navbar.scss"
import mypic from "../../../public/icons/me2circle.png"
const Navbar = () =>{




      return(
          <div className="allnavbar">
               <div className="logonavbar">
                  <img src={mypic} alt="" />
               </div>
               <div className="listnav">
                   <ul>
                     <li>Home</li>
                     <li>Career</li>
                     <li>Projects</li>
                     <li>Technologies</li>
                     <li>Contact</li>
                   </ul>
               </div>
               
          </div>
      )
}



export default Navbar; 