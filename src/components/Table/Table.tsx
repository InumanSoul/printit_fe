import React from 'react'
import TableHead from './TableHead'

interface TableDataProps extends React.HTMLAttributes<HTMLTableElement>{
  data: {
    columns: string[],
  },
  children: React.ReactNode
}

const Table = ({ children, data, ...props }: TableDataProps) => {
  return (
    <div className='relative overflow-x-auto border rounded-xl'>
      <table {...props} className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <TableHead columns={data.columns} />
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export default Table