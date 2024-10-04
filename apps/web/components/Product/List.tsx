import { products } from "@gstore/core"
import { ProductItem } from "./Item"
import { ProductNotFound } from "./NotFound"

export function ProductList(): JSX.Element {
  return products.length ? (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'
    >
      {products?.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <ProductNotFound noBackButton />
  )
}
