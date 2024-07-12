import Paginator from '@/components/Paginator/Paginator'
import { EyeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Customers } from '../_domain/types'
import Link from 'next/link'

interface CustomersListProps {
  customers: Customers[]
}

const mockPages = [
  { label: '1', active: true },
  { label: '2', active: false },
  { label: '3', active: false },
  { label: '4', active: false },
  { label: '5', active: false },
]


const CustomersList = ({ customers }: CustomersListProps) => {
  return (
    <>
      <ul className='w-full flex flex-col space-y-2'>
        {
          customers?.map((customer: Customers) => (
            <li key={customer.id} className='border px-3 py-2 rounded-lg flex items-center justify-between'>
              <div className='flex-1'>
                <h5 className='font-semibold'>{customer.name}</h5>
                <p className='text-gray-500'>{customer.email}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <Link href={`/customers/${customer.id}`} className='hover:bg-gray-100 p-5 rounded-full'>
                  <EyeIcon className='size-5 text-gray-500'/>
                </Link>
              </div>
            </li>
          ))
        }
      </ul>
      <Paginator label='Example' items={mockPages} />
    </>
  )
}

export default CustomersList