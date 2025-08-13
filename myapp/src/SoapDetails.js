import React from "react";
import soapImg1 from "./Images/amazon_soap1.png";
import soapImg2 from "./Images/amazon_soap2.png";
import soapImg3 from "./Images/soap_details.png";
import reviewImg1 from "./Images/review1.png"; 
import reviewImg2 from "./Images/review2.png"; 
import reviewImg3 from "./Images/review1_soap_img.jpeg"; 
import reviewImg4 from "./Images/review2_soap_img.png"; 
import "./App.css";

function SoapDetails() {
  return (
    <div className="soap-details">
      <h2>DECO Coffee Soap</h2>
      <p>
        Infused with rich coffee extract, this soap detans, brightens, and refreshes your skin with every wash.
        Fades tan & dullness for an even glow Antioxidants protect from damage and slow signs of aging
        Moisturizing oils keep skin soft and hydrated Soothes & energizes with a refreshing coffee aroma
        Natural. Nourishing. Glow-Boosting. Stock up now for skin that’s radiant, smooth, and ready to shine every day.
      </p>

      {/* Soap Images */}
      <div className="soap-images">
        <img src={soapImg1} alt="Coffee Soap" className="soap-img" />
        <img src={soapImg2} alt="Coffee Soap Packaging" className="soap-img" />
        <img src={soapImg3} alt="Coffee Soap Packaging2" className="soap-img" />
      </div>
{/* Review Section */}
<h3 className="reviewsHeading">REVIEWS</h3>
<div className="review-images">
  <img src={reviewImg1} alt="Customer Review 1" className="review-img" />
  <img src={reviewImg2} alt="Customer Review 2" className="review-img" />
  <img src={reviewImg3} alt="Customer Review 1 Image" className="review-img small-review-img" />
  <img src={reviewImg4} alt="Customer Review 2 Image" className="review-img small-review-img" />
</div>

    </div>
  );
}

export default SoapDetails;
