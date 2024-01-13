// home.tsx
import './home.scss';
const Home=()=>{
  
  return (
    <div className="homecontainerdiv">
      <div className="cardbg">
         <video src="./src/assets/videos/backblue.mp4" autoPlay  loop ></video>
      </div>

      <div className="myname">
        <div style={{ width: '100%', margin: 'auto', height: '50px' }}>
          <h1 id="h1_1">AMARJANE&nbsp;ELMAHDI</h1>
          <h1 id="h1_2">AMARJANE&nbsp;ELMAHDI</h1>
        </div>
      </div>
      <h4 id="developpertext"><span>&lt;</span>WEB DEVELOPER<span>/&gt;</span></h4>
    </div>
  );
};

export default Home;
