import { IconMoodSad, IconChevronDown, IconMoodEmpty, IconMoodCrazyHappy } from "@tabler/icons-react"
import type { PriceSeriesProps } from "./types"

export function PriceSeries({ product }: PriceSeriesProps): JSX.Element {
    const {
      minorPrice: min,
      majorPrice: max,
      promotionalPrice: current,
      commonPrice: average
    } = product

    let percentage
    if (current > average) {
      percentage = ((current - average) / (max - average)) * 50 + 50
    } else {
      percentage = (1 - (average - current) / (average - min)) * 50
    }

    return (
      <div className='flex flex-col border border-white/10 p-7 rounded-xl gap-6 bg-violet-dark'>
        <div className='flex items-center gap-2'>
          {percentage >= 40 && percentage < 60 ? (
            <IconMoodEmpty size={40} stroke={1.5} className='text-yellow-500' />
          ) : percentage >= 60 ? (
            <IconMoodSad size={40} stroke={1.5} className='text-red-500' />
          ) : (
            <IconMoodCrazyHappy size={40} stroke={1.5} className='text-green-500' />
          )}
          <div className='flex flex-col'>
            <div className='flex gap-1.5'>
              <span className="text-neutral-100">O preço do produto está </span>
              <div className='font-bold'>
                {percentage >= 40 && percentage < 60 ? (
                  <span className='text-yellow-500'>na média</span>
                ) : percentage >= 60 ? (
                  <span className='text-red-500'>acima da média</span>
                ) : (
                  <span className='text-green-500'>abaixo da média</span>
                )}
              </div>
            </div>
            <div className='text-zinc-400 text-sm'>
              Com base no preço dos últimos <span className='text-neutral-100'>30 dias</span>.
            </div>
          </div>
        </div>

        <div
          className='
                    flex items-center h-2 bg-gradient-to-r 
                    from-green-500 via-yellow-400 to-red-500
                    rounded-full relative border-2 border-black
                '
        >
          <div
            role='progressbar'
            aria-label="progress-bar-price"
            className='absolute flex justify-center items-center h-4 w-4 bg-neutral-200 rounded-full'
            style={{
              left: `${percentage > 100 ? 100 : percentage}%`
            }}
          >
            <IconChevronDown size={20} className='absolute text-white -mt-8' />
            <div className='h-2.5 w-2.5 bg-black rounded-full'></div>
          </div>
        </div>
      </div>
    )
}