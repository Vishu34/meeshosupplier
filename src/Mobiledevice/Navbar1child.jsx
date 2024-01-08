import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { BsBarChartFill, BsBorder, BsXLg } from "react-icons/bs";

const Navbar1child=({setshow})=>{

  return (
    <>
    <div className="d-flex flex-column align-items- mobilebtn1 ">
    <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar1 my-2"><NavLink  to="/sellonline" className=" " 
   >
          Sell online
        </NavLink> </li>
        <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar my-2"><NavLink  to="/howtowork" className=" " 
       >
          How its work
        </NavLink> </li>
        <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar my-2"><NavLink  to="/price" className=" " 
       >
          Pricing & communication
        </NavLink> </li>
        <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar my-2"><NavLink   to="/shipreturn" className=" " 
       >
          Shipping & return
        </NavLink> </li>
        <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar my-2"><NavLink  to="/growbusiness" className="  " 
       >
          Grow & business
        </NavLink> </li>
        <li  onClick={()=>setshow(false)} className="text-dark meeshonavbar my-2"><NavLink  to="/loginpage" className="  " 
       >
          Login
        </NavLink> </li>
        
        </div>
        
        
    </>
  );
};

export default Navbar1child;
