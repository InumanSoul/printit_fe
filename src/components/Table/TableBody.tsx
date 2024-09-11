import React from 'react'
import Button from '../Button/Button'

export interface TableBodyProps {
  rows: any[]
}

const TableBody = ({ rows }: TableBodyProps) => {
  return (
    <tbody>
      {
        rows.map((row) => (
          <tr key={row.id} className='bg-white border-b last-of-type:border-b-0 dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-4'>
              {row.id}
            </td>
            <td 
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              <div className='flex items-center gap-2'>
                <div className='size-10 rounded-full bg-gray-200'></div>
                <div>
                  <h4 className='font-semibold'>
                    {row.client}
                  </h4>
                  <p className='text-gray-500'>4687201</p>
                </div>
              </div>
            </td>
            <td className='px-6 py-4'>
              <span className='text-gray-900 dark:text-gray-100'>{row.date}</span>
            </td>
            <td className='px-6 py-4'>
              <span className='text-gray-900 dark:text-gray-100'>{row.amount}</span>
            </td>
            <td className='px-6 py-4 flex gap-2'>
              <Button variant='secondary'>
                Editar
              </Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default TableBody