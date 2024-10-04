import type { TagProps } from "./types"

export function Tag({ outlined = false, icon: Icon, label }: TagProps): JSX.Element {
  return (
    <div
      className={`
                flex items-center gap-2 self-start py-1 px-4
                rounded-full text-xs uppercase
                ${
                  outlined
                    ? "border border-violet-500 text-white"
                    : "bg-gradient-to-r from-violet-600 to-violet-700"
                }
                
            `}
    >
      <Icon size={15} />
      <span>{label}</span>
    </div>
  )
}
