import { useEffect } from "react";
import "./career.scss"
//import bg1 from "../../assets/images/bg1.jpg"
import CareerItem from "./CareerItem";
//import lyceehouara from "../../assets/images/lyceehouara.jpg";
import myCareerInfos from "../databaselocal/Careerinfos.json"

 const careerinfos = myCareerInfos;
 console.log(careerinfos);


const Career = ()=>{

    useEffect(() => {
        const careerItems = document.querySelectorAll('.career-item-scroll');
    
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
             <hr className="hrincareer"/>
        </div>
        <div className="career-timeline">
          <div style={{display:"flex",justifyContent:"space-between",}}>
          <div className="vertical-line" id="vertical-line"></div>
          <div className="leftPartCareer">
      {
     
         careerinfos.map((index , key )=>(
           <div className="career-item-scroll">
{            index.left? <CareerItem className="" career = {index} />:null
}
           </div>

         )

         )
       }
       
          
     

          </div>
         
            {/* hohoohohohohoho */}
            <div className="rightPartCareer">
      
            {
     
     careerinfos.map((index , key )=>(
       <div className="career-item-scroll">
{        index.left?null :<CareerItem  career = {index}  />
}
       </div>
        //<></>

     )

     )
   }
            </div>
          </div>
      
           
        </div>
        </div>

        </>
      );

}
export default Career;