import { HeaderItem } from "./Item"
import { ROUTES } from "@/constants/routes"

export function CheckoutHeader() {

  return (
    <div className='flex justify-center items-center gap-6 h-20 select-none'>
      <HeaderItem step={"cart"} title='Carrinho' index={1} path={ROUTES.CART} />
      <div className='bg-zinc-300 h-px w-12'></div>
      <HeaderItem step={"payment"} title='Pagamento' index={2} path={ROUTES.PAYMENT} />
    </div>
  )
}
