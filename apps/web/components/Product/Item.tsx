'use client'
import Image from "next/image"
import Link from "next/link"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import { Currency } from "@gstore/core"
import { ReviewNote } from "../shared/ReviewNote"
import { ROUTES } from "@/constants/routes"
import type { ProductItemProps } from "./types"
import { Button } from "./Button"

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link
      href={`${ROUTES.PRODUCT}/${product.id}`}
      className='flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px] active:ring focus:ring ring-violet-950 focus-visible:outline-none'
    >
      <div className='absolute flex justify-end top-2.5 right-2.5'>
        <ReviewNote rate={product.rate} />
      </div>
      <div className='w-full h-48 relative'>
        <Image
          src={product.image}
          fill
          className='object-contain hover:scale-150 transition-transform will-change-transform'
          alt='Imagem do Produto'
        />
      </div>
      <div className='flex-1 flex flex-col gap-3 p-5 border-t border-white/10'>
        <span className='text-lg font-semibold'>{product.name}</span>
        <div className='self-start text-sm border-b border-dashed'>
          {product.specifications.emphasis}
        </div>
        <div className='flex-1'></div>
        <div className='flex flex-col'>
          <span className='text-sm text-gray-400 line-through'>
            de {Currency.format(product.basePrice)}
          </span>
          <span className='text-xl font-semibold text-emerald-400'>
            por {Currency.format(product.promotionalPrice)}
          </span>
          {/* <span className="text-zinc-400 text-xs">
                        até {parcelamento.qtdeParcelas}x de{' '}
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </span> */}
        </div>
        <Button
          icon={IconShoppingCartPlus}
          className='bg-violet-700 py-2'
          onClick={(e) => {
            e.preventDefault()
            console.log("Adicionar ao carrinho")
            // adicionarItem(product)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Link>
  )
}
