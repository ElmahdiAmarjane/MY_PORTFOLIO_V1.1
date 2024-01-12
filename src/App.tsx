import './App.scss'
import Home from './components/home/Home';
import Slidebar from './components/slideBar/Slidebar';

function App() {
   

    return (
    <div className='appcontainer' >
         <div className='Slidebardiv'>
         <Slidebar/>
        </div>
        <div className='homediv'>
         <Home/>
        </div>
         
    </div>

);
     
        
}





export default App;
