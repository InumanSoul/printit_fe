import React from 'react';
import Link from 'next/link';

interface MenuItemProps {
  children: React.ReactNode,
  active?: boolean
  href: string,
}

const MenuItem = ({ children, active, href }: MenuItemProps ) => {
  const activeClass = 'text-pink-500 bg-pink-500/10 hover:text-pink-500';
  const inactiveClass = 'text-gray-600 hover:bg-black/5 hover:text-gray-800';

  return (
    <Link href={href} className={`w-full flex items-center gap-1 py-2 px-4 duration-200 ease-in-out ${active ? activeClass : inactiveClass}`}>
      { children }
    </Link>
  )
}

export default MenuItem