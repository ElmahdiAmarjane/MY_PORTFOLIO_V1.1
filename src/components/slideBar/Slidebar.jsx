import React, { useEffect, useState, useRef } from "react";
import "./slidebar.scss";
import "bootstrap/dist/css/bootstrap.css";

function Slidebar() {
  const [onphone, setOnPhone] = useState(false);
  const [menuphoneshow, setmenuphoneshow] = useState(false);
  const reloadTriggered = useRef(false);
  const resizeTimeout = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isOnPhone = window.innerWidth < 600;

      if (isOnPhone !== onphone) {
        setOnPhone(isOnPhone);
        setmenuphoneshow(false);
        // Reset the reloadTriggered flag when screen size is above 600 pixels
        if (isOnPhone) {
          reloadTriggered.current = false;
        }

        if (isOnPhone && !reloadTriggered.current) {
          reloadTriggered.current = true;

          // Clear any existing timeout
          if (resizeTimeout.current) {
            clearTimeout(resizeTimeout.current);
          }

          // Set a new timeout to trigger reload after 500 milliseconds
          resizeTimeout.current = setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      // Clear the timeout on unmount
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
    };
  }, [onphone]);

  const closeMenu = () => {
    const menuphone = document.getElementById("menuphone");
    if (menuphone) {
      menuphone.style.display = "none";
    }
  };

  const openMenu = () => {
    setmenuphoneshow(true);
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
          {menuphoneshow ? (
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
          ) : null}
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
            </div>
            <div>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Slidebar;
