import "./App.scss";
import Myprojects from "./components/myprojects/Myprojects.jsx";
import Career from "./components/career/Career.jsx";
import Home from "./components/home/Home.tsx";
import Slidebar from "./components/slideBar/Slidebar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import 'aos/dist/aos.css'
function App() {

  return (
    <div className="appall " >
      <div className="appcontainer">
        <div className="Slidebardiv">
          <Slidebar />
        </div> 
        <div className="homediv" >
          <Home />
        </div>
       
      </div>
      <div className="navbardiv">
        <Navbar />
        </div>
      <div className="myprojectsdiv">
        <Career />
      </div>
      <div className="myprojectsdiv">
        <Myprojects />
      </div>
      <div className="footerdiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
