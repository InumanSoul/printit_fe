import React from 'react'

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

const TableRow = ({ children, ...props }: TableRowProps) => {
  return (
    <tr {...props} className='bg-white border-b last-of-type:border-b-0 dark:bg-gray-800 dark:border-gray-700'>
      { children }
    </tr>
  )
}

export default TableRow