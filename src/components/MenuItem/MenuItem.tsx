import React from 'react'

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode,
  active?: boolean
}

const MenuItem = ({ children, active, ...props }: MenuItemProps ) => {
  const activeClass = 'text-pink-500 bg-pink-500/10';

  return (
    <a {...props} className={`hover:bg-black/5 hover:text-pink-500 w-full flex py-2 px-4 duration-200 ease-in-out ${active && activeClass}`}>
      { children }
    </a>
  )
}

export default MenuItem