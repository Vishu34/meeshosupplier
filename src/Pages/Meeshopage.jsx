import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Imagecontent from "../Components/Imagecontent";
import Navbar from "../Components/Navbar";
import Password from "../Components/Password";
import Popular from "../Components/Popular";

const Meeshopage = () => {
  return (
    <>
      <Navbar />
   
      <div className="container-fluid egcolor">
        <div className="row">
          <div className="col-md-6 ">
            <div className=" fw-bold aside">
              Sell online to 11 Cr+ customers at
              <div className="com"> 0% Commission</div>
            </div>
            <div className=" aside1 fw-bold">
              Become a Meesho seller and grow your business across India </div>

            <div className="row">
              <div className="col-md-8 my-2">
                <input
                  type="text"
                  value="enter your mobile number"
                  size="70px"
                  className="w-100 inputsize"
                />
              </div>
              <div className="col-md-4 my-1">
                <button className="button">start selling</button>
              </div>
            </div>
</div>
            <div className="col-md-6">
              <div className="phonewithman21"><img
                
                src="https://supplier.meesho.com/images/Desktop-Background-1-p-1080.png"
                alt="shopping"
                className="phonewithman2 w-100    "
              /></div>
            </div>
          </div>
        </div>
      

      <div className="container-fluid ">
        <div className="row mt-5">
          <div className="col-md-3  "> <div className="nopls ">

            <div className="numberpls">6 lakh+</div>
            <div className="nocontent">Trust Meesho to sell online</div>
          </div>
          </div>
          <div className="col-md-3 ">
 <div className="nopls ">

            <div className="numberpls">11 Crore+</div>
            <div className="nocontent">Customers buying across India</div>
          </div>
          </div>
          <div className="col-md-3 ">
 <div className="nopls ">            <div className="numberpls">28000+</div>
            <div className="nocontent">Pincode Supported for delivery</div>
          </div>  </div>
          <div className="col-md-3  "> <div className="nopls ">
            <div className="numberpls">700+</div>
            <div className="nocontent">Categories to sell online</div>
          </div>  </div>
        </div>
      </div>

      <div className="container-fluid my-3 parent">
        <div className="row">
          <div className="col-md-6 ">
            <div className="supliercontent">Why Suppliers Love Meesho</div>
            <div className="supliercontent1">
              All the benefits that come with selling on Meesho are designed to
              help you sell more, and make it easier to grow your business
            </div>
          </div>

          <div className=" col-md-6 ">
            <div className="fees  d-flex justify-content-start align-items-start  ">
              <img
                src="https://supplier.meesho.com/images/icon-10.svg"
                alt="logo"
              />
              <div className="">
                <div className="comfees">0% Commission Fee</div>
                <div className="comfees1">
                  Suppliers selling on Meesho keep 100% of their profit by not
                  paying any commission{" "}
                </div>
              </div>
            </div>
            <div className="fees d-flex justify-content-start align-items-start ">
              <img
                src="https://supplier.meesho.com/images/icon-16.svg"
                alt="logo"
              />
              <div className="">
                <div className="comfees">0 Penalty Charges</div>
                <div className="comfees1">
                  Sell online without the fear of order cancellation charges
                  with 0 Penalty for late dispatch or order cancellations.
                </div>
              </div>
            </div>
            <div className="fees d-flex justify-content-start align-items-start ">
              <img
                src="https://supplier.meesho.com/images/icon-11.svg"
                alt="logo"
              />
              <div className="">
                <div className="comfees">Growth for Every Supplier</div>
                <div className="comfees1">
                  From small to large and unbranded to branded, all suppliers
                  have grown their businesses on Meesho
                </div>
              </div>
            </div>
            <div className="fees d-flex justify-content-start align-items-start ">
              <img
                src="https://supplier.meesho.com/images/icon-12.svg"
                alt="logo"
              />
              <div className="">
                <div className="comfees">Ease of Doing Business</div>
                <div className="comfees1">
                  Easy Product Listing Lowest Cost Shipping
                </div>
                <div className="comfees2">
                  7-Day Payment Cycle from the delivery date
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid egcolor" >
          <div className=" row my-5">
            <div className="col-md-6">
              <div className="exclusivesup">
                Exclusive Supplier+ Rewards for the first 30 days
              </div>
            </div>
            <div className="catelog col-md-6 ">
              <div className="row">
                <div className="col-md-6">
                  <div className="catelogtop ">
                    <img
                      src="https://supplier.meesho.com/images/icon-1.svg"
                      alt="icon"
                    />
                    <div className="catelogcontent">
                      Free catalog visibility of ₹1200
                    </div>
                    <div className="catelogcontent1">
                      Run advertisements for your catalogs to increase the
                      visibility of your products and get more orders
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="catelog1">
                    <img
                      src="https://supplier.meesho.com/images/icon-5.svg"
                      alt="icon"
                    />
                    <div className="catelogcontent">
                      Dedicated Catalog Manager
                    </div>
                    <div className="catelogcontent1">
                      Clear all your cataloging doubts like how to upload
                      catalogs, correct quality check errors and more
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="catelogtop1">
                    <img
                      src="https://supplier.meesho.com/images/icon-6.svg"
                      alt="icon"
                    />
                    <div className="catelogcontent">Free Return Shipping</div>
                    <div className="catelogcontent1">
                      Send out your orders stress-free with zero fees on return
                      shipping for the first month
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="catelog1">
                    <img
                      src="https://supplier.meesho.com/images/icon-7.svg"
                      alt="icon"
                    />
                    <div className="catelogcontent">
                      No Order Cancellation Charges
                    </div>
                    <div className="catelogcontent1">
                      Cancel orders that you can’t fulfil for unforeseen reasons
                      without worrying about penalties
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="expsup">Experiences suppliers love to talk about</div>

      <div className="mancontent mx-5 row">
        <div className=" col-md-4 rounded ">
          <img
            src="https://supplier.meesho.com/images/rajat-amit-jain-testimonials.png"
            alt="img"
            className="mx-1 rounded w-100"
          />
          <img
            src="https://supplier.meesho.com/images/play.svg"
            alt="img"
            className="playimg "
          />
          <div className="main">Amit and Rajat Jain</div>
          <div className="main1">Smartees, Tiruppur</div>
          <div className="maincontent">
            Our business has grown beyond our imagination, getting upto 10,000
            orders consistently during sale days. We are now constantly bringing
            new products thanks to Meesho's insights.
          </div>
        </div>
        <div className=" col-md-4 rounded ">
          <img
            src="https://supplier.meesho.com/images/suman-testimonial.png"
            alt="img"
            className="manimg rounded w-100"
          />
          <img
            src="https://supplier.meesho.com/images/play.svg"
            alt="img"
            className="playimg"
          />
          <div className="main">Suman</div>
          <div className="main1">Keshav Fashion, Hisar</div>
          <div className="maincontent">
            I started selling on Meesho with 4-5 orders on the very first day.
            In no time I was getting over 1000 orders a day, like a dream come
            true.
          </div>
        </div>
        <div className=" col-md-4 rounded ">
          <img
            src="https://supplier.meesho.com/images/rathi-family-testimonial.png"
            alt="img"
            className="manimg rounded w-100"
          />
          <img
            src="https://supplier.meesho.com/images/play.svg"
            alt="img"
            className="playimg"
          />
          <div className="main">Mohit Rathi</div>
          <div className="main1">Meira Jewellery, Ahmedabad</div>
          <div className="maincontent">
            Meesho made it extremely simple to transition to online business
            during lockdown. Suddenly we were all over India to our surprise,
            seeing up to 5X growth on sale days.
          </div>
        </div>
      </div>

      <div className="works">How it works</div>
      <div className="worksprod container-fluid ">
        <div className="row ">
          <div className="account col-sm-12 col-md-2  ">
            <div className="account1 ">Create Account</div>
            <div className="account2">All you need is :</div>
            <ul className="text-capitalize">
              <li>gstin</li>
              <li>bank account</li>
            </ul>
            <div className="account3 rounded-circle ">1</div>
          </div>
          <div className="account col-sm-12 col-md-2">
            <div className="account1 ">List Products</div>
            <div className="account2">
              List the products you want to sell in your supplier panel
            </div>
            <div className="account3 rounded-circle ">2</div>
          </div>
          <div className="account col-sm-12 col-md-2">
            <div className="account1 ">Get Orders</div>
            <div className="account2">
              Start getting orders from crores of Indians actively shopping on
              our platform.
            </div>
            <div className="account3 rounded-circle ">3</div>
          </div>
          <div className="account col-sm-12 col-md-2">
            <div className="account1 ">Lowest Cost Shipping</div>
            <div className="account2">
              Products are shipped to customers at lowest costs
            </div>
            <div className="account3 rounded-circle ">4</div>
          </div>
          <div className="accountlast col-sm-12 col-md-3">
            <div className="account1 ">Receive Payments</div>
            <div className="account2">
              Payments are deposited directly to your bank account following a
              7-day payment cycle from order delivery.
            </div>
            <div className="account3 rounded-circle ">5</div>
          </div>
        </div>
      </div>

      <div className="containerj-fluid mx-2  parent ">
        <div className="row mx-1 ">
          <div className="meeshocontent col-md-6">
            <div className="meeshocnt">
              <div className="meeshohub">meesho</div>
              <div className="meeshohubcontent">
                supplier
                <div className="hub">
                  <span className="learn">
                    learning <span className="hub1">hub</span>
                  </span>
                </div>
              </div>
              <div className="learnhow">
                Learn how to sell and grow your business on Meesho
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="visithub">
              <button id="visitbtn">
                <img
                  src="https://supplier.meesho.com/images/play.svg"
                  alt="img"
                  className="visitimg"
                />
                visit learning hub
              </button>
            </div>
          </div>
        </div>

        <div className="container-fluid my-4 egcolor">
          <div className="row">
            <div className="col-md-6">
              <div className="growcontent">grow your business with meesho</div>
            </div>
            <div className="maincost col-md-6">
              <div className="row">
                <div className="catelogtop col-md-6">
                  <img
                    src="https://supplier.meesho.com/images/icon-3.svg"
                    alt="img"
                    className="logoimg"
                  />
                  <div className="catelogcontent">Lowest Shipping Costs</div>
                  <div className="catelogcontent1">
                    Sell your products across India to over 28,000+ pincodes at
                    lowest delivery cost.
                  </div>
                </div>

                <div className="catelog1 col-md-6">
                  <img
                    src="https://supplier.meesho.com/images/icon-2.svg"
                    alt="img"
                    className="logoimg"
                  />
                  <div className="catelogcontent">Ads to grow more</div>
                  <div className="catelogcontent1">
                    Use Meesho’s selling tools like ads to be more visible and
                    sell more products. </div>
                </div>
              </div>
            

            <div className="row">
             
              <div className="catelogtop1 col-md-6">
                <img
                  src="https://supplier.meesho.com/images/icon-8.svg"
                  alt="img"
                  className="logoimg"
                />
                <div className="catelogcontent">Next Day Dispatch Program</div>
                <div className="catelogcontent1">
                  Sign up for the quick Next Day Dispatch (NDD) Program and get
                  higher visibility and your own Account Manager.
                </div>
              </div>

              <div className="catelog1 col-md-6">
                <img
                  src="https://supplier.meesho.com/images/icon-9.svg"
                  alt="img"
                  className="logoimg"
                />
                <div className="catelogcontent">Business Insights</div>
                <div className="catelogcontent1">
                  Use product & price recommendations so that you’re always on
                  top of your business.</div>
              </div>
            </div>
          </div></div>
        </div>
      </div>
      <Popular/>
      <Footer/>
          </>
  );
};

export default Meeshopage;
