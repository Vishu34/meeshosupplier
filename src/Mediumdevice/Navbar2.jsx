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
      <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/" className="mx-2 fw-bold my-3 mx-2 meesho">
      <img src="https://supplier.meesho.com/images/logo.svg" alt="image"/>
        </NavLink> </li>
          
          

        <div className="d-flex align-items-center ">
          <div className="btn1 d-none d-md-block">
          <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/loginpage" className="">
            <button id="btn1">login</button>
            </NavLink> </li>
          </div>
          <div className="btn1 d-none d-md-block">
          <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/startsell" className="">
            <button  id="btn2" className="btn2 ">start selling</button>
            </NavLink> </li>
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
              <ul className="d-flex flex-column  mobilebtn1 ">
              <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/sellonline">
          Sell online
        </NavLink> </li>
        <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/howtowork">
          How its work
        </NavLink> </li>
        <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/price">
          Pricing & communication
        </NavLink> </li>
        <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/shipreturn">
          Shipping & return
        </NavLink> </li>
        <li className="mx-5 meeshonavbar" onClick={()=>setshow(false)}><NavLink exact to="/growbusiness">
          Grow & business
        </NavLink> </li>
        
              </ul>
            ):null
          }
    </>
  );
};
export default Navbar2;