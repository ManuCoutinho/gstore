import type DeliveryOrder from "./DeliveryOrder"
import { PaymentMethod } from "./PaymentMethods"
import type ProductItem from "./ProductItem"
import { Status } from "./Status"

export default interface Order {
  id: number
  date: Date
  items: ProductItem[]
  totalAmount: number
  status: Status
  paymentMethod: PaymentMethod
  delivery: DeliveryOrder
}