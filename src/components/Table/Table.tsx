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
    <div className='relative overflow-x-auto border border-neutral-300 dark:border-neutral-700 rounded-lg'>
      <table {...props} className='w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400'>
        <TableHead columns={data.columns} />
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  )
}

export default Table