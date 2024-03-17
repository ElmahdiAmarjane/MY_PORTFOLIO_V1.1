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
      const isOnPhone = window.innerWidth <= 600;

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
                src="./public/icons/me2circle.png"
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
            
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64"
     >
    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>

                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"
     >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
        </g>
    </g>
</svg>

                </a>

                <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"
     >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(4,4)">
            <path d="M55,10h-46c-2.209,0 -4,1.791 -4,4v34c0,2.209 1.791,4 4,4h46c2.209,0 4,-1.791 4,-4v-34c0,-2.209 -1.791,-4 -4,-4zM55,45.738c-0.046,1.262 -1.099,2.262 -2.382,2.262h-3.118l1.5,-27l-19,12l-19,-11l1.5,26h-3.118c-1.283,0 -2.336,-1 -2.382,-2.262v-29.449c0,-1.25 1.03,-2.263 2.3,-2.263h1.2l19.5,14.974l19.5,-14.974h1.2c1.27,0 2.3,1.013 2.3,2.263z"></path>
        </g>
    </g>
</svg>

                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"
    >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
        </g>
    </g>
</svg>

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
              src="./public/icons/me2circle.png"
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

              <a href="https://github.com/ElmahdiAmarjane" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 64 64"
     >
    <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>

                </a>
                <a href="https://www.linkedin.com/in/elmahdi-amarjane-3a342a264/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 256 256"
     >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
        </g>
    </g>
</svg>

                </a>

            </div>
            <div>

            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 256 256"
     >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(4,4)">
            <path d="M55,10h-46c-2.209,0 -4,1.791 -4,4v34c0,2.209 1.791,4 4,4h46c2.209,0 4,-1.791 4,-4v-34c0,-2.209 -1.791,-4 -4,-4zM55,45.738c-0.046,1.262 -1.099,2.262 -2.382,2.262h-3.118l1.5,-27l-19,12l-19,-11l1.5,26h-3.118c-1.283,0 -2.336,-1 -2.382,-2.262v-29.449c0,-1.25 1.03,-2.263 2.3,-2.263h1.2l19.5,14.974l19.5,-14.974h1.2c1.27,0 2.3,1.013 2.3,2.263z"></path>
        </g>
    </g>
</svg>

                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="30" viewBox="0 0 256 256"
    >
    <g  fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
        <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
        </g>
    </g>
</svg>

                </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Slidebar;
