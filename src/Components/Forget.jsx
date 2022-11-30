import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Forget = () => {
  return (
    <>
      <div className="container-fluid egcolor">
        <div className="row d-flex justify-content-center align-content-center p-5">
        <div className="meesho d-flex justify-content-center fs-1">
          meesho
          </div>
          <div className="col-md-4 bg-white rounded p-4 mx-5">
          <Link to="/loginpage"><div className=" fw-bold back create text-primary my-3" style={{cursor:"pointer"}}>
              <BsChevronLeft/>Back
            </div></Link>
            <div className="login fw-bold fs-5">
              Forgot Login password
            </div>
            <div className="text-secondary create fs-6">
              Please enter your registered email Id
            </div>
            <input
              type="text"
              placeholder="Enter Id or mobile number"
              className="my-3 w-100 p-2 text-secondary rounded"
            />
            
            
            <button className="btn btn-secondary w-100 mb-5">
              Submit Email
            </button>
            <div className="d-flex justify-content-center ">-----------OR------------</div>
            <div className="text-primary fw-bold d-flex justify-content-center ">get OTP on your mobile number</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forget;
