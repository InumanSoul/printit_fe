import React from 'react'

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <tr {...props} className='bg-white hover:bg-neutral-50 border-b last-of-type:border-b-0 dark:bg-neutral-950 dark:hover:bg-neutral-900 dark:border-neutral-700'>
      { children }
    </tr>
  )
}

export default TableRow