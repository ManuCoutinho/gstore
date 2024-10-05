import type { ButtonProps } from "./types";

export function Button({ children, icon:Icon, className, ...rest }: ButtonProps ) {
  return (
    <button className={`flex-1 button ${className}`}  {...rest}>
      <Icon size={20} />
      <span>{children}</span>
    </button>
  )
}