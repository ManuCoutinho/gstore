'use client'
import Link from "next/link";
import { Logo } from "../../shared/Logo";
import { CartIcon } from "../../shared/CartIcon";
import { ROUTES } from "@/constants/routes";

export function Header(): JSX.Element {
  const qty = 0
  return (
    <div
      className='flex flex-col h-20'
      style={{
        background: "linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)"
      }}
    >
      <div className='flex-1 container flex flex-col justify-center'>
        <div className='flex justify-between items-center'>
          <Logo />
          <Link href={ROUTES.CART} className="hover:brightness-150 transition-all rounded-full focus:ring ring-violet-950 focus-visible:outline-none">
            <CartIcon itemQty={qty} />
          </Link>
        </div>
      </div>
      <div className='h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20'></div>
    </div>
  )
}