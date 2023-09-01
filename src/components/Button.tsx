import { ReactNode } from "react"

interface ButtonProps {
  onClickButton: (prop?: string) => void
  children?: ReactNode
  size: "small" | "medium" | "large"
  primary: boolean
  available: boolean
  type?: 'submit' | 'reset' | 'button'
}

const Button = ({
  onClickButton,
  size,
  primary,
  children,
  available,
  type
}: ButtonProps) => {
  return (
    <button
    type={type || 'button'}
      className={`button button__${size} ${primary ? "button__primary" : ""} ${
        available ? "" : "button__disable"
      }`}
      onClick={() => onClickButton()}
    >
      {children}
    </button>
  )
}

export default Button
