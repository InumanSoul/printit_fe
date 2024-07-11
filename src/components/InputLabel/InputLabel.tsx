import React from 'react'

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return (
    <label
      {...props}
      className='text-sm font-semibold text-gray-700'
    >
      { children }
    </label>
  )
}

export default InputLabel