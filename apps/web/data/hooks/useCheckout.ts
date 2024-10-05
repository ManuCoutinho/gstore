import { useContext } from "react"
import { PaymentContext } from "../contexts/PaymentContext"

export function useCheckout() {
  const context = useContext(PaymentContext)

  return context
}