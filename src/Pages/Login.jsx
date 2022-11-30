import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-fluid egcolor">
        <div className="row d-flex justify-content-center align-content-center p-5">
          <div className="meesho d-flex justify-content-center fs-1">
            meesho
          </div>
          <div className="col-md-4 bg-white rounded p-4 mx-5">
            <div className="login fw-bold fs-5">
              Login to your supplier panel
            </div>
            <input
              type="text"
              placeholder="Enter Id or mobile number"
              className="my-3 w-100 p-2 text-secondary rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-3 w-100 p-2 rounded"
            />
            <Link to="/forgetpassword"><p className="forgot ">Forgot password ?</p></Link>
            <button className="btn btn-secondary w-100 my-3">Login</button>
          </div>
        </div>
        <div className="row mx-5 d-flex flex-column justify-content-center align-items-center align -content-center">
          <div className="col-md-4 mx-md-5 p-4">
            <div className="new text-center text-secondary my-2">
              ----------New to Meesho ?------------
            </div>
           <Link to="/startsell"> <button className="btn btn-outline-primary w-100 mb-5">
              Create your supplier account
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
