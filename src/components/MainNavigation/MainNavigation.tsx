'use client'

import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { usePathname } from 'next/navigation'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'

const MainNavigation = () => {
  const pathname = usePathname()

  const menuItems = [
    { href: '/sales', icon: ArrowUpCircleIcon, text: 'Ingresos' },
    { href: '/expenses', icon: ArrowDownCircleIcon, text: 'Gastos' },
    { href: '/reports', icon: ChartBarIcon, text: 'Reportes' },
    { href: '/contacts', icon: UserGroupIcon, text: 'Contactos' },
    { href: '/products', icon: CubeIcon, text: 'Productos' },
    { href: '/preferences', icon: Cog8ToothIcon, text: 'Preferencias' },
  ]
  
  return (
    <nav className="mt-2 px-3">
      <ul>
        {
          menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href} active={pathname.includes(item.href)}>
                {<item.icon className='size-5'/>}
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