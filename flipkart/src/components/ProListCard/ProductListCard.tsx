import React from "react";
import './ProductListCard.css'
import { useDispatch, UseDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Redux/ActionCreator.ts";
import { useNavigate } from "react-router-dom";

const ProductListCard = ({product}) =>{
const location = useNavigate();  
const dispatch = useDispatch();
const cart = useSelector((state)=>state.cart)
  const handleAddToCart = (e) => {
    console.log(e.target)
    console.log("this is cart")
    dispatch(addToCart(product))
  }

  const handleProductDetails = (e) =>{
    console.log(e.target.dataset.id)
    const proId = e.target.dataset.id;
    location(`/products/product-details?key=${proId}`) 
  }
  return(
    <div  className="productListCard_container">
      <div className="productListCard_container__content">
       <div data-id={product.product_id} onClick={(e)=>handleProductDetails(e)} className="productListCard_container__content-img">
        <img  data-id={product.product_id} src={product.image_url} alt={product.name} />
        </div> 
        <div className="productListCard_container__content-name">
          <h5>{product.name}</h5>
        </div>
        <div className="productListCard_container__content-rating">
          <p>{product.rating}*</p>
        </div>
        <p><span style={{fontWeight:600}}>Rs </span> {product.price} <del><span style={{fontWeight:500}}>Rs </span>{product.price + 250}</del></p>
        <button data-id={product.product_id} onClick={(e)=>handleAddToCart(e)} >ADD TO CART</button>
        <p style={{fontSize:".8rem"}}>Free Delivery</p>
      </div>
    </div>
  )
}

export default ProductListCard;