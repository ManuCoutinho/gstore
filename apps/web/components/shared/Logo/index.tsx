import { ROUTES } from "@/constants/routes"
import Image from "next/image"
import Link from "next/link"

export function Logo(): JSX.Element {
  return (
    <Link href={ROUTES.HOME} className='flex items-center gap-3 focus-visible:outline-none focus:ring ring-violet-950'>
      <Image src='/logo.png' height={60} width={60} alt='logo alien' />
      <Image src='/logo-text.png' width={230} height={0} alt='logo gam3r.store' />
    </Link>
  )
}
