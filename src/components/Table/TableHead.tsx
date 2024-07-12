import React from 'react'

interface TableHeadProps {
  columns: string[]
}

const TableHead = ({ columns }: TableHeadProps) => {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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