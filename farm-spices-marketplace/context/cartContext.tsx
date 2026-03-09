"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext<any>(null)

export function CartProvider({ children }: any) {

  const [cart, setCart] = useState<any[]>([])

  const addToCart = (product:any) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id:string) => {
    setCart(cart.filter(item => item._id !== id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)