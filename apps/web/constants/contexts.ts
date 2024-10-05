import type {
  ProductsContextType,
  PaymentContextType,
  CartContextType
} from "@/data/types"
import { PaymentMethod } from "@gstore/core"
const PRODUCTS_INITIAL_STATE = {
  product: null,
  search: "",
  setSearch: () => {},
  productById: () => null
} satisfies ProductsContextType

const PAYMENT_INITIAL_STATE = {
  paymentMethod: PaymentMethod.PIX,
  delivery: {},
  updatePaymentMethod: () => {},
  updateDelivery: () => {},
  checkout: () => {}
} satisfies PaymentContextType

const CART_INITIAL_STATE = {
  items: [],
  itemsQty: 0,
  fullValue: 0,
  total: 0,
  installment: null,
  addItem: () => {},
  removeItem: () => {},
  removeProduct: () => {},
  clearCart: () => {}
} satisfies CartContextType

export { PRODUCTS_INITIAL_STATE, PAYMENT_INITIAL_STATE, CART_INITIAL_STATE }
