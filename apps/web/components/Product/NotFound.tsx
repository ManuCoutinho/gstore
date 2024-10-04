import Link from "next/link";
import { IconDevicesPcOff } from "@tabler/icons-react";
import type { ProductNotFoundProps } from "./types";

export function ProductNotFound({ noBackButton }: ProductNotFoundProps): JSX.Element {
  return (
    <div className='flex-1 flex flex-col justify-center items-center text-violet-300'>
      <IconDevicesPcOff size={180} stroke={0.5} />
      <span className='text-violet-300 font-light'>Produto não encontrado</span>
      {!noBackButton && (
        <Link href='/' className='button bg-violet-700 text-white mt-5'>
          Voltar
        </Link>
      )}
    </div>
  )
}