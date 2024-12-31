import React from "react";
import "./ProductDetails.css"
import products from "../../constant/product.ts";
import { useSearchParams,useLocation } from "react-router-dom";


const ProductDetails = ()=>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");
  const product = products.filter((val)=>val.product_id==value);
  return(
    <div className="product_details__container_hero">
      <div className="product_details__container">
      <div className="product_details__container__left">
        <div className="product_details_slider">
         {["./images/product-details/-original-imah56hkgehywn5b.jpeg","./images/product-details/-original-imah56hkgehywn5b.jpeg","./images/product-details/-original-imah56hkgehywn5b.jpeg"].map((val, i)=>{
          return(
            <div key={i} className="image-box">
              <img src={product[0].image_url} alt="" />
            </div>
          )
         })
         }
        </div>
        <div className="product_details_content">
          <div className="product_details_img">
            <img src={product[0].image_url} alt="" />
          </div>
        </div>
        </div> 
        <div className="product_details__container__right">
          <div>{product[0].name}</div>
          <div className="details-rating-1"><p>{product[0].rating}*</p></div>
          <h1> Rs. {product[0].price}</h1><span><del>Rs. {product[0].price + 674} </del></span>
          <p>{product[0].description}</p>
        </div> 
       
      </div>
    </div>
  )
}

export default ProductDetails;