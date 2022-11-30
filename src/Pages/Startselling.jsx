import { Link } from "react-router-dom";
import {BsFillCheckCircleFill, BsWhatsapp} from "react-icons/bs";
import Password from "../Components/Password";

const Startselling=()=>{
   
    return(
        <>
       
          <div className="container-fluid egcolor w-100 h-100">
            <div  className="row mx-md-4 p-5">
               
                  <div className="col-md-4 mx-md-5  ">
                  <div className="meesho2">meesho</div>
                    <div className="welcome fw-bold fs-5">Welcome to meesho</div>
                    <div className="create text-secondary ">Create your account to start selling</div>
                    <div className="twoinput d-flex">
                        <input type="number" placeholder="Enter Mobile Number" className="w-75 mt-3 p-2 rounded " required min="1" max="12"/>
                        <button  className="btn btn-outline-secondary  mt-3 ">Send OTP</button>
                    </div>
                   
                   <input type="number" placeholder="Enter OTP" className="w-100 p-2 my-4 rounded" required min="1" max="5"/>
                  
                   <input type="email" placeholder="Email Id" className="w-100 p-2 rounded" required/>
                     <Password/>
                     <div className="recieve
                     d-flex">
                     <input type="checkbox"/>
                     <div className="create  text-secondary my-3 mx-2">
                        I want to recieve important updates on <BsWhatsapp className="bg-success text-white rounded-circle  mx-1 fs-5 mb-1"/>WatsApp
                     </div>
                     </div>
                     <button className="btn btn-primary w-100 my-1">Create Account</button>
                      <div className="clicking create text-secondary my-2">By clicking you agree to our <span className="terms text-primary">Terms & Condition </span>and <span className="terms text-primary">Privacy Policy</span></div>
                   
                  </div>

                 <div className="col-md-5 mx-md-5 mt-sm-5 ">
                    <div className="user d-flex justify-content-end align-items-center align-content center create">
                            Already a user ?<Link to="/loginpage"><button className="btn btn-outline-primary w-100 mx-3">Login</button></Link>
                        </div>
                    <div className="grow text-capitalize fw-bold my-3">Grow your business faster by selling on meesho</div>
                
               <div className="row">
                
                        <div className="col-6 my-3 d-flex justify-content-center align-items-center align-content-center">
                            <img src="https://images.meeshosupplyassets.com/supplier_community.svg" alg="img" className="mx-3"/>
                                <div className="lakh d-flex flex-column">
                                    <span className="fw-bold">1 lakh+</span>
                                    <span>suppliers are selling commission free</span></div>
                        </div>

                        <div className="col-6 my-3 d-flex justify-content-center align-items-center align-content-first">
                            <img src="https://images.meeshosupplyassets.com/pincode.svg" alg="img" className="mx-3"/>
                                <div className=" lakh d-flex flex-column">
                                    <span className="fw-bold">24000+</span>
                                    <div>pincodes Supported for delivery</div>
                                    </div>
                        </div>
               </div>

                <div className="row">

                    <div className="col-6 my-3 d-flex justify-content-center align-items-center align-content-first">
                            <img src="https://images.meeshosupplyassets.com/reach_india.svg" alg="img" className="mx-3"/>
                                <div className="lakh d-flex flex-column">
                                    <span className="fw-bold">crore of</span>
                                   <div> customers buy across india</div></div>
                        </div>

                        <div className="col-6 my-3 d-flex justify-content-center align-items-center align-content-first">
                            <img src="https://images.meeshosupplyassets.com/categories.svg" alg="img" className="mx-3"/>
                                <div className="lakh d-flex flex-column">
                                    <div className="fw-bold">700+</div>
                                   <div> Categories to sell</div></div>
                        </div>
                       
                </div>

                    <hr className="bg-secondary my-5"/>
                
                <div className="fw-bold my-2">All your need to sell on Meesho is:</div>
                <div className="d-flex text-secondary my-2">
                    <span><BsFillCheckCircleFill className="fs-5"/></span>
                    <span className="fs-6 text-uppercase  mx-2">gstin</span>
                </div>

                <div className="d-flex text-secondary ">
                    <span><BsFillCheckCircleFill className="fs-5"/></span>
                    <span className="fs-6  text-capitalize mx-2">bank account</span>
                </div>

               
</div>
           <div className="user d-flex justify-content-end align-items-center align-content center create">
                <img src="https://images.meeshosupplyassets.com/meesho_shop.svg"alt="img" className="user d-flex justify-content-end align-items-center align-content center create  mb-5 mr-5"/> 
               
                </div> 
                </div>
                
                </div>
        </>
    )
}
export default Startselling;