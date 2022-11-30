import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar2 = () => {
//     useEffect(()=>{
// Aos.init();
//     });
  return (
    <>
      <div className="rightnav d-sm-block d-md-none  w-100 bg-white d-flex justify-content-end align-items-center align-content-center" data-aos="fade-left">
      <NavLink exact to="/" className="mx-2 fw-bold my-3 mx-2 text-danger">
          meesho
        </NavLink>
        <NavLink exact to="/sellonline" className="mx-2 meesho1">
          Sell online
        </NavLink>
        <NavLink exact to="/howtowork" className="mx-2 meesho1">
          How its work
        </NavLink>
        <NavLink exact to="/price" className="mx-2 meesho1">
          Pricing & communication
        </NavLink>
        <NavLink exact to="/shipreturn" className="mx-2 meesho1">
          Shipping & return
        </NavLink>
        <NavLink exact to="/growbusiness" className="mx-2 meesho1 ">
          Grow & business
        </NavLink>
        <NavLink exact to="/loginpage" className="mx-2 meesho1 ">
          Login
        </NavLink>

        <div className="d-flex">
          <div className="btn1 d-none d-md-block">
            <button id="btn1">login</button>
          </div>
          <div className="btn1 d-none d-md-block">
            <button id="btn2">start selling</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar2;