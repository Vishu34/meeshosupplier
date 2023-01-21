import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBarChartFill, BsBorder, BsXLg } from "react-icons/bs";
import Navbar2 from "../Mediumdevice/Navbar2";
import Navbar3 from "../Largedevice/Navbar3";
import Navbar1child from "./Navbar1child";

const Navbar = () => {
  const [show, setshow] = useState(false);

  const showbtn = () => {
    setshow(!show);
  };

  return (
    <>
    <div className="d-md-none d-block Navbar">
      <div className="bg-white d-flex justify-content-between align-items-center align-content-center  w-100  ">
        <div className="my-2 ">
          <NavLink exact to="/" className="meesho">
          <img src="https://supplier.meesho.com/images/logo.svg" />
          </NavLink>
        </div>
        
    
        <div className="d-flex align-items-center align-content-center justify-content-start my-2">
          <div className="  " >
            <button  className="btn startbtn">start selling</button>
            </div>

          {show ? (
            <div className="  ">
              <button className="btn mx-3 " style={{color:"#f43397",border:"1px solid rgba(0,0,0,0.09"}} onClick={showbtn} >
              <BsXLg style={{color:"#f43397"}}/>
              </button>
            </div>
          ) : (
            <div className=" ">
              <button className="btn  mx-3" onClick={showbtn}>
              <BsBarChartFill style={{color:"#f43397"}}/>
               
              </button>
            </div>
          )}
        </div>
      </div>
      </div>
      {
        show ? <Navbar1child/>:null
      }
    </>
  );
};

export default Navbar;
