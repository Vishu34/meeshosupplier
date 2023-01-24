import { Link, NavLink } from "react-router-dom";

const Navbar3 = () => {
  return (
    <>
      <div className="d-flex bg-white justify-content-between  align-items-center align-content-center navbar-center  Navbar w-100  ">
        <div className=" d-xl-block d-none my-4">
          <NavLink exact to="/" className="meeshonav">
            <img src="https://supplier.meesho.com/images/logo.svg" />
          </NavLink>

          <NavLink exact to="/sellonline" className=" meesho1">
            Sell online
          </NavLink>
          <NavLink exact to="/howtowork" className=" meesho1">
            How its work
          </NavLink>
          <NavLink exact to="/price" className=" meesho1">
            Pricing & communication
          </NavLink>
          <NavLink exact to="/shipreturn" className=" meesho1">
            Shipping & return
          </NavLink>
          <NavLink exact to="/growbusiness" className=" meesho1 ">
            Grow & business
          </NavLink>
        </div>
        <div className="d-flex mx-5">
          <Link exact to="/loginpage">
            {" "}
            <div className="btn1 d-xl-block d-none">
              <button id="btn1">login</button>
            </div>
          </Link>
          <Link to="/startsell">
            <div className="btn1 d-xl-block d-none">
              <button id="btn2">start selling</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar3;
