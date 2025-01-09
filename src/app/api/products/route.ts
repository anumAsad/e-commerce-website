// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: "Hoodie for Man", price: 120, image: "/hoodie.png" },
  { id: 2, name: "Fitted Cargo Pants", price: 212, image: "/cargo-pant-1-1.jpg" },
  { id: 3, name: "Loose Fit Bermuda Shorts", price: 125, image: "/shorts-1-1.jpg" },
  { id: 4, name: "Faded Skinny Jeans", price: 210, image: "/skinny-jeans-1.jpg" },
  { id: 5, name: "Leather Jacket", price: 300, image: "/jacket.jpeg" },
  { id: 6, name: "Shurug", price: 150, image: "/shurug-1.jpg" },
  { id: 7, name: "Sweater", price: 95, image: "/sweater-1-1.jpg" },
  { id: 8, name: "Casual Blazer", price: 180, image: "/sweater-2-1.jpg" },
  { id: 9, name: "Girls Hoodie", price: 40, image: "/girls-hoodie-1.jpg" },
  { id: 10, name: "Track Suit", price: 110, image: "/man-tracksuit-1.jpg" },
  { id: 11, name: "Black Hoodie", price: 130, image: "/hoodie.png" },
  { id: 12, name: "Cargo Pants", price: 220, image: "/cargo-pant-1-1.jpg" },
  { id: 13, name: "Leather jacket", price: 250, image: "/jacket.jpeg" },
  { id: 14, name: "Denim Jacket", price: 180, image: "/black-jacket.jpeg" },
  { id: 15, name: "Couple Hoodies", price: 160, image: "/spider-hoodie-1.jpg" },
];

export async function GET() {
  return NextResponse.json(products);
}
