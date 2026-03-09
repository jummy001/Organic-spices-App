"use client"

import { useState } from "react"

export default function AddProduct() {

  const [name,setName] = useState("")
  const [price,setPrice] = useState("")

  const handleSubmit = async () => {

    await fetch("/api/products",{
      method:"POST",
      body: JSON.stringify({
        name,
        price
      })
    })

  }

  return (

    <div className="p-10">

      <h2 className="text-2xl mb-6">
        Add Product
      </h2>

      <input
        placeholder="Product name"
        className="border p-2 mb-4"
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Price"
        className="border p-2 mb-4"
        onChange={(e)=>setPrice(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-2 rounded"
      >
        Upload
      </button>

    </div>
  )
}