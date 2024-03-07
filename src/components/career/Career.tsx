import { useEffect } from "react";
import "./career.scss"
import bg1 from "../../assets/images/bg1.jpg"
import CareerItem from "./CareerItem";
import lyceehouara from "../../assets/images/lyceehouara.jpg";

  const myCareer = [
      {
        event : "Bachelor of Science in Physical",
        date : "2021",
        location:"Oulad Teima",
        otherInfo : "Houara high school",
        img: lyceehouara
      },
      {
        event : "Bachelor of Science in Physical",
        date : "2021",
        location:"Oulad Teima",
        otherInfo : "Houara high school",
        img: lyceehouara

      },
      {
        event : "Bachelor of Science in Physical",
        date : "2021",
        location:"Oulad Teima",
        otherInfo : "Houara high school",
        img: lyceehouara
      }

  ]
 

const Career = ()=>{

    useEffect(() => {
        const careerItems = document.querySelectorAll('.career-item');
    
        const handleScroll = () => {
          careerItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight * 0.75; // Adjust the visibility threshold
    
            if (isVisible) {
              item.classList.add('visible');
            } else {
              item.classList.remove('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the initial check
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <>
        <div className="allCareer">
        <div className="carrerTitleDiv">
             <h2> My career</h2>
             <hr />
        </div>
        <div className="career-timeline">
          <div style={{display:"flex",justifyContent:"space-between",}}>
          <div className="vertical-line"></div>
          <div className="leftPartCareer">
          {/* <div className="career-item">
            <p>Obtenu mon baccalauréat - 2021</p>
             <img src={bg1} alt="" width={"100%"}/>
          </div> */}
          <CareerItem/>
          
         
          {/* <div className="career-item">
            <p>2022 - Internship with LAFARGE HOLCIM AGADIR </p>
            <img src={bg1} alt="" width={"100%"}/>
          </div>
          <div className="career-item">
            <p>2023 - Get my Diploma DUT EST Essaouira </p>
            <img src={bg1} alt="" width={"100%"}/>
          </div>
          <div className="career-item">
            <p>2024 -  2 Months to get my licence </p>
            <img src={bg1} alt="" width={"100%"}/>
          </div> */}

          </div>
         
            {/* hohoohohohohoho */}
            <div className="rightPartCareer">
            {/* <div className="career-item">
            <p>2021 - Start learning in EST Essaouira  </p>
            <img src={bg1} alt="" width={"100%"}/>
          </div>
          <div className="career-item">
            <p>2023 -  Intership with Starthinc</p> 
            <img src={bg1} alt="" width={"100%"}/>
          </div>
          <div className="career-item">
            <p>2023 - Start Licence Pro Meknes </p>
            <img src={bg1} alt="" width={"100%"}/>
          </div> */}
       
            </div>
          </div>
      
           
        </div>
        </div>

        </>
      );

}
export default Career;