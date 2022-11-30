import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBarChartFill, BsXLg } from "react-icons/bs";
import Navbar2 from "../Components/Navbar2";
import Navbar3 from "./Navbar3";

const Navbar = () => {
  const [show, setshow] = useState(false);

  const showbtn = () => {
    setshow(!show);
  };

  return (
    <>
      <div className="bg-white d-flex justify-content-center align-items-center align-content-center startbtn1">
        <div className=" ">
          <NavLink exact to="/" className="meeshonav">
            meesho
          </NavLink>
        </div>
        <Navbar3/>
   
        {show ? <Navbar2/>: null}
    
        <div className="d-flex justify-content-start align-items-center align-content-center justify-content-start">
          <div className="  d-md-none d-sm-block " >
            <button  className="btn startbtn">start selling</button>
            </div>

          {show ? (
            <div className=" d-md-none d-sm-block ">
              <button className="btn mx-3 " onClick={showbtn} >
              <BsXLg style={{color:"#f43397"}}/>
              </button>
            </div>
          ) : (
            <div className=" d-md-none d-sm-block">
              <button className="btn  mx-3" onClick={showbtn}>
              <BsBarChartFill style={{color:"#f43397"}}/>
               
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
