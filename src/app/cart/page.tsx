// src/app/cart/page.tsx
"use client";

import { useCart } from "../../context/CartContext";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate the subtotal
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    // Redirect to a checkout page or trigger checkout process
    alert("Proceeding to checkout. Subtotal: $" + subtotal.toFixed(2));
  };

  return (
    <div className="p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="h-screen">
        <h1 className="bg-teal-500 text-2xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Display Subtotal and Checkout Button if Cart has Items */}
        {cart.length > 0 && (
          <>
            <div className="mt-6 flex justify-between font-semibold">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
