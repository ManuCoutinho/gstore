import { Product } from "@gstore/core"

type ProductType = {
  product: Product
}

export type ProductItemProps = ProductType

export type BannerShopProps =  ProductType

export type SpecificationsProps = ProductType

export type ProductInformationProps = ProductType

export type ProductTitleProps = ProductType

export type  ProductNotFoundProps = {
  noBackButton?: boolean
}