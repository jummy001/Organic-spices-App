"use client"

import { useCart } from "@/context/cartContext"

export default function CartPage() {

  const { cart } = useCart()

  return (

    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cart.map((item:any) => (

        <div key={item._id} className="flex justify-between mb-4">

          <p>{item.name}</p>

          <p>₦{item.price}</p>

        </div>

      ))}

    </div>
  )
}