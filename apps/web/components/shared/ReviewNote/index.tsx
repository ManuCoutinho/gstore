import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"
import type { ReviewNoteProps } from "./types"

export function ReviewNote({ size = 12, rate }: ReviewNoteProps): JSX.Element {
  function parseRateToStars(nota: number) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        stars.push(<IconStarFilled size={size} key={i} />)
      } else if (nota >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={size} key={i} />)
      } else {
        stars.push(<IconStar size={size} key={i} />)
      }
    }
    return stars
  }

  return (
    <div className='flex gap-0.5 text-emerald-400'>{parseRateToStars(rate)}</div>
  )
}
