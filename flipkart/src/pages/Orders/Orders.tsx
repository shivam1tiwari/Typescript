import React, { useState } from "react";
import './Orders.css'
// Example order data where each order contains multiple items (6 items)
const orderData = [
  {
    orderId: "12345",
    date: "2024-12-01",
    items: [
      { name: "Item 1", price: 100, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 2", price: 150, quantity: 2, imageUrl:"/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 3", price: 200, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 4", price: 120, quantity: 2, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 5", price: 80, quantity: 3, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 6", price: 75, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      
    ],
    totalPrice: 1125,
    status: "Shipped"
  },
  {
    orderId: "1234",
    date: "2024-12-01",
    items: [
      { name: "Item 1", price: 100, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 2", price: 150, quantity: 2, imageUrl:"/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 3", price: 200, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 4", price: 120, quantity: 2, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 5", price: 80, quantity: 3, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      { name: "Item 6", price: 75, quantity: 1, imageUrl: "/images/product-details/-original-imah56hkgehywn5b.jpeg" },
      
    ],
    totalPrice: 1125,
    status: "Shipped"
  }
 
];

const Orders = () => {
  const [orders, setOrders] = useState(orderData);

  return (
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
              <p>Status: {order.status}</p>

              {/* Order Items in Row */}
              <div className="order-items">
                <h4>Items:</h4>
                <div className="order-items-row">
                  {order.items.map((item, index) => (
                    <div className="order-item" key={index}>
                      <img src={item.imageUrl} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <p>{item.name}</p>
                        <p>${item.price} x {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p><strong>Total: ${order.totalPrice}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
