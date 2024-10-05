import type { Product } from "../product"

export default interface ProductItem {
  id: number
  product: Product
  quantity: number
  unitPrice: number
}