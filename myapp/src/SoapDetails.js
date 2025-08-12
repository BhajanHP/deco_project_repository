
import React from "react";
import soapImg1 from "./Images/amazon_soap1.png";
import soapImg2 from "./Images/amazon_soap2.png";
import "./App.css";

function SoapDetails() {
  return (
    <div className="soap-details">
      <h2>DECO Coffee Soap</h2>
      <p>
        Our Coffee Soap is made with natural coffee extracts and essential oils,
        giving you a refreshing start to your day. It gently exfoliates and
        nourishes your skin while leaving a rich coffee aroma.
      </p>

      <div className="soap-images">
        <img src={soapImg1} alt="Coffee Soap" className="soap-img" />
        <img src={soapImg2} alt="Coffee Soap Packaging" className="soap-img" />
      </div>
    </div>
  );
}

export default SoapDetails;
