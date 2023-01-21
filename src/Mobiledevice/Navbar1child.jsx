import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { BsBarChartFill, BsBorder, BsXLg } from "react-icons/bs";

const Navbar1child=()=>{

  return (
    <>
    <div className="d-flex flex-column align-items-center mobilebtn1 ">
    <NavLink exact to="/sellonline" className=" meesho1 my-2">
          Sell online
        </NavLink>
        <NavLink exact to="/howtowork" className=" meesho1 my-2">
          How its work
        </NavLink>
        <NavLink exact to="/price" className=" meesho1 my-2">
          Pricing & communication
        </NavLink>
        <NavLink exact  to="/shipreturn" className=" meesho1 my-2">
          Shipping & return
        </NavLink>
        <NavLink exact to="/growbusiness" className=" meesho1 my-2 ">
          Grow & business
        </NavLink>

        
        </div>
        
        
    </>
  );
};

export default Navbar1child;
