'use client'
import React from 'react'
import PaginatorAction from './PaginatorAction'
import PaginatorItem from './PaginatorItem'

export interface PagesProps {
  label: string,
  active: boolean,
}

const Paginator = ({ items, setter }: { items: PagesProps[], setter?: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
      {
        items?.map((item) => (
          <>
            {
              item?.label?.includes('Previous') && <PaginatorAction setter={setter} key={item.label} position='left' label='Anterior' />
            }
            {
              item?.label?.includes('Next') && <PaginatorAction setter={setter} key={item.label} position='right' label='Siguiente' />
            }
            {
              !item?.label?.includes('Previous') && !item?.label?.includes('Next') && 
              <PaginatorItem setter={setter} key={item.label} label={item.label} active={item.active} />
            }
          </>
        ))
      }
    </ul>
  )
}

export default Paginator