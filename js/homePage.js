import {setStyle,setInnerHtml,getDOMElementValue } from "./utils/styleutils.js";



//   js for navbar
let openNavBtn = document.getElementById("open-nav");
openNavBtn.addEventListener("click", function (event) {
  event.preventDefault();
  setStyle("sidebar","width","60vw");
  setStyle("para","marginLeft","250px");
});


let closeNavBtn = document.getElementById("close-nav");
closeNavBtn.addEventListener("click", function (event) {
  event.preventDefault();
  setStyle("sidebar","width","0px");
  setStyle("para","marginLeft","0px");
});

// JS for login page for desktop view
let openLoginBtn = document.getElementById("open-login");
openLoginBtn.addEventListener("click", function (event) {
  event.preventDefault();
   setStyle("main-1","display","block");

});

let closeLoginBtn = document.getElementById("close-btn");
closeLoginBtn.addEventListener("click", function (event) {
  event.preventDefault();
   setStyle("main-1","display","none");
});

// Js for Footer
let readmorebtn = document.getElementById("readmore");
readmorebtn.addEventListener("click", (event) => {
  event.preventDefault();
  setStyle("readmore","display","none");
  let string = '<div class="website-info-readmore">';
  string += '<h2 style="color: black;">India’s biggest Online Supermarket</h2>';
  string +=
    "<p>bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 5% of the bill value if the delivery is delayed (however, due to the pandemic caused by Covid-19 our delivery might get delayed. Delivery Guarantee will not be applicable). For all your order values above Rs. 1200, we provide free delivery. A wide range of imported and gourmet products are available through our express delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund.</p>";
  string += "<p>Best quality products for our quality-conscious customers.</p>";
  string +=
    "<p>bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more.</p>";
  string +=
    "<p>We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only ensures the best prices and freshest products for our customers but also helps the farmers get better prices. With more than 80 Organic Fruits and Vegetables and a wide range of organic staples, bigbasket has the largest range in the organic products category.</p>";
  string += "</div>";
  setInnerHtml("read",string);
});

// JS for Login Page for mobile view 
let openLoginBtnMob = document.getElementById("open-login2");
openLoginBtnMob.addEventListener("click", function (event) {
  event.preventDefault();
  setStyle("main-1","display","block");
});

// ACtion on Cross Icon mobile view;
let crossbtn= document.getElementById("cross-icon");
crossbtn.addEventListener("click",(event)=>{
    document.getElementById("searchBarMob").value='';
    window.location.href="homePage.html";
});
