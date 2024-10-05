"use client"
import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useApi from "../hooks/useApi"
import { PAYMENT_INITIAL_STATE } from "@/constants/contexts"
import { ROUTES } from "@/constants/routes"
import { PaymentMethod, Status } from "@gstore/core"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useCart } from "../hooks/useCart"
import type { Children, PaymentContextType } from "../types"
import type {
  DeliveryOrder,
  Order,
  CartItem,
  ProductItem
} from "@gstore/core"

export const PaymentContext = createContext<PaymentContextType>(PAYMENT_INITIAL_STATE)

export function PaymentContextProvider({ children }: Children) {
  const { httpPost } = useApi()
  const { items, total, clearCart } = useCart()
  const { saveItem, getItem } = useLocalStorage()
  const router = useRouter()

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.PIX)
  const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({})

  function updatePaymentMethod(payment: PaymentMethod) {
    saveItem("payment-method", payment)
    setPaymentMethod(payment)
  }

  function updateDelivery(deliveryIn: Partial<DeliveryOrder>) {
    saveItem("delivery", deliveryIn)
    setDelivery(deliveryIn)
  }

  async function checkout() {
    const order: Partial<Order> = {
      date: new Date(),
      paymentMethod,
      totalAmount: total,
      delivery: delivery as DeliveryOrder,
      status: Status.RECEIVED,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice
          }) as ProductItem
      )
    }

    await httpPost("/orders", order)
    clearCart()
    router.push(ROUTES.CHECKOUT_SUCCESS)
  }

  useEffect(() => {
    const deliveryStorage = getItem("delivery")
    const paymentStorage = getItem("payment-method")
    if (deliveryStorage) setDelivery(deliveryStorage)
    if (paymentStorage) setPaymentMethod(paymentStorage)
  }, [getItem])

  return (
    <PaymentContext.Provider
      value={{
        delivery,
        paymentMethod,
        updateDelivery,
        updatePaymentMethod,
        checkout
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
