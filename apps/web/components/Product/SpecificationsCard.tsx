import type { CardProps } from "./types";

export function SpecificationsCard({ label, size }: CardProps) {
  return (
    <span
      className={`p-2 ${size === "lg" ? "w-2/3" : "w-1/3"} text-neutral-300 font-semibold bg-violet-dark/75 border border-white/10 backdrop-blur-lg saturate-150 rounded`}
    >
      {label}
    </span>
  )
}
