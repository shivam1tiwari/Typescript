import React, { useState } from "react";
import './Top.css';
import arrow from '../../asset/arrow-down.svg'
import Card from "../ProductCard/Card.tsx";

const Top = ({noOfProd,brandName})=>{
//  const [noOfProd, setNoOfProd] = useState(10)
   return(
      <div className="top__container">
        <div className="top__content">
          <div className="top__content_name">
            <div className="top__content_name-text"><h2>Top {brandName}</h2></div>
            <div className="top__content_name-button"><span><img src={arrow} alt="" /></span></div>
          </div>
          <div className="top__content_product">
            <div className="top__content_product-card" style={{transform:`translateX(-${noOfProd*13}rem)`}} >
              <Card  />
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            
            </div>
          </div>
          

        </div>
      </div>
   )
}

export default Top;