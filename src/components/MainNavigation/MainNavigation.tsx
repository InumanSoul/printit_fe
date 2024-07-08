'use client'

import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { usePathname } from 'next/navigation'

const MainNavigation = () => {
  const pathname = usePathname()
  
  return (
    <nav className="font-semibold text-gray-800 mt-2">
      <ul>
        <li>
          <MenuItem href="/sales" active={pathname === '/sales'}>Ingresos</MenuItem>
        </li>
        <li>
          <MenuItem href="/expenses" active={pathname === '/expenses'}>Gastos</MenuItem>
        </li>
        <li>
          <MenuItem href="/company" active={pathname === '/company'}>Empresa</MenuItem>
        </li>
        <li>
          <MenuItem href="/customers" active={pathname === '/customers'}>Clientes</MenuItem>
        </li>
        <li>
          <MenuItem href="/products" active={pathname === '/products'}>Productos</MenuItem>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation