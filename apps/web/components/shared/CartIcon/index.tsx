import { IconShoppingCart } from "@tabler/icons-react";
import { CartIconProps } from "./types";

export function CartIcon({ itemQty = 0}: CartIconProps) {
  return (
    <div className='flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative'>
      <IconShoppingCart size={30} stroke={1.3} className="text-white" />
      <div className='absolute top-2 right-1 bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
        {itemQty}
      </div>
    </div>
  )
}