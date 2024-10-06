import type { Product, DeliveryOrder, PaymentMethod, CartItem, Installment } from "@gstore/core"

export type ProductsContextType = {
  product: Product[] | null
  search: string
  setSearch: (search: string) => void
  productById: (id: number) => Product | null
}

export type PaymentContextType =  {
  paymentMethod: PaymentMethod 
  delivery: Partial<DeliveryOrder>
  updatePaymentMethod: (paymentMethod: PaymentMethod ) => void
  updateDelivery: (delivery: Partial<DeliveryOrder>) => void
  checkout: () => void
}

export type CartContextType = {
  items:CartItem[]
  itemsQty: number
  fullValue: number
  total: number
  installment: Installment | null
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  removeProduct: (product: Product) => void
  clearCart: () => void
}

export type Children = { children: React.ReactNode }