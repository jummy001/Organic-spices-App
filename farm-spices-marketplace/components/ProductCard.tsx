"use client"

import { useCart } from "@/context/cartContext"

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart()

  return (
    <div className="border rounded p-4 shadow">

      <img
        src={product.image}
        className="w-full h-48 object-cover"
      />

      <h2 className="text-lg font-bold mt-2">
        {product.name}
      </h2>

      <p className="text-green-700">
        ₦{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>

    </div>
  )
}