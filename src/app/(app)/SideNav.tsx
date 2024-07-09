'use client'

import React, { useState } from 'react'
import MainNavigation from '@/components/MainNavigation/MainNavigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useFloating } from '@floating-ui/react'

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    placement: 'right-start',
  })

  return (
    <aside className="h-dvh w-64 border-r">
      <Image 
        className="flex mt-5 ml-4 mb-6 dark:invert"
        src="/printit.svg"
        width={30} 
        height={50} 
        alt="Printit Logo"
        priority  
      />
      <div className="flex flex-col px-4 mb-5">
        <button type='button' ref={refs.setReference} onClick={() => setIsOpen(!isOpen)} className="border rounded-lg p-2 w-full flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <div className="size-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-semibold">Usuario</p>
              <p className="text-xs text-gray-400">Empresa</p>
            </div>
          </div>
          <ChevronRightIcon className="size-5 text-gray-800"/>
        </button>
      </div>
      { 
        <div ref={refs.setFloating} className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-150 absolute top-0 left-0 bg-white border rounded-lg`} style={floatingStyles}>
          <ul>
            <li>
              <a href="/account" className="px-4 py-2 flex w-full items-center border-b hover:bg-black/5">
                Mi cuenta
              </a>
              <a href="/login" className="px-4 py-2 flex w-full items-center text-pink-500 hover:bg-black/5">
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      }

      <MainNavigation/>
    </aside>
  )
}

export default SideNav