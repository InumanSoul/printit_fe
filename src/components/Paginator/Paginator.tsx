import React from 'react'
import PaginatorAction from './PaginatorAction'
import PaginatorItem from './PaginatorItem'

export interface PagesProps {
  label: string,
  active: boolean
}

export interface PaginatorProps {
  label: string,
  items: PagesProps[],
}

const Paginator = ({ label, items }: PaginatorProps) => {
  return (
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label={label}>
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Mostrando <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <PaginatorAction position='left' label='Anterior' />
        {
          items?.map((item) => (
            <PaginatorItem key={item.label} label={item.label} active={item.active} />
          ))
        }
        <PaginatorAction position='right' label='Siguiente' />
      </ul>
    </nav>
  )
}

export default Paginator