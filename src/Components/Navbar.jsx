import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBarChartFill, BsBorder, BsXLg } from "react-icons/bs";
import Navbar2 from "../Mediumdevice/Navbar2";
import Navbar3 from "../Largedevice/Navbar3";
import Navbar1 from "../Mobiledevice/Navbar1"
const Navbar = () => {
  

  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <Navbar3/>
      
    </>
  );
};

export default Navbar;
