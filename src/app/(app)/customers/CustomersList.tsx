'use client'
import React from 'react'
import { useGetCustomers } from './_domain/customers'
import EmptyState from '@/components/EmptyState/EmptyState'
import { Customers } from './_domain/types'
import { EyeIcon } from '@heroicons/react/24/outline'

const CustomersList = () => {
  const { customers, isLoading, error }: any = useGetCustomers()

  return (
    <>
      {isLoading && <p className='text-lg text-center text-gray-400 animate-pulse'>Cargando...</p>}
      {
        !isLoading && customers?.length === 0 && (
          <EmptyState type='empty' title='No hay clientes' description='Crea un cliente para comenzar a vender'/>
        )
      }
      {
        (!isLoading && customers?.length > 0)&&
        <ul className='w-full flex flex-col space-y-2'>
          {
            customers?.map((customer: Customers) => (
              <li key={customer.id} className='border px-3 py-2 rounded-lg flex items-center justify-between'>
                <div className='flex-1'>
                  <h5 className='font-semibold'>{customer.name}</h5>
                  <p className='text-gray-500'>{customer.email}</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <a href={`/customers/${customer.id}`} className='hover:bg-gray-100 p-5 rounded-full'>
                    <EyeIcon className='size-5 text-gray-500'/>
                  </a>
                </div>
              </li>
            ))
          }
        </ul>
      }
      {
        !isLoading && error && (
          <EmptyState type='error' title='Error' description='Ocurrió un error al cargar los clientes'/>
        )
      }
    </>
  )
}

export default CustomersList