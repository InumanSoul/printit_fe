'use client'
import React, { useState } from 'react'
import { useGetContacts } from './_domain/contacts'
import EmptyState from '@/components/EmptyState/EmptyState'
import Paginator from '@/components/Paginator/Paginator'
import PaginatorInfo from '@/components/Paginator/PaginatorInfo'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import ContactsListSkeleton from './components/ContactsListSkeleton'
import ContactsList from './components/ContactsList'
import Select from 'react-select'
import { formatDateTime, SelectTheme } from '@/utils'

const contactsTypes = [
  { value: 'all', label: 'Todos' },
  { value: 'customer', label: 'Clientes' },
  { value: 'supplier', label: 'Proveedores' },
]

const ContactsContent = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [contactsType, setContactsType] = useState(contactsTypes[0])
  const { contacts, isLoading, error }: any = useGetContacts({ 
    pageNumber: pageNumber,
    contactsType: contactsType.value,
    querySearch: ''
   })
  

  console.log(contacts?.data?.data);
  
  return (
    <>
      {isLoading && <ContactsListSkeleton />}
      {
        !isLoading && contacts?.length === 0 && (
          <EmptyState type='empty' title='No hay contactos registrados' description='Agrega un contacto para comenzar a vender'/>
        )
      }
      {
        !isLoading && error && (
          <EmptyState type='error' title='Error' description='Ocurrió un error al cargar los contactos'/>
        )
      }
      {
        (!isLoading && contacts?.data?.data?.length > 0) &&
        <>
          <div className='grid grid-cols-12 my-10'>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Total</h5>
              <p className="text-xl dark:text-gray-100">{contacts?.data?.total}</p>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Nuevos</h5>
              <p className="text-xl dark:text-gray-100">{contacts?.recently_added}</p>
            </div>
            <div className='col-span-12 md:col-span-4'>
              <h5 className='text-sm text-neutral-500'>Ultima actualización</h5>
              <p className="text-xl dark:text-gray-100">{formatDateTime(contacts?.last_update)}</p>
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
                options={contactsTypes}
                defaultValue={contactsTypes[0]}
                theme={SelectTheme}
                onChange={(option: any) => setContactsType(option)}
              />
            </div>
          </div>

          <ContactsList 
            contacts={contacts?.data?.data} 
          />
          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label='Customer paginate'>
            <PaginatorInfo
              from={contacts?.data?.from}
              to={contacts?.data?.to}
              total={contacts?.data?.total}
            />
            <Paginator setter={setPageNumber} items={contacts?.data?.links} />
          </nav>
        </>
      }
    </>
  )
}

export default ContactsContent