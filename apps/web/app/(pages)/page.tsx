import { ProductList } from "@/components/Product/List"

export default function Home() {
  return (
    <main className='container gap-5 py-10 flex flex-col flex-1 text-neutral-50'>
      <ProductList/>
    </main>
  )
}
