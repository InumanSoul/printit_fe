import React from 'react'

interface TableHeadProps {
  columns: string[]
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className='text-xs border-b border-neutral-300 dark:border-neutral-700 text-neutral-700 bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-400'>
      <tr>
        {
          columns.map((column) => (
            <th scope='col' className='px-6 py-3' key={column}>
              {column}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}

export default TableHead