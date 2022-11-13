import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navbar =()=>{
    return(
        <>
        
<div className='navbar bg-info sticky-top ' >
 
   <div className=' mx-5'><NavLink  exact to="/"  >meesho</NavLink></div>
   {/* <div className='float-end mx-5'>helaskf</div> */}
   <div className='leftnav'>
   <NavLink exact to="/sellonline" >Sell online</NavLink>
    <NavLink  exact to="/howtowork">How its work</NavLink>
    <NavLink exact to="/price">Pricing & communication</NavLink>
    <NavLink exact to="/shipreturn">Shipping & return</NavLink>
    <NavLink exact to="/growbusiness">Grow & business</NavLink>
      <div className='d-flex'>
   <div class="btn1 "><button id="btn2">start selling</button></div>

<div class="btn1 "><button id="btn1">login</button></div>
</div>
   </div>
  
    
</div>

        </>
    )
}

export default Navbar;