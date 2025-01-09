// src/components/OurProducts.tsx
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from "../../context/CartContext";

const OurProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart(); // Hook to manage cart

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container w-full px-[120px] py-[493] mt-10 p-20">
      <h1 className="text-3xl font-extrabold text-center mb-6">OUR PRODUCTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={295}
              height={298}
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
                {"☆".repeat(5 - 5)}
              </div>
              <span className="text-gray-500 text-sm ml-2">({5})</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 font-bold">${product.price}</span>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OurProducts;
