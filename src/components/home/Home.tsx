// home.tsx
import './home.scss';
const Home=()=>{
  
  return (
    <div className="homecontainerdiv">
       <div className="infos">
           <p>Tel : 06 55 82 11 59</p>
           <p>amarjaneelmahdi03@gmail.com</p>
       </div>

      <div className="myname">
        <div >
          <h1 id="h1_1">AMARJANE&nbsp;ELMAHDI</h1>
          <h1 id="h1_2">AMARJANE&nbsp;ELMAHDI</h1>
        </div>

      </div>
      <h4 id="developpertext"><span>&lt;</span>WEB DEVELOPER<span>/&gt;</span></h4>
       <div className="audioHello">
        <h4>Listen and get to know me</h4>
           <audio controls>
          <source src="./src/assets/audios/Hello.mp3" type="audio/mp3" />
              Your browser does not support the audio tag.
        </audio>
       </div>
       <div className="scrollMouse">
           <img src="./src/assets/images/mouse.png" alt=""   />
       </div>
    </div>
  );
};

export default Home;
