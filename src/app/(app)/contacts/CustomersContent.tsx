'use client'
import React, { useState } from 'react'
import { useGetCustomers } from './_domain/customers'
import EmptyState from '@/components/EmptyState/EmptyState'
import Paginator from '@/components/Paginator/Paginator'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import ContactsListSkeleton from './components/ContactsListSkeleton'
import ContactsList from './components/ContactsList'
import Select from 'react-select'

const customerTypes = [
  { value: 'all', label: 'Todos' },
  { value: 'customers', label: 'Clientes' },
  { value: 'suppliers', label: 'Proveedores' },
]

const orderOptions = [
  { value: 'a-z', label: 'A-Z Ascendente' },
  { value: 'z-a', label: 'Z-A Descendente' },
]

const CustomersContent = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { customers, isLoading, error }: any = useGetCustomers({ pageNumber: pageNumber })
  
  return (
    <>
      {isLoading && <ContactsListSkeleton />}
      {
        !isLoading && customers?.length === 0 && (
          <EmptyState type='empty' title='No hay contactos registrados' description='Agrega un contacto para comenzar a vender'/>
        )
      }
      {
        !isLoading && error && (
          <EmptyState type='error' title='Error' description='Ocurrió un error al cargar los contactos'/>
        )
      }
      {
        (!isLoading && customers?.data?.length > 0) &&
        <>
          <div className='grid grid-cols-12 my-10'>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Total</h5>
              <p className="text-xl dark:text-gray-100">{customers?.total}</p>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Nuevos</h5>
              <p className="text-xl dark:text-gray-100">123</p>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Ultima actualización</h5>
              <p className="text-xl dark:text-gray-100">14 de Julio</p>
            </div>
          </div>

          <div className='flex gap-4 mb-4'>
            <div className='flex-1'>
              <InputLabel>Buscar</InputLabel>
              <Input 
                type='search'
                placeholder='Buscar cliente'
                className='w-full'
              />
            </div>
            <div className='w-48'>
              <InputLabel>Filtrar</InputLabel>
              <Select 
                options={customerTypes}
              />
            </div>
            <div className='w-48'>
              <InputLabel>Ordenar por</InputLabel>
              <Select options={orderOptions}/>
            </div>
          </div>

          <ContactsList 
            contacts={customers?.data} 
          />
          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label='Customer paginate'>
            <PaginatorInfo
              from={customers?.from}
              to={customers?.to}
              total={customers?.total}
            />
            <Paginator setter={setPageNumber} items={customers?.links} />
          </nav>
        </>
      }
    </>
  )
}

export default CustomersContent