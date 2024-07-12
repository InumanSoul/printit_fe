import React from 'react'

export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const TableCell = ({ children, ...props }: TableCellProps) => {
  return (
    <td {...props} className='px-6 py-4'>
      {children}
    </td>
  )
}

export default TableCell