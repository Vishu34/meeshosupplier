import { Link, NavLink } from "react-router-dom";


const Navbar3 = () => {
  return (
    <>
          <div className="d-flex w-100 bg-white justify-content-center  align-items-center align-content-center">
      <div className=" d-md-block d-none ">

        <NavLink exact to="/sellonline" className=" meesho1">
          Sell online
        </NavLink>
        <NavLink exact to="/howtowork" className=" meesho1">
          How its work
        </NavLink>
        <NavLink exact to="/price" className=" meesho1">
          Pricing & communication
        </NavLink>
        <NavLink exact  to="/shipreturn" className=" meesho1">
          Shipping & return
        </NavLink>
        <NavLink exact to="/growbusiness" className=" meesho1 ">
          Grow & business
        </NavLink>

        
        </div>
        <div className="d-flex mx-5">
         <Link exact to="/loginpage"> <div className="btn1 d-none d-md-block">
            <button id="btn1">login</button>
          </div></Link>
          <Link to="/startsell"><div className="btn1 d-none d-md-block">
            <button id="btn2">start selling</button>
          </div></Link>
          </div>
      </div>
    </>
  );
};
export default Navbar3;