import React, { useEffect, useState } from "react";
import './Orders.css'

const Orders = () => {
  const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')!));


  return (
     !(orders)?<p>loding...</p>:
    <div className="orders__container">
      <h1>My Orders</h1>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.orderId}>
              <h3>Order ID: {order.orderId}</h3>
              <p>Date: {order.date}</p>
              <p>Status: Pending</p>

              {/* Order Items in Row */}
              <div className="order-items">
                <h4>Items:</h4>
                <div className="order-items-row">
                  {order.items.map((item, index) => (
                    <div className="order-item" key={index}>
                      <img src={item.product.image_url} alt={item.product.name} className="item-image" />
                      <div className="item-details">
                        <p>{item.product.name}</p>
                        <p>Rs{item.product.price} x {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p><strong>Total: Rs. {order.total}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
);
};

export default Orders;
