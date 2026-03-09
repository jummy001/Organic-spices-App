"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/"
    })
  }

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-10 rounded-xl shadow-xl w-96">

        <h2 className="text-2xl font-bold mb-6">
          Sign In
        </h2>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </div>

    </div>
  )
}