import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { BsBarChartFill, BsBorder, BsXLg } from "react-icons/bs";

const Navbar1child=()=>{

  return (
    <>
    <div className="d-flex flex-column align-items- mobilebtn1 ">
    <NavLink exact to="/sellonline" className="   text-dark meeshonavbar1 my-2">
          Sell online
        </NavLink>
        <NavLink exact to="/howtowork" className="   text-dark meeshonavbar my-2">
          How its work
        </NavLink>
        <NavLink exact to="/price" className="   text-dark meeshonavbar my-2">
          Pricing & communication
        </NavLink>
        <NavLink exact  to="/shipreturn" className="   text-dark meeshonavbar my-2">
          Shipping & return
        </NavLink>
        <NavLink exact to="/growbusiness" className="   text-dark meeshonavbar my-2 ">
          Grow & business
        </NavLink>
        <NavLink exact to="/loginpage" className="   text-dark meeshonavbar my-2 ">
          Login
        </NavLink>
        
        </div>
        
        
    </>
  );
};

export default Navbar1child;
