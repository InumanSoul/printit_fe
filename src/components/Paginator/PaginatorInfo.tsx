import React from 'react'

interface PaginatorInfoProps {
  from: number;
  to: number;
  total: number;
}

const PaginatorInfo = ({ from, to, total }: PaginatorInfoProps) => {
  return (
    <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
      Mostrando 
      <span className="font-semibold text-neutral-900 dark:text-white mx-1">
        {from}-{to}
      </span> 
      de 
      <span className="font-semibold text-neutral-900 dark:text-white ms-1">
        {total}
      </span>
    </span>
  )
}

export default PaginatorInfo