import { PageProps } from "@/.next/types/app/layout"
import { BannerShop } from "@/components/Product/BannerShop"
import { ProductNotFound } from "@/components/Product/NotFound"
import { Information } from "@/components/Product/ProductInfo"
import { ProductTitle } from "@/components/Product/Title"
import { Product, products } from "@gstore/core"

export default function ProductByIdPage({ params }: PageProps) {
  const id = + params.id
  const product = products.find((product) => product.id === id) as Product
  return product ? (
    <main className='flex flex-col gap-20 container py-10'>
      <div className='flex flex-col gap-10'>
        <ProductTitle product={product} />
        <Information product={product} />
        <BannerShop product={product}/>
      </div>
    </main>
  ) : (
    <ProductNotFound/>
  )
}