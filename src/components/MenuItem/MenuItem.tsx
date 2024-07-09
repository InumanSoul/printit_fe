import React from 'react'

interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode,
  active?: boolean
}

const MenuItem = ({ children, active, ...props }: MenuItemProps ) => {
  const activeClass = 'text-pink-500 bg-pink-500/10 hover:text-pink-500';
  const inactiveClass = 'text-gray-600 hover:bg-black/5 hover:text-gray-800';

  return (
    <a {...props} className={`w-full flex items-center gap-1 py-2 px-4 duration-200 ease-in-out ${active ? activeClass : inactiveClass}`}>
      { children }
    </a>
  )
}

export default MenuItem