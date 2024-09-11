import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ChartBarIcon, CubeIcon, UserGroupIcon, Cog8ToothIcon, HomeIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'

const MainNavigation = () => {

  const menuItems = [
    { href: '/dashboard', icon: HomeIcon, text: 'Inicio' },
    { href: '/sales', icon: ArrowUpCircleIcon, text: 'Ingresos' },
    { href: '/expenses', icon: ArrowDownCircleIcon, text: 'Gastos' },
    { href: '/quotes', icon: DocumentChartBarIcon, text: 'Cotizaciones' },
    { href: '/contacts', icon: UserGroupIcon, text: 'Contactos' },
    { href: '/products', icon: CubeIcon, text: 'Productos' },
    { href: '/reports', icon: ChartBarIcon, text: 'Reportes' },
    { href: '/preferences/categories', icon: Cog8ToothIcon, text: 'Preferencias' },
  ]
  
  return (
    <nav className="mt-2 px-3">
      <ul>
        {
          menuItems.map((item, index) => (
            <li key={index}>
              <MenuItem href={item.href}>
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