
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow-md bg-grey-100">
      <img src={product.image} alt={product.name} className="mb-2 w-full h-80 object-cover" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;