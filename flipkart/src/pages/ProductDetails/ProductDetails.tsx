import React from "react";
import "./ProductDetails.css"

const ProductDetails = ()=>{
  return(
    <div className="product_details__container_hero">
      <div className="product_details__container">
      <div className="product_details__container__left">
        <div className="product_details_slider">
         {["./images/product-details/-original-imah56hkgehywn5b.jpeg","./images/product-details/-original-imah56hkgehywn5b.jpeg","./images/product-details/-original-imah56hkgehywn5b.jpeg"].map((val, i)=>{
          return(
            <div key={i} className="image-box">
              <img src={val} alt="" />
            </div>
          )
         })
         }
        </div>
        <div className="product_details_content">
          <div className="product_details_img">
            <img src={"./images/product-details/-original-imah56hkgehywn5b.jpeg"} alt="" />
          </div>
        </div>
        hellow
        </div> 
        <div className="product_details__container__right">
          raju
          <div>SAMSUNG GALAXY F05</div>
          <div className="details-rating"><p>4.2*</p></div>
          <h1>Rs 6777</h1><span><del>rs9999</del></span>
        </div> 
      </div>
    </div>
  )
}

export default ProductDetails;