import type { ProductTitleProps } from "./types"

export function ProductTitle({ product }: ProductTitleProps): JSX.Element {
  return (
    <div className='flex flex-col gap-4 font-semibold'>
      <div className='text-2xl text-zinc-200'>{product?.name}</div>
      <div className='font-light text-zinc-400'>{product?.description}</div>
    </div>
  )
}
