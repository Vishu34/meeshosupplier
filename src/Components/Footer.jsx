import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container-fluid egcolor">
        <div className="container">
          <div className=" row ">
            <div className="col-md-6 my-3">
              <div className="growcontent mx-1">
                Meesho Supplier Support Available 24/7
              </div>
            </div>
            <div className=" col-md-6 my-3 ">
              <div className="suplycontent">
                Meesho supplier support is available to solve all your doubts
                and issues before and after you start your online selling
                business.
              </div>
              <div className="mailimgcontent d-flex mx-1">
                <img
                  src="https://supplier.meesho.com/images/email.svg"
                  alt="img"
                />
                <div className="suplycontent">
                  You can reach out to
                  <div className="suplycontent">sell@meesho.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid parent my-4">
        <div className="container my-4">
          <div className=" row">
            <div className=" col-md-4 ">
              <div className="meeshoname mx-1">meesho</div>
              <div className="fomescontent mx-1 my-1">
                Sell your products to crores of customers on Meesho at 0%
                commission
              </div>
              <button id="btn2" className="mx-1 my-1">
                start selling
              </button>
            </div>
            <div className=" col-md-4 ">
              <div className="sellcontent mx-1">sell on meesho</div>
              <ul>
                <li>sell online</li>
                <li>pricing & communication</li>
                <li>how it works</li>
                <li>shipping & returns</li>
                <li>grow your business</li>
                <li>learning hub</li>
              </ul>
            </div>
            <div className=" col-md-4 ">
              <div className="contactcontent mx-1">contact us</div>

              <div className="contactcontent1">sell@meesho.com</div>
              <span>
                <FaInstagramSquare className="instagram" />
                <FaYoutube className="youtube" />
                <BsFacebook className="facebook" />
              </span>
            </div>
          </div>
          <hr />
          <div className="footer1">
            © 2015-22 Meesho Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
