import React, { use, useEffect, useState } from "react";
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

export interface Product {
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

export interface Items{
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

export interface Attributes {
    size: string;
    origin: string;
    type: string;
}

export interface User{
  username:string;
  password:string;
  confirm_password:string;
  email:string;
  address:string;
  pincode:number;
  gender:string;
}

const ProductDetails:React.FC = ()=>{
  const [hoverImg, setHoverImg] = useState("")
  const dispatch = useDispatch();
  const cart:Cart = useSelector((state:State)=>state.cart);
  const location = useLocation();
  const redirectToLogin = useNavigate();
  const isLogin:User = useSelector((state:State) => state.user);
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");
  const value1 = queryParams.get("value");
  const product = products.filter((val)=>val.product_id === value);
  const availablePro = cart.items.filter((val)=> val.product_id === value);
  const isAvailable = (availablePro.length !== 0);
  const attribute = Object.keys(product[0].attributes)
  
  useEffect(()=>{
    setHoverImg(product[0].image_url)


  },[])
  const handleAddToCartFromDetails = (e) =>{
        if(!isLogin)return redirectToLogin('/login');
        dispatch(addToCart({...product[0]}));

  }

  const handleHover = (e)=>{
    console.log(e.target.dataset.img);
    console.log("image hover")
    setHoverImg(e.target.dataset.img)
  }

  return(
    <div className="product_details__container_hero">
      <div className="product_details__container">
      <div className="product_details__container__left">
        <div className="product_details_slider">
         {["/images/product-details/-original-imah56hkgehywn5b.jpeg","/images/product-details/-original-imah56hkgehywn5b.jpeg","/images/product-details/-original-imah56hkgehywn5b.jpeg"].map((val, i)=>{
          return(
            <div key={i} className="image-box">
              <img onMouseOver={(e)=>handleHover(e)} data-img = {product[0].image_url} src={product[0].image_url} alt="" />
            </div>
          )
         })
         }
        </div>
        <div className="product_details_content">
          <div className="product_details_img">
            <img 
              src={hoverImg} alt="" />
          </div>
        </div>
        </div> 
        <div className="product_details__container__right">
          <p>{product[0].name} || {product[0].description}</p>
          
          <p className="details-rating-1">{product[0].rating}*</p>
          <p> Rs. {product[0].price}</p><span></span>
          
          {Object.keys(product[0].attributes).map((val)=><p> {val.substring(0, 1).toLocaleUpperCase() + val.substring(1)} {" - "}{product[0].attributes[val]}</p>)}
         
          {!isAvailable?<button data-product = {{...product}} onClick={(e)=>handleAddToCartFromDetails(e)} >ADD TO CART</button>:""}
        </div> 
       
      </div>
    </div>
  )
}

export default ProductDetails;