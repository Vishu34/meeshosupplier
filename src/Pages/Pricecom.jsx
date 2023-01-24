import React from "react";
import Imagecontent from "../Components/Imagecontent";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import Sellproduct from "../Components/Sellproduct";

const Pricecom = () => {
  const{id,name}=useParams();
  return (
    <>
     
      <Imagecontent
    head="Pricing & Commission"
    content1="Meesho charges"
    content2="0% Commission"
    content3="rate
            across all categories making it the most profitable platform for you
            to sell online."
    imgsrc="https://supplier.meesho.com/images/banner-4.png"

/>
      {/* <div className="row bg-info">
        <div class=" col-md-6">
          <div class="aside mx-4">Pricing & Commission</div>
          <div class="aside1 mx-4">
            Meesho charges<span class="sellprdt">0% Commission</span> rate
            across all categories making it the most profitable platform for you
            to sell online.
          </div>
          <div class="mono mx-2">
            <div class="input">
              <input type="text" value="enter your mobile number" />{" "}
            </div>
            <div class="button">
              <button id="btn3">start selling</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="piwmc">
            <img
              src="https://supplier.meesho.com/images/banner-4.png"
              alt="shopping"
              class="phonewithman"
            />
          </div>
        </div>
      </div> */}

<div className="container">
      <div class="row my-3">
        <div className="col-md-4">
          <div class="noreg">
            <img
              src="https://supplier.meesho.com/images/icon-14.svg"
              alt="img"
              class="noregimg"
            />
            <div class="noregcontent">No Registration Fee</div>
            <div class="regcontent">
              Registering as a Meesho seller is free - no cost of creating your
              account or getting your products listed.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="noreg">
            <img
              src="https://supplier.meesho.com/images/icon-15.svg"
              alt="img"
              class="noregimg"
            />
            <div class="noregcontent">No Collection Fee</div>
            <div class="regcontent">
              You keep 100% of the sale price with no charges on both payment
              gateway or cash on delivery orders on Meesho.
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="noreg ">
            <img
              src="https://supplier.meesho.com/images/icon-16.svg"
              alt="img"
              class="noregimg"
            />
            <div class="noregcontent">No Penalty</div>
            <div class="regcontent">
              Sell on Meesho stress-free without the fear of penalties for order
              cancellations..
            </div>
          </div>
        </div>
      </div>
 </div>


    <div className="container-fluid egcolor">
      <div class="container">
         <div className="row my-3">
         <div class=" col-md-6 my-3">
          <div class="paycontent ">Payment Cycle</div>
          <div class="paycontent1">
            The settlement amount is securely deposited directly into your bank
            account following a 7-day payment cycle from order delivery,
            including cash on delivery orders. You can view your deposited
            balance and the upcoming payments on the Meesho Supplier Panel.
          </div>
        </div>
        <div class=" my-3 col-md-3">
            <div className="pcycle">
            <img src="https://supplier.meesho.com/images/icon-17.svg" alt="img" />
          <div class="pcontent">7-day payment cycle</div>
        </div>
           </div>
  
        <div class=" my-3 col-md-3">
           <div className="pcycle">
             <img src="https://supplier.meesho.com/images/icon-18.svg" alt="img" />
          <div class="pcontent">Secured payment in your account</div>
        </div>
           </div>
         </div>

      </div></div>

      <div class=" container">
        <div class="works">quick facts on shipping & delivery</div>
        <div class="shipping my-3">
          <div class="shipping1">
            <div class="shipping2">Shipping</div>
            <ul>
              <li>
                Meesho’s shipping service allows you to focus on selling, while
                we take care of the shipping and delivery with only 18% GST on
                the shipping charges. You can sell your products to crores of
                Meesho customers, schedule delivery with access to tens of
                thousands of local couriers, and have the flexibility to set
                your own prices.
              </li>
              <li>
                You can sell your products to crores of Meesho customers,
                schedule delivery with access to multiple local couriers
                options, and have the flexibility to set your own prices.
              </li>
            </ul>
          </div>{" "}
          <img
            src="https://supplier.meesho.com/images/fact-1.png"
            alt="img"
            class="shipimg"
          />
        </div>

        <div class="shipping">
          <img
            src="https://supplier.meesho.com/images/fact-2.png"
            alt="img"
            class="shipimg"
          />
          <div class="shipping1">
            <div class="shipping2">Meesho Return Policy</div>
            <ul>
              <li>
                The Meesho Supplier Panel will provide visibility for returns on
                your inventory. This means you can make adjustments in real-time
                and deliver a great customer experience and minimize your
                returns. Use the Panel to manage your returns and reduce your
                processing costs.
              </li>
            </ul>
          </div>
        </div>
        
        <div class="shipping">
          <div class="shipping1">
            <div class="shipping2">Cancellation</div>
            <ul>
              <li>
                Meesho charges 0 penalties for supplier cancellations and auto
                cancellations. For situations when a supplier is not able to
                fulfil an order due to lack of inventory or any other unforeseen
                situation, suppliers can conduct their business tension-free on
                Meesho without worrying about the fear of paying penalties.
              </li>
            </ul>
          </div>{" "}
          <img
            src="https://supplier.meesho.com/images/fact-3.png"
            alt="img"
            class="shipimg"
          />
        </div>
        <div class="shipping">
          <img
            src="https://supplier.meesho.com/images/fact-4.png"
            alt="img"
            class="shipimg"
          />
          <div class="shipping1">
            <div class="shipping2">Return to Origin</div>
            <ul>
              <li>
                The shipping partner will try three times to reach the customer.
                If the customer does not accept the product, it will be returned
                to you. Meesho will not charge a return shipping fee for any
                RTOs.
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  <Sellproduct/>

      
    </>
  );
};
export default Pricecom;
