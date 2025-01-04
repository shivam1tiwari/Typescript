import React, { useEffect, useState } from "react";
import './Orders.css'

const Orders = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')!));

console.log(orders)

console.log(orders)
  return (
    orders.length === 0?<p>Loading</p>:
    <div className="order__container">
      <div className="order__container__box">
        <div className="order__container__box__upper">

        </div>
        <div className="order__container__box__lower">
          <div className="order__container__box__lower-left">
           <div className="order__container__box__lower-left_content">
            <div className="orders__filter" >
              <h2>Filters</h2>
            </div>
            <div className="orders__common">
            <h4>ORDER STATUS</h4>
            <label htmlFor=""><input type="checkbox" />On the way</label>
            <label htmlFor=""><input type="checkbox" />Delivered</label>
            <label htmlFor=""><input type="checkbox" />Cancelled</label>
            <label htmlFor=""><input type="checkbox" />Returned</label>
            </div>
            <div className="orders__common">
            <h4>ORDERS TIME</h4>
            <label htmlFor=""><input type="checkbox" />Last 30 dayys</label>
            <label htmlFor=""><input type="checkbox" />2023</label>
            <label htmlFor=""><input type="checkbox" />2022</label>
            <label htmlFor=""><input type="checkbox" />2021</label>
            <label htmlFor=""><input type="checkbox" />Older</label>
            </div>
            </div> 
          </div>
          <div className="order__container__box__lower-right">
            <div className="order__container__box__lower-right_search">
              <div className="order__search_box">
                <input id="orders_input" placeholder="Search your orders here" type="search" />
                 <button id="orders_button">Search Orders</button>
              </div>
            </div>
            <div className="order__container__box__lower-right_items">
              {orders.map((order)=>
              (order.items.map((item) => (<div className="item">
                <div className="item__container">
                  <div className="orders__img">
                    <img src={item.product.image_url} alt="" />
                  </div>
                  <div className="orders__discription">
                    <div className="orders__discription_name">
                      <p>{item.product.name}</p>
                     <p className="details-order-name"> {Object.keys(item.product.attributes).map((val)=><span>{item.product.attributes[val]}{" "}</span>)}</p>
                    </div>
                    <div className="orders__description_attributs">
                      
                    </div>
                  
                  <div className="orders__price"><p>{item.product.price}</p></div>
                  <div className="orders__status"><p>{"pending"}</p></div>
                  </div>
                </div>
              </div>
              ))))}
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Orders;
