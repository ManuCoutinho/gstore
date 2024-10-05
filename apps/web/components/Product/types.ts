import type { Product } from "@gstore/core"
import type { Icon } from "@tabler/icons-react"

type ProductType = {
  product: Product
}

export type ProductItemProps = ProductType

export type BannerShopProps = ProductType

export type SpecificationsProps = ProductType

export type ProductInformationProps = ProductType

export type ProductTitleProps = ProductType

export type ProductNotFoundProps = {
  noBackButton?: boolean
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: Icon
}

export type CardProps = {
  label: React.ReactNode
  size: "sm" | "lg"
}

export type PriceSeriesProps = {
  product: Product
}

export type ReviewsProps = {
  rate: Product['rate']
}

export type TechReviewsProps = {
  video: Product['videoReview']
}