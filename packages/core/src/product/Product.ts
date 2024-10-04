import type Priceable from "./Priceable"
import type Specifications from "./Specifications"

export default interface Product extends Priceable {
  id: number
  name: string
  description: string
  model: string
  image: string
  rate: number
  tradeMark: string
  videoReview: string
  tags: string[]
  specifications: Specifications
}