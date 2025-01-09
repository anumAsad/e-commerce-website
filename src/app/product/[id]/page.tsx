"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  // Ensure `id` is a string
  const productId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    if (productId) {
      fetch(`/api/products`)
        .then((res) => res.json())
        .then((data) => {
          const prod = data.find((p: Product) => p.id === parseInt(productId));
          setProduct(prod);
        });
    }
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">${product.price}</p>
      <p>{product.description}</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 block">
        Back to Products
      </a>
    </div>
  );
}
