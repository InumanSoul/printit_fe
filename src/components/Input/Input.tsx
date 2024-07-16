import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  className?: string
  icon?: React.ReactNode
}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        {...props}
        className={`border border-neutral-400 dark:text-neutral-50 dark:border-neutral-700 rounded-lg w-full dark:bg-neutral-800 p-2 disabled:text-neutral-500 disabled:border-neutral-300 disabled:bg-neutral-100 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2 ${props.className}`}
      />
      {
        props.icon && props.icon
      }
    </>
  )
}

export default Input