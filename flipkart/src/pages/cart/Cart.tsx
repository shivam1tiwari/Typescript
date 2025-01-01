import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
import {updateCartQuantity,clearCartItem,removeFromCart} from '../../Redux/ActionCreator.ts';
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const location = useNavigate()
  // State to manage cart items
  // const [cartItems, setCartItems] = useState(initialCartItems);
  // const [orderPlaced, setOrderPlaced] = useState(false); 
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  
  // console.log(cart.items[0].product.id)
  {console.log(cart,"afterre")}
  const handleUdateQuantity = (e)=>{
       console.log( e.target.dataset.id,"this click id")
     const item = cart.items.filter((item)=>item.product.product_id === e.target.dataset.id)
     console.log(item, "item value")
     console.log(item[0].quantity,item, "item value" )
     let quantity;
     if(e.target.dataset.button == "max"){
     quantity = (item[0].quantity) + 1;}
     if(e.target.dataset.button == "min"){
      if(item[0].quantity==1){
        quantity = 1;
      }else{
      quantity = (item[0].quantity) - 1;}}
      console.log(item[0].quantity,"after update quantity")
      console.log(e.target.dataset.id, quantity,"checking payload ")
      dispatch(updateCartQuantity(e.target.dataset.id,quantity));
      //  console.log(cart.items[0].quantity)
  }

  const handleClearCart = () => {
     dispatch(clearCartItem())
  }

  const handleRemoveItem = (e) => {
    const prodId = e.target.dataset.id
    console.log(prodId)
    dispatch(removeFromCart(prodId))
  }
  
  const handlePlaaceOrder = (e) => {
       location('/checkout')
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      {/* If the cart is empty */}
      {cart.items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        // <div key={}>
        <>
          <div className="cart-items">
            {/* Render cart items in column layout */}
            {cart.items.map((item) => (
              <div className="cart-item" key={item.product.product_id}>
                <img src={item.product.image_url} alt={item.product.name} className="item-image" />
                <div className="item-details">
                  <h2>{item.product.name}</h2>
                  <p>Price: Rs.{item.product.price}</p>
                  <div className="quantity-controls">
                    <button data-button={"min"} data-id={item.product.product_id} onClick={(e)=>handleUdateQuantity(e)} >-</button>
                    <span>Quantity: {item.quantity}</span>
                    <button data-button={"max"} data-id={item.product.product_id} onClick={(e)=>handleUdateQuantity(e)} >+</button>
                  </div>
                  <p>Total: Rs. {item.totalPrice}</p>
                  <button data-id={item.product.product_id} onClick={(e)=>handleRemoveItem(e)}>Remove Item</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: Rs{cart.total}</h3>
          </div>
          <button onClick={(e)=>handlePlaaceOrder(e)} >Place Order</button>
          </>
        // </div>
      )}

      {/* Order Confirmation */}
      {/* {orderPlaced && (
        <div className="order-confirmation">
          <h2>Order Placed Successfully!</h2>
          <p>Your order has been confirmed. Thank you for shopping with us!</p>
        </div>
      )} */}

      {/* Clear Cart Button */}
      <button onClick={()=>handleClearCart()} >Clear Cart</button>
    </div>
  );
};

export default Cart;
