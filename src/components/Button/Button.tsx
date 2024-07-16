import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger' | 'link'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
  target?: string
}

const Button = ({ children, variant, disabled, href, target, size, ...props }: ButtonProps) => {
  const buttonVariants = {
    primary: 'bg-pink-500 disabled:hover:bg-pink-500 hover:bg-pink-600 hover:active:bg-pink-700 text-white dark:bg-pink-700 dark:hover:bg-pink-800 dark:hover:active:bg-pink-900 dark:text-neutral-50',
    link: 'bg-transparent disabled:hover:text-transparent hover:text-pink-600 hover:active:text-pink-700 text-pink-500',
    secondary: 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border rounded-lg p-2 flex dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-800',
    danger: 'bg-red-500 disabled:hover:bg-red-500 hover:bg-red-600 hover:active:bg-red-700 text-white rounded-lg p-2 flex',
  }

  const buttonSizes = {
    sm: 'py-1 px-1 text-sm',
    md: 'py-2 px-2',
    lg: 'py-4 px-3 text-lg'
  }

  const classes = `rounded-lg ${buttonSizes[size || 'md']} flex items-center justify-center duration-200 ease-in-out active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none ${buttonVariants[variant]} ${props.className}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        { children }
      </Link>
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