import Link from "next/link"
import { selectedBg, selectedColor } from "./functions/header-utils"
import type { HeaderItemsProps } from "../types"

export function HeaderItem({ index, path, step, title }: HeaderItemsProps): JSX.Element {
  return (
    <Link
      href={path}
      className={`
                    flex items-center gap-2 cursor-pointer
                    ${selectedColor(step)}
                `}
    >
      <span
        className={`
                        flex justify-center items-center 
                        text-xs font-bold w-5 h-5 rounded-full 
                        ${selectedBg(step)}
                    `}
      >
        {index}
      </span>
      <span>{title}</span>
    </Link>
  )
}
