'use client'

import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { usePathname } from 'next/navigation'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, BuildingStorefrontIcon, CubeIcon, UserGroupIcon } from '@heroicons/react/16/solid'

const MainNavigation = () => {
  const pathname = usePathname()
  
  return (
    <nav className="font-semibold text-gray-800 mt-2">
      <ul>
        <li>
          <MenuItem href="/sales" active={pathname === '/sales'}>
            <ArrowUpCircleIcon className='size-4'/>
            Ingresos
          </MenuItem>
        </li>
        <li>
          <MenuItem href="/expenses" active={pathname === '/expenses'}>
            <ArrowDownCircleIcon className='size-4'/>
            Gastos
          </MenuItem>
        </li>
        <li>
          <MenuItem href="/company" active={pathname === '/company'}>
            <BuildingStorefrontIcon className='size-4'/>
            Empresa
          </MenuItem>
        </li>
        <li>
          
          <MenuItem href="/customers" active={pathname === '/customers'}>
            <UserGroupIcon className='size-4'/>
            Clientes
          </MenuItem>
        </li>
        <li>
          <MenuItem href="/products" active={pathname === '/products'}>
            <CubeIcon className='size-4'/>
            Productos
          </MenuItem>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation