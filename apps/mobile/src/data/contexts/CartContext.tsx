"use client"
import { createContext, useEffect, useState } from "react"
import type { CartContextType, Children } from "../types"
import { CART_INITIAL_STATE } from "../constants/contexts"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Cart, CartItem, CalculateInstallment, Product } from "@gstore/core"

export const CartContext = createContext<CartContextType>(CART_INITIAL_STATE)

export function CartContextProvider({ children }: Children) {
  const { saveItem, getItem } = useLocalStorage()
  const [cart, setCart] = useState<Cart>(new Cart())

  function addItem(product: Product) {
    updateCart(cart.addItem(product))
  }

  function removeItem(product: Product) {
    updateCart(cart.removeItem(product))
  }

  function removeProduct(product: Product) {
    updateCart(cart.removeProduct(product))
  }

  function clearCart() {
    updateCart(cart.clear())
  }

  function updateCart(cart: Cart) {
    saveItem("cart", cart.items)
    setCart(cart)
  }

  useEffect(() => {
    getItem("cart").then((storage: CartItem[]) => {
      if(storage) {
        setCart(new Cart(storage))
      }
    });
  }, [getItem])

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        itemsQty: cart.itemsQty,
        total: cart.totalAmount,
        fullValue: cart.totalFullPrice,
        installment: new CalculateInstallment().execute(cart.totalAmount),
        addItem,
        removeItem,
        removeProduct,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

