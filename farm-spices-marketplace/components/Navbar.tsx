"use client"

import Link from "next/link"

export default function Navbar(){

 return(

  <nav className="bg-black text-white p-4 flex justify-between">

   <h1 className="text-green-500 font-bold">
    RA ENTERPRISE SPICES
   </h1>

   <div className="flex gap-6">

    <Link href="/">Home</Link>

    <Link href="/products">Products</Link>

    <Link href="/cart">Cart</Link>

    <Link href="/login">Login</Link>

   </div>

  </nav>
 )
}