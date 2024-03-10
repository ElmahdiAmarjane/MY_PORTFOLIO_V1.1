import React, { useEffect, useState } from "react";
import "./slidebar.scss";
import "bootstrap/dist/css/bootstrap.css";




function Slidebar() {


  const [onphone, setOnPhone] = useState(false);

  useEffect(()=> {
     if(window.innerWidth < 500){
        setOnPhone(true);
     }
     if(window.innerWidth > 500){
      setOnPhone(false);
   }
    
  } )

  const closeMenu = () => {
    const menuphone = document.getElementById("menuphone");
    if (menuphone) {
      menuphone.style.display = "none";
    }
  };
  const openMenu = () => {
    const menuphone = document.getElementById("menuphone");
    if (menuphone) {
      menuphone.style.display = "block";
    }
  };




  return (
    <>
      {onphone ? (
        <>
          <div className="slidebarcontainerphone">
            {/* Mobile version */}
            <div className="logodivphone">
              <img
                id="logoimgphone"
                src="./public/icons/logoamarjane.png"
                alt="Logo"
              />
            </div>

            <div
              onClick={() => {
                openMenu();
              }}
              className="menuiconphone"
            >
              <img
                src="./src/assets/icons/whiteiconmenu.png"
                alt="GitHub Icon"
              />
            </div>
          </div>

          <div className="menuphone" id="menuphone">
            <div
              onClick={() => {
                closeMenu();
              }}
              className="closemenu"
            >
              <img src="./src/assets/icons/whiteclosemenu.png" alt="" />
            </div>
            <nav className="menunavphone">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </nav>
            <div className="barcontacticonsphonefooter">
            <div className="barcontacticonsphone">
              <a href="https://example.com" target="_blank">
                <img
                  src="./src/assets/icons/github1.png"
                  className="bi-linkedin"
                ></img>
              </a>
              <a href="https://example.com" target="_blank">
                <img
                  src="./src/assets/icons/linkedin1.png"
                  className="bi-github"
                ></img>
              </a>

              <a href="https://example.com" target="_blank">
                <img
                  src="./src/assets/icons/gmail.png"
                  className="bi-gmail"
                ></img>
              </a>
              <a href="https://example.com" target="_blank">
                <img
                  src="./src/assets/icons/whatsapp.png"
                  className="bi-whatsapp"
                ></img>
              </a>
            </div>
             <div className="">
                 <h3>Amarjane Elmahdi 2024 *C</h3>
             </div>
            </div>
            
          </div>
        </>
      ) : (
        <div className="slidebarcontainer">
          {/* Desktop version */}
          <div className="logodiv">
            <img
              id="logoimg"
              src="./public/icons/logoamarjane.png"
              alt="Logo"
            />
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
                  <a href="#">Career</a>
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
      )}
    </>
  );
}

export default Slidebar;
