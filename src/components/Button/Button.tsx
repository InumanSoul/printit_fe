import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  href?: string
  target?: string
}

const Button = ({ children, variant, disabled, href, target, ...props }: ButtonProps) => {
  const buttonVariants = {
    primary: 'bg-pink-500 disabled:hover:bg-pink-500 hover:bg-pink-600 hover:active:bg-pink-700 text-white',
    secondary: 'bg-transparent disabled:hover:bg-transparent hover:bg-gray-50 hover:active:bg-gray-100 text-gray-800 border rounded-lg p-2 flex',
    danger: 'bg-red-500 disabled:hover:bg-red-500 hover:bg-red-600 hover:active:bg-red-700 text-white rounded-lg p-2 flex',
  }
  const classes = `rounded-lg p-2 flex items-center justify-center duration-200 ease-in-out active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none ${buttonVariants[variant]} ${props.className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        { children }
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      {...props}
      className={classes}
    >
      { children }
    </button>
  )
}

export default Button