'use client'

import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { usePathname } from 'next/navigation'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, BuildingStorefrontIcon, ChartBarIcon, CubeIcon, UserGroupIcon } from '@heroicons/react/16/solid'

const MainNavigation = () => {
  const pathname = usePathname()

  const menuItems = [
    { href: '/sales', icon: ArrowUpCircleIcon, text: 'Ingresos' },
    { href: '/expenses', icon: ArrowDownCircleIcon, text: 'Gastos' },
    { href: '/reports', icon: ChartBarIcon, text: 'Reportes' },
    { href: '/customers', icon: UserGroupIcon, text: 'Clientes' },
    { href: '/products', icon: CubeIcon, text: 'Productos' },
  ]
  
  return (
    <nav className="font-semibold text-gray-800 mt-2">
      <ul>
        {
          menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href} active={pathname.includes(item.href)}>
                {<item.icon className='size-4'/>}
                {item.text}
              </MenuItem>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MainNavigation