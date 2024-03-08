import bg1 from "../../assets/images/bg1.jpg";
import "./careeritem.scss"
import dateicon from "../../assets/icons/date50.png";
import eventicon from "../../assets/icons/event50.png";
import locationicon from "../../assets/icons/location50.png";
import lyceehouara from "../../assets/images/lyceehouara.jpg";
import estessaouira from "../../assets/images/estessaouira.jpg";
import meinlafarge from "../../assets/images/meinlafarge.jpg";
import starthinc from "../../assets/images/starthinc.jpg";
import pfeessaouira from "../../assets/images/pfeessaouira.jpg";
import estmeknes from "../../assets/images/estmeknes.jpg"

const CareerItem = ({career}) => {

    



  return (

    <div className="cardItem">
 <div className="career-item">
   <div className="dateIcon careerdivflex">
    <img src={dateicon} alt="" />
     <h4 className="date">{career.date}</h4>
   </div>
   <div className="eventIcon careerdivflex">
    <img src={eventicon} alt="" />
    <p className="title">{career.event} </p>
   </div>
   <div className="locationIcon careerdivflex">
    <img src={locationicon} alt="" />
    <p className="title">{career.location}</p>
   </div>
      <img  src={"./src/assets/images/"+career.img+".jpg"} alt="" width={"100%"} height={"150px"} style={{borderRadius:"5px"}}/>
       <p className="infos">{career.otherInfo}</p>
    </div>

    </div>
   
  );
};

export default CareerItem;
