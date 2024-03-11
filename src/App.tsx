import './App.scss'
import Myprojects from './components/Myprojects/Myprojects';
import Career from './components/career/Career';
import Home from './components/home/Home';
import Slidebar from './components/slideBar/Slidebar.jsx';

function App() {
   

    return (
    <div className='appall' >
        <div className="appcontainer">
        <div className='Slidebardiv'> 
         <Slidebar/>
        </div>
        <div className='homediv'>
         <Home/>
        </div>
        
      

       
        </div>
        <div className="myprojectsdiv">
            <Career/>
        </div>
        <div className="myprojectsdiv">
            <Myprojects/>
        </div>
         
         
    </div>

);
     
        
}





export default App;
