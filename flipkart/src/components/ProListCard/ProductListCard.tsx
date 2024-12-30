import React from "react";
import './ProductListCard.css'
import { useDispatch, UseDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Redux/ActionCreator.ts";

const ProductListCard = ({product}) =>{
const dispatch = useDispatch();
const cart = useSelector((state)=>state.cart)
  const handleAddToCart = (e) => {
    console.log(e.target)
    console.log("this is cart")
    dispatch(addToCart(product))
  }
  return(
    <div  className="productListCard_container">
      <div className="productListCard_container__content">
       <div className="productListCard_container__content-img">
        <img src="./images/top-brands/reboock.webp" alt="" />
        </div> 
        <div className="productListCard_container__content-name">
          <h5>{product.name}</h5>
        </div>
        <div className="productListCard_container__content-rating">
          <p>{product.rating}*</p>
        </div>
        <p><span style={{fontWeight:600}}>Rs </span>599  <del><span style={{fontWeight:500}}>Rs </span>1590</del></p>
        <button data-id={product.product_id} onClick={(e)=>handleAddToCart(e)} >ADD TO CART</button>
        <p style={{fontSize:".8rem"}}>Free Delivery</p>
      </div>
    </div>
  )
}

export default ProductListCard;