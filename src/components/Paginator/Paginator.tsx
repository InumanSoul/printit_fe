import React from 'react'
import PaginatorAction from './PaginatorAction'
import PaginatorItem from './PaginatorItem'

export interface PagesProps {
  label: string,
  active: boolean,
}

const Paginator = ({ items, setter }: { items: PagesProps[] | undefined, setter?: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
    {
      items?.map((item) => {
        if (item?.label?.includes('Previous')) {
          return <PaginatorAction setter={setter} key={item.label} position='left' label='Anterior' />;
        } else if (item?.label?.includes('Next')) {
          return <PaginatorAction setter={setter} key={item.label} position='right' label='Siguiente' />;
        } else {
          return <PaginatorItem setter={setter} key={item.label} label={item.label} active={item.active} />;
        }
      })
    }
    </ul>
  )
}

export default Paginator