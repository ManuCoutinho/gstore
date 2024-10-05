import { Children } from "../types"
import { CartContextProvider } from "./CartContext"
import { PaymentContextProvider } from "./PaymentContext"
import { ProductsContextProvider } from "./ProductsContext"

export function Providers({ children }: Children) {
  return (
    <ProductsContextProvider>
      <PaymentContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </PaymentContextProvider>
    </ProductsContextProvider>
  )
}