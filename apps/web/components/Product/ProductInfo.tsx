import Image from "next/image";
import { Specifications } from "./Specifications";
import { ProductInformationProps } from "./types";

export function Information({ product} : ProductInformationProps) {

  return product ? (
    <div className='flex items-center bg-violet-dark rounded-xl p-5'>
      <div className='flex-1 relative flex justify-center h-96'>
        <Image
          src={product.image}
          fill
          className='object-cover p-7'
          alt='Imagem do Produto'
        />
      </div>
      <Specifications product={product} />
    </div>
  ) : null
}