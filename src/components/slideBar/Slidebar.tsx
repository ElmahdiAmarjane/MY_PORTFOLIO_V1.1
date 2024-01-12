import React, { useRef, useEffect } from "react";
import "./slidebar.scss";
import 'bootstrap/dist/css/bootstrap.css'


function Slidebar() {
  return (
    <div className="slidebardiv">
      <div className="logodiv">
        <img id="logoimg" src="./public/icons/logoamarjane.png" alt="" />
      </div>
      <div className="menudiv">
        <nav className="menunav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      
      </div>
      <div className="barcontacticons">
        <div>
        <a href="https://example.com" target="_blank" >
        <img src="./src/assets/icons/github1.png"  className="bi-linkedin"></img>
      </a>
      <a href="https://example.com" target="_blank" >
        <img src="./src/assets/icons/linkedin1.png" className="bi-github"></img>
      </a>
        </div>
      <div>
      <a href="https://example.com" target="_blank" >
        <img src="./src/assets/icons/gmail.png" className="bi-gmail"></img>
      </a>
      <a href="https://example.com" target="_blank" >
        <img src="./src/assets/icons/whatsapp.png" className="bi-whatsapp"></img>
      </a>
      </div>
      
      </div>
    </div>
  );
}
export default Slidebar;
