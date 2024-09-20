import Link from 'next/link'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger' | 'link' | 'ghost-link' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  href?: string
  target?: string
}

const Button = ({ children, variant, disabled, href, target, size, ...props }: ButtonProps) => {
  const buttonVariants = {
    'primary': 'bg-rose-500 disabled:hover:bg-rose-500 hover:bg-rose-600 hover:active:bg-rose-700 text-white dark:bg-rose-700 dark:hover:bg-rose-800 dark:hover:active:bg-rose-900 dark:text-neutral-50',
    'link': 'bg-transparent disabled:hover:text-transparent hover:text-rose-600 hover:active:text-rose-700 text-rose-500',
    'ghost-link': 'bg-transparent disabled:hover:text-transparent hover:text-rose-900 hover:active:text-rose-900 dark:text-neutral-50 dark:hover:text-neutral-200',
    'secondary': 'bg-transparent disabled:hover:bg-transparent hover:bg-neutral-50 hover:active:bg-neutral-100 text-neutral-800 border rounded-lg p-2 flex dark:border-neutral-600 dark:text-neutral-50 dark:hover:bg-neutral-800 dark:hover:active:bg-neutral-900',
    'danger': 'bg-red-500 disabled:hover:bg-red-500 hover:bg-red-600 hover:active:bg-red-700 text-white rounded-lg p-2 flex',
    'neutral': 'bg-neutral-100 disabled:hover:bg-neutral-400 hover:bg-neutral-200 hover:active:bg-neutral-300 text-neutral-950 rounded-lg p-2 flex'
  }

  const buttonSizes = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-3',
    lg: 'py-4 px-4 text-lg'
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