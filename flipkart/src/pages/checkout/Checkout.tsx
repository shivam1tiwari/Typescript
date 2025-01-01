import React, { RefObject, useEffect, useRef } from "react";
import './Checkout.css'
import { useState } from "react";
import { useSelector, UseSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () =>{
  const [editAddress, setEditAddress] = useState<boolean>(false);
  const [checkOutInfo, setCheckOutInfo] = useState();
  const [userInfo, setUserInfo] = useState({});
  const [formData, setFormData] = useState();
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const cart = useSelector((state=>state.cart));
  const location = useNavigate();

  useEffect(()=>{

   const user =  JSON.parse(localStorage.getItem("user")!);
   console.log(user)
    setUserInfo({
      ...user,
     })
   
  },[]);

  const handleNewAddress = () => {
    setEditAddress(!editAddress)
  }

  const handleFormSubmit = ()=>{
    console.log(ref1.current?.value)
    const obj = {...userInfo,address:[...userInfo["address"],ref1.current?.value]}
    setUserInfo({
      ...userInfo,address:[...userInfo["address"],ref1.current?.value]
    })
    localStorage.setItem('user',JSON.stringify(obj))
    setEditAddress(!editAddress)
  }
  const handleOrderAddres = (e) =>{
     const {value} = e.target;
    //  console.log( value)
     ref2.current = value
     console.log(ref2.current)
  }

  const handleOrderPayMeth = (e) =>{
    const {value} = e.target;
    ref3.current = value;

  }
  const handlePay = (e) => {
        //  console.log(e.target.value)
  if(ref2.current !== null && ref3.current !== null){ 
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

const orderDate = `${day}-${month}-${year}`;  
    const obj = {}
    obj["date"] = orderDate;
    obj["name"]= userInfo["username"]
    obj["email"]= userInfo["email"]
    obj["address"] = ref2.current;
    obj["orderId"] = "Z" +cart.total + ref3.current;
    obj["items"] = cart.items;
    obj["payment"] = ref3.current;
    obj["total"] = cart.total;
     if(localStorage.getItem('orders')){
     const array =  JSON.parse(localStorage.getItem('orders')! ) 
    localStorage.setItem('orders',JSON.stringify([...array,obj]));
     }else{
      localStorage.setItem('orders',JSON.stringify([obj]));
     }
     }  
     location('/orders')   
  }
  
console.log(userInfo, cart)

  
  return ( (Object.keys(userInfo).length == 0)?<p>Loding</p>:
    <div className="checkout__container">
      <h1>CHECKOUT</h1>
      <div className="checkout__box">
        <div className="checkout__content">
          <div className="checkout__user__information">
            <div className="checkout__user__information_content">
              <div className="checkout__login__information">
              <p>{userInfo["username"]}</p>
              <ul><li>{userInfo["email"]}</li></ul>
              </div>
              <div className="info__common checkout__user__address ">
                <div className="address__header">
                <p>Delivery Address</p>
                {editAddress?<button onClick={()=>handleFormSubmit()}>OK</button>:<button onClick={()=>handleNewAddress()}>+ Add new Address</button>}
                </div>
                {editAddress?<input ref={ref1}  type="text" placeholder="Enter New Address"></input>:
                <ul>
                {userInfo["address"].map((val, i)=><div key={i}><label htmlFor={`address-${i}`}><input onChange={(e)=>handleOrderAddres(e)} id={`address-${i}`} type="radio" name="address" value={val} />{val}</label></div>)}
                </ul>
}
              
              </div>
              <div className="checkout__order_summery">
                <div className="info__common checkout__order_summery__heading ">
                  <h3>ORDER SUMMERY</h3>
                </div>
                {cart.items.map((val)=>
                <div className="checkout__order_summery__product">
                
                  <div id="checkout__order_summery__product_img"><img src={val.product.image_url} alt="" /></div>
                  <div>
                    <p>{val.product.name}</p>
                    <p>Qnt. {val.quantity}  Price Rs.{val.totalPrice}</p>
                    <p>{val.product.description}</p>
                  </div>
                </div>
                )}
              </div>

            </div>
          </div>
          <div className="checkbox__product_total_price">
            <div className="checkout_price_details">
              <div className="checkout__price">
              <p>Price </p>
              <p>Rs {cart.total} </p>
              </div>
              <div className="checkout__price">
              <p>Delhivery Charges</p>
              <p>Rs FREE</p>
              </div>
              <div className="checkout__price">
              <p>Packing Charge</p>
              <p>Rs 0</p>
              </div>
              <div className="checkout__price">
              <p>Total Payable</p>
              <p>Rs {cart.total}</p>
              </div>
            </div>
            <div className="checkout__price paytype">
                <label htmlFor="paytype1">
                  <input onChange={(e)=>handleOrderPayMeth(e)} id="paytype1" value={"COD"} name="paytype" type="radio" />Cash on Delivery
                </label>
                <label htmlFor="paytype2">
                  <input onChange={(e)=>handleOrderPayMeth(e)} value={"RazorPay"} id="paytype2" name="paytype" type="radio" />RazorPay
                </label>
              </div>
            <button onClick={(e)=>handlePay(e)} className="checkout_button">Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
