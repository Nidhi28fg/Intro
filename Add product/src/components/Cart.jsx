import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router";


const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty } = useCart();
  let navigate = useNavigate();

  if (cart.length === 0) return <p className="mb-4">🛍️ Shop With Us</p>;

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">In Your Cart Items</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2 p-2 border rounded">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <img src={item.image} alt={item.name} className="mb-2 w-40 h-40 object-cover" />
            <p>₹{item.price} x {item.quantity}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 bg-gray-200" onClick={() => decrementQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button className="px-2 bg-gray-200" onClick={() => incrementQty(item.id)}>+</button>
            <button
              className="bg-black-500 text-red-600 px-2 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
       <button  className="bg-green-500 px-4 py-2 text-white rounded"
      onClick={() => {
        navigate('/checkout');
      }}
    > Go to Checkout</button>
    </div>
  );
};

export default Cart;