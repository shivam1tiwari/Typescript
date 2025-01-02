import React from "react";
import "./ProductDetails.css"
import products from "../../constant/product.ts";
import {useLocation, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Redux/ActionCreator.ts";

export interface State {
  cart:Cart;
  user:User;
}

export interface Cart{
  items:Items[] ;
  total:number;
}

interface Product {
  product_id:string;
  name: string;
  description:string;
  price: number;
  brand:string;
  stock_quantity: number;
  rating:number,
  category_id: string;
  "image_url": string;
  "attributes": Attributes;
}

interface Items{
  product:Product;
  quantity:number;
  totalPrice:number;
  // product_id:string;
  // name: string;
  // description:string;
  // price: number;
  // brand:string;
  // stock_quantity: number;
  // rating:number,
  // category_id: string;
  // "image_url": string;
  // "attributes": Attributes;
    
}

interface Attributes {
    size: string;
    origin: string;
    type: string;
}

interface User{
  username:string;
  password:string;
  confirm_password:string;
  email:string;
  address:string;
  pincode:number;
  gender:string;
}

const ProductDetails:React.FC = ()=>{
  const dispatch = useDispatch();
  const cart = useSelector((state:State)=>state.cart);
  const location = useLocation();
  const redirectToLogin = useNavigate();
  const isLogin = useSelector((state:State) => state.user);
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");
  const product = products.filter((val)=>val.product_id === value);
  const availablePro = cart.items.filter((val)=> val.product_id === value);
  const isAvailable = (availablePro.length !== 0);

  const handleAddToCartFromDetails = (e) =>{
        if(!isLogin)return redirectToLogin('/login');
        dispatch(addToCart({...product[0]}));
  }

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
          <h1> Rs. {product[0].price}</h1><span></span>
          <p>{product[0].description}</p>
          {!isAvailable?<button data-product = {{...product}} onClick={(e)=>handleAddToCartFromDetails(e)} >ADD TO CART</button>:""}
        </div> 
       
      </div>
    </div>
  )
}

export default ProductDetails;