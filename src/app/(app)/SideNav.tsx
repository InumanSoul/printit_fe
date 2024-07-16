'use client'

import React, { useState } from 'react'
import MainNavigation from '@/components/MainNavigation/MainNavigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useFloating } from '@floating-ui/react'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth({ middleware: 'guest' })
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    placement: 'right-start',
  })

  return (
    <aside className="h-dvh w-full md:w-72 bg-white border-r border-neutral-200 dark:border-neutral-700 sticky top-0 dark:bg-neutral-950">
      <Link href={user ? '/sales' : '/'}>
        <Image 
          className="flex mt-5 ml-4 mb-6"
          src="/printit.svg"
          width={30} 
          height={50} 
          alt="Printit Logo"
          priority  
        />
      </Link>
      <div className="flex flex-col px-4 mb-5">
        <button
          type='button'
          ref={refs.setReference}
          onClick={() => setIsOpen(!isOpen)}
          className="border border-neutral-300 dark:border-neutral-600 rounded-lg p-2 w-full flex justify-between items-center gap-2"
        >
          <div className="flex gap-2">
            <div className="size-6 bg-neutral-200 dark:bg-neutral-600 rounded-full"></div>            
            <p className='dark:text-neutral-100'>{ user?.name || 'Nombre' }</p>
          </div>
          <ChevronRightIcon className="size-5 text-neutral-800 dark:text-neutral-100"/>
        </button>
      </div>
      { 
        <div 
          ref={refs.setFloating} 
          className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-150 shadow-lg min-w-40 bg-white border rounded-lg z-50`} 
          style={floatingStyles}>
          <ul>
            <li>
              <Link href="/account" className="px-4 py-2 flex w-full items-center border-b hover:bg-black/5">
                Mi cuenta
              </Link>
              <Link href="/company" className="px-4 py-2 flex w-full items-center border-b hover:bg-black/5">
                Empresa
              </Link>
              <button type="button" onClick={logout} className="px-4 py-2 flex w-full items-center text-pink-500 hover:bg-black/5">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      }

      <MainNavigation/>
    </aside>
  )
}

export default SideNav