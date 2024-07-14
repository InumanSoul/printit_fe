import React from 'react'
import { EyeIcon } from '@heroicons/react/24/outline'
import { Customers } from '../_domain/types'
import Link from 'next/link'

interface CustomersListProps {
  customers: Customers[]
}

const CustomersList = ({ customers }: CustomersListProps) => {
  
  return (
    <ul className='w-full flex flex-col space-y-2'>
      {
        customers?.map((customer: Customers) => (
          <li key={customer.id} className='border border-neutral-300 dark:border-neutral-700 px-3 py-2 rounded-lg flex items-center justify-between'>
            <div className='flex-1'>
              <h5 className='font-semibold dark:text-neutral-50'>{customer.name}</h5>
              <p className='text-neutral-500'>{customer.email}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Link href={`/customers/${customer.id}`} className='hover:bg-neutral-100 p-5 rounded-full'>
                <EyeIcon className='size-5 text-neutral-500'/>
              </Link>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default CustomersList