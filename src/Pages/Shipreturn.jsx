import React from "react";
import { useNavigate } from "react-router-dom";
import Imagecontent from "../Components/Imagecontent";
import Navbar from "../Components/Navbar";
import Sellproduct from "../Components/Sellproduct";

const Shipreturn = () => {
  const navigate = useNavigate();
  const gotomeesho = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Imagecontent
    head=" Meesho Shipping, Delivery & Returns Policy"
    content1="Get your products delivered to crores of customers with the"
    content2="lowest shipping charges."
    content3=""
    imgsrc="https://supplier.meesho.com/images/Desktop-Pic_2.png"

/>
      {/* <div className="row bg-info">
        <div className="col-md-6">
          <div className="aside mx-4">
            Meesho Shipping, Delivery & Returns Policy
          </div>
          <div className="aside1 mx-4">
            Get your products delivered to crores of customers with the
            <span className="sellprdt"> lowest shipping charges.</span>
          </div>
          <div className="mono mx-3">
            <div className="input">
              <input type="text" value="enter your mobile number" />{" "}
            </div>
            <div className="button">
              <button id="btn3">start selling</button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="piwmc">
            <img
              src="https://supplier.meesho.com/images/Desktop-Pic_2.png"
              alt="shopping"
              className="phonewithman"
            />
          </div>
        </div>
      </div> */}
    <div className="container-fluid egcolor">
      <div className="container my-3">
        <div className="row">
        <div className="paycycle1 col-md-6">
          <div className="paycontent">Deliver products across India</div>
          <div className="paycontent1">
            Meesho ensures quick and hassle-free delivery of all your products
            across India.
          </div>
        </div>
        <div className="pcycle col-md-2">
          <img src="https://supplier.meesho.com/images/icon-19.svg" alt="img" />
          <div className="pcontent">Lowest Shipping Charges</div>
        </div>
        <div className="pcycle col-md-2">
          <img src="https://supplier.meesho.com/images/icon-20.svg" alt="img" />
          <div className="pcontent">28000+ Pincode Served</div>
        </div>
        <div className="pcycle col-md-2">
          <img src="https://supplier.meesho.com/images/icon-15.svg" alt="img" />
          <div className="pcontent">0% Commission</div>
        </div>
        </div>
      </div></div>

      
<div className="container">
      <div className="row">
        <div className="col-md-3 d-none d-md-block">
        <div className="regaccount">
        <div className="regaccontent">
          <div className="regacc1">shipping & Delivery</div>

          <div className="blockcontent">
            <div className="panel">how shipping works</div>
            <div className="panel">shipping timeline</div>
          </div>
          <div className="regacc">return policy</div>
          <div className="regacc">cancellation policy</div>
        </div></div>
        </div>
   
   <div className="col-md-9">
        <div className="reghead">
          <div className="reghead1">shipping & delivary</div>
          <div className="regcontent">
            To start selling on Meesho, you need to first create an account on
            Meesho. All you need is:
          </div>
          <div className="gst">
            <div className="gst1">
              <img
                src="https://supplier.meesho.com/images/icon-21.svg"
                alt="img"
              />
              <div className="gst2">Mobile Number & Email ID</div>
            </div>
            <div className="gst1">
              <img
                src="https://supplier.meesho.com/images/icon-22.svg"
                alt="img"
              />
              <div className="gst2">GST Number</div>
            </div>
            <div className="gst1">
              <img
                src="https://supplier.meesho.com/images/icon-23.svg"
                alt="img"
              />
              <div className="gst2">Active Bank Account with the same GST</div>
            </div>
          </div>
          <div className="regcontent">
            Once you have provided these details, enter your Store Name which
            will be the name of your online business. Add the Pickup Address
            from which orders will be picked up by our logistics partners. And,
            that’s all. Your free account on Meesho will be created.
          </div>
          <div className="reghead1">listing your products</div>
          <div className="regcontent">
            On completing the registration, you will have access to the Meesho
            Supplier Panel.
          </div>
          <div className="reghead2">What is the Meesho Supplier Panel?</div>
          <div className="regcontent1">
            Meesho Supplier Panel is the one-stop solution for all your online
            selling needs. From listing your products and managing inventory to
            processing orders and tracking payments, log in to the Supplier
            panel and manage your online business with ease. The process is
            simple, and to know more you can watch the below video.
          </div>
          <div className="regcontent1">
            We recommend you review the legal and policies section in the
            Supplier Panel to ensure your uploaded catalogues are in compliance
            with the policies of Meesho.
          </div>
          <div className="regcontent1">
            You will need to upload your catalog to start selling on Meesho. You
            will be able to upload your product catalog by logging on to the
            Meesho Supplier Panel.
          </div>
          <div className="usecontent">
            <img
              src="https://supplier.meesho.com/images/steps-2.jpg"
              alt="img"
              className="usecontentimg"
            />
            <div className="usecontent1">
             
              learn how to use meesho supplier panel?
            </div>
          </div>
          <div className="reghead2">What Is A Catalog?</div>
          <div className="regcontent1">
            A catalog is basically the list of products that you want to sell.
            You can upload a single catalog or you can upload catalogs in bulk
            using a csv (excel) file. Within each catalog, you can have a
            minimum of 1 product and a maximum of 9 products of the same
            category that you want to sell.
          </div>
          <div className="regcontent1">
            For example, you want to sell 6 sarees, then within the same
            catalog, you can upload all the 6 products together. But if you want
            to sell 1 saree and 1 kurta, you will have to upload a different
            catalog for each category.
          </div>
          <div className="reghead2">how to upload a catalog?</div>
          <div className="regcontent1">
            It is now very easy to upload single catalogs or bulk catalogs on
            Meesho! The product catalog gets live post 72 hours from the time of
            upload.
          </div>
          <div className="regcontent1">
            While uploading a catalog, you will have to select a category first
            and then upload the product images. Uploading more than one image
            for your product is recommended to give the customers a better view
            of your product. The detailed image guidelines will be provided in
            the Meesho Supplier panel. For each product, you will have to then
            fill in details like the Price, GST, etc.
          </div>
          <div className="regcontent1">
            It is recommended that you create a catalog with at least 3-4
            products to increase the chances of getting an order. We also
            recommend uploading at least 5-7 catalogs in the first few days to
            get better visibility.
          </div>
          <div className="regcontent1">
            We recommend you review the legal and policies section in the
            Supplier Panel to ensure your uploaded catalogues are in compliance
            with the policies of Meesho.
          </div>
          <div className="usecontent">
            <img
              src="https://supplier.meesho.com/images/steps-3.jpg"
              alt="img"
              className="usecontentimg"
            />
            <div className="usecontent1">
              learn how to upload catalog in bulk
            </div>
          </div>
          <div className="usecontent">
            <img
              src="https://supplier.meesho.com/images/steps-4.jpg"
              alt="img"
              className="usecontentimg"
            />
            <div className="usecontent1">
             
              learn how to upload single catalog
            </div>
          </div>
          <div className="reghead2">getting orders</div>
          <div className="regcontent1">
            Once your catalog becomes live, you can start selling on Meesho.
            More than 11 crore active customers across India will be able to
            view and purchase your products. To increase your sales and attract
            more customers, you can:
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>list more catalogs
          </div>
          <div className="regcontent1">
            It usually takes 5-7 catalogs to start getting orders on Meesho. The
            more catalogs you upload, the better are your chances of getting
            orders.
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>set the right price
          </div>
          <div className="regcontent1">
            you can set the right price of the products you want to sell on
            Meesho, consider the associated costs and margin. Set a competitive
            price for the products so that the customers find them more
            appealing than the competitive brands.
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>use price tool
          </div>
          <div className="regcontent1">
            You can use the price recommendation tool to arrive at a competitive
            price and increase your sales and visibility by getting an edge over
            other sellers.
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>right trend
          </div>
          <div className="regcontent1">
            Customers always prefer fresh and unique trends. So, try to list
            trending products to get more orders.
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>Opt for Next Day Dispatch (NDD)
            Program
          </div>
          <div className="regcontent1">
            Sign up for Meesho’s NDD program to increase your sales. Meesho
            provides extra visibility to all catalogs that qualify for the NDD
            program.
          </div>
          <div className="reghead1">Delivery & payment</div>
          <div className="regcontent1">
            When you receive an order for your product, you are notified via
            email. You can also check the order update on the Meesho Supplier
            panel.
          </div>
          <div className="regcontent1">
            Meesho charges you the lowest shipping cost for deliveries across
            India. Our logistics partner picks up the product from your location
            and delivers it straight to the customer.
          </div>
          <div className="regcontent2">
            find out more about shipping & returns on meesho{" "}
            <img
              src="https://supplier.meesho.com/images/find.svg"
              alt="img"
              className="sidearrow"
            />
          </div>

          <div className="works1">
            To fulfill an order, go to the Meesho Supplier Panel and follow
            these steps
          </div>
          <div className="worksprod1">
            <div className="account">
              <div className="account1 ">accept your order</div>
              <div className="account3 rounded-circle">1</div>
            </div>
            <div className="account">
              <div className="account1 ">download label and menifest</div>
              <div className="account3 rounded-circle">2</div>
            </div>
            <div className="account">
              <div className="account1 ">
                pack the product and paste a label
              </div>
              <div className="account3 rounded-circle">3</div>
            </div>

            <div className="accountlast">
              <div className="account1 ">
                hand over the product to meesho's logistic parteners
              </div>
              <div className="account3 rounded-circle">4</div>
            </div>
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>Opt for Next Day Dispatch (NDD)
            Program
          </div>
          <div className="regcontent1">
            Meesho charges a 0% commission rate from suppliers across all
            product categories. With no seller commission, Meesho is the most
            profitable platform for you to sell products online.
          </div>
          <div className="regcontent2">
            find out more about pricing & communication on meesho
            <img
              src="https://supplier.meesho.com/images/find.svg"
              alt="img"
              className="sidearrow"
            />
          </div>
          <div className="reghead3">
           
            <span className="dots">.</span>payment for orders
          </div>
          <div className="regcontent1">
            The payment for your orders is securely deposited directly in your
            bank account on the 7th day from order delivery, including Cash on
            Delivery orders. (If your product is delivered on 1st January 2022,
            the payment for that order will be deposited in your bank account on
            8th January 2022).
          </div>
          <div className="regcontent1">
            You can view your deposited balance and future payments on the
            Meesho Supplier Panel.
          </div>
        
      </div></div></div></div>
<div className="container-fluid egcolor">
      <div className=" container">
        <div className="row ">
          <div className="col-md-6 my-3">
          <div className="growcontent">
          Meesho Supplier Support Available 24/7</div>
        <div className="suplycontent">
              <div className="suplycontent">
                Meesho supplier support is available to solve all your doubts and
                issues before and after you start your online selling business.
              </div> 
          </div></div>
          <div className="col-md-6 my-3">
          
            <img src="https://supplier.meesho.com/images/email.svg" alt="img" />
            <div className="suplycontent">
              You can reach out to
              <div className="suplycontent">sell@meesho.com</div>

          
          </div>
        </div>
        </div>
      </div></div>
<Sellproduct/>

      <button
        onClick={() => {
          gotomeesho();
        }}
      >
        click me
      </button>
    </>
  );
};
export default Shipreturn;
