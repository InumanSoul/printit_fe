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
        className={`border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2 ${props.className}`}
      />
      {
        props.icon && props.icon
      }
    </>
  )
}

export default Input