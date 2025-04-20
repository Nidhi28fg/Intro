import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, getTotal } = useCart();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🧾 Payment Page</h2>
      <div className="mb-4">
        {cart.map((item) => (
          <div key={item.id} className="border p-2 mb-2 rounded">
            <h3>{item.name} = {item.price} × {item.quantity}</h3>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
          </div>
        ))}
        <p className="font-semibold">Total: ₹{getTotal()}</p>
      </div>
      <form className="bg-white p-4 rounded shadow-md">
        <div className="mb-2">
          <label className="block text-sm font-medium">Card Number</label>
          <input className="border w-full p-2 rounded" placeholder="1234 5678 9012 3456" type='number' />
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium">Expiry</label>
          <input className="border w-full p-2 rounded" placeholder="MM/YY" type='number'/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">CVV</label>
          <input className="border w-full p-2 rounded" placeholder="123" type='number' />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Pay Now ₹{getTotal()}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
