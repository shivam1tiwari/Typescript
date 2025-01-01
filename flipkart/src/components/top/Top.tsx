import React, { useState } from "react";
import './Top.css';
import arrow from '../../asset/arrow-down.svg'
import Card from "../ProductCard/Card.tsx";
import products from "../../constant/product.ts";

const Top = ({noOfProd,brandName,product})=>{
//  const [noOfProd, setNoOfProd] = useState(10)
  // const product =  products.filter((pro)=>pro.rating > 4.7);
  console.log(product)
   return(
      <div className="top__container">
        <div className="top__content">
          <div className="top__content_name">
            <div className="top__content_name-text"><h2>Top {brandName.substring(0,1).toUpperCase() + brandName.substring(1)}</h2></div>
            <div className="top__content_name-button"><span><img src={arrow} alt="" /></span></div>
          </div>
          <div className="top__content_product">
            <div className="top__content_product-card" style={{transform:`translateX(-${noOfProd*13}rem)`}} >
              {product.map((val)=> <Card key={val.product_id} product={val}/>)}
             
            </div>
          </div>
          

        </div>
      </div>
   )
}

export default Top;