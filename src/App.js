import React from 'react';
import { BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import './index.css';
// import './App.css';
import Meeshopage from './Pages/Meeshopage';
import Sellonline from './Pages/Sellonline';
import Howwork from './Pages/Howwork';
import Pricecom from './Pages/Pricecom';
import Shipreturn from './Pages/Shipreturn';
import Growbuss from './Pages/Growbuss';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Startselling from './Pages/Startselling';
import Forget from './Components/Forget';


function App() {
  return (
    <>
      
         
   
   <Routes>
    <Route exact path="/" element={<Meeshopage/>}/>
    <Route    path="/sellonline" element={<Sellonline />}/>
    <Route    path="/howtowork" element={<Howwork/>}/>
    <Route path="/price" element={<Pricecom/>}/>
    <Route  path="/shipreturn" element={<Shipreturn/>}/>
    <Route  path="/growbusiness" element={<Growbuss/>}/>
    <Route path="/forgetpassword" element={<Forget/>}/>
    <Route path="/loginpage" element={<Login/>}/>
    <Route path="/startsell" element={<Startselling/>}/>
    <Route path="*" element={<div>error page found</div>}/>
    </Routes>
  

        
    </>
  );
}

export default App;
