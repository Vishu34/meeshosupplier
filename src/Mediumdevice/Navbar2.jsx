import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import { BsBarChartFill, BsXLg } from "react-icons/bs";



  const Navbar2=()=>{
    const [show, setshow] = useState(false);

  const showbtn = () => {
    setshow(!show);
  };
  return (
    <>
      <div className=" d-md-block d-xl-none d-none  w-100 bg-white Navbar ">
      <div className="container d-flex justify-content-between align-items-center align-content-center" data-aos="fade-left">
      <NavLink exact to="/" className="mx-2 fw-bold my-3 mx-2 meesho">
      <img src="https://supplier.meesho.com/images/logo.svg" />
        </NavLink>
          
          

        <div className="d-flex align-items-center ">
          <div className="btn1 d-none d-md-block">
            <button id="btn1">login</button>
          </div>
          <div className="btn1 d-none d-md-block">
            <button id="btn2">start selling</button>
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
            show ? (
              <div className="d-flex flex-column align-items-center mobilebtn1">
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
        
              </div>
            ):null
          }
    </>
  );
};
export default Navbar2;