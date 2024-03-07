import bg1 from "../../assets/images/bg1.jpg";
import "./careeritem.scss"
import dateicon from "../../assets/icons/date50.png";
import eventicon from "../../assets/icons/event50.png";
import locationicon from "../../assets/icons/location50.png";
import lyceehouara from "../../assets/images/lyceehouara.jpg";
const CareerItem = () => {

  



  return (
    <div className="cardItem">
 <div className="career-item">
   <div className="dateIcon careerdivflex">
    <img src={dateicon} alt="" />
     <h4 className="date">2021</h4>
   </div>
   <div className="eventIcon careerdivflex">
    <img src={eventicon} alt="" />
    <p className="title">Bachelor of Science in Physical </p>
   </div>
   <div className="locationIcon careerdivflex">
    <img src={locationicon} alt="" />
    <p className="title">Ouled Teima</p>
   </div>
      <img  src={lyceehouara} alt="" width={"100%"} />
       <p className="infos">Houara high school</p>
    </div>

    </div>
   
  );
};

export default CareerItem;
