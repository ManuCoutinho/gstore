import { PageProps } from "@/.next/types/app/layout"
import { BannerShop } from "@/components/Product/BannerShop"
import { ProductNotFound } from "@/components/Product/NotFound"
import { PriceSeries } from "@/components/Product/PriceSeries"
import { Information } from "@/components/Product/ProductInfo"
import { Reviews } from "@/components/Product/Reviews"
import { TechnicalReviews } from "@/components/Product/TechnicalReviews"
import { ProductTitle } from "@/components/Product/Title"
import { Product, products } from "@gstore/core"

export default function ProductByIdPage({ params }: PageProps) {
  const id = + params.id
  const product = products.find((product) => product.id === id) as Product
  return product ? (
    <div className='flex flex-col gap-20 container py-10'>
      <div className='flex flex-col gap-10'>
        <ProductTitle product={product} />
        <Information product={product} />
        <BannerShop product={product} />
        <PriceSeries product={product} />
      </div>
      <Reviews rate={product.rate} />
      <TechnicalReviews video={product.videoReview} />
    </div>
  ) : (
    <ProductNotFound />
  )
}