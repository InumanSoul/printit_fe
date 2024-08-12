'use client'

import React from 'react'
import Button from '@/components/Button/Button'
import Avatar from '@/components/Avatar/Avatar'
import Modal from '@/components/Modal/Modal'
import { useDeleteContact, useGetContact } from '@/app/(app)/contacts/_domain/contacts'

const CustomerDetailModal = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { customer, error, isLoading } = useGetContact(id)
  const { deleteContact } = useDeleteContact()

  const handleDelete = () => {
    try {
      deleteContact(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal title='Contact'>
      <div className='w-full md:max-w-3xl mx-auto'>
        <Button href='/contacts' variant='secondary' className='w-fit mb-5'>Volver</Button>
        {isLoading && <p className='text-lg text-center text-neutral-400 animate-pulse'>Cargando...</p>}
        {
          !isLoading && customer && (
            <div className='border dark:text-neutral-50 dark:border-neutral-700 rounded-2xl max-w-xl mx-auto'>
              <Avatar initials={customer?.initials} name={customer?.name} size='xl' className='mx-5 my-5'/>
              <div className='p-5'>
                <h2 className='text-2xl font-bold'>{customer?.name}</h2>
                <p>{ customer.address }</p>
                <p>{ customer.email }</p>
                <p>{ customer.phone }</p>
              </div>
              <div className='border-t dark:border-neutral-700 p-5 flex gap-2'>
                <Button variant='secondary'>Editar</Button>
                <Button variant='danger' onClick={handleDelete}>Eliminar</Button>
              </div>
            </div>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el cliente</p>
          )
        }
      </div>
    </Modal>
  )
}

export default CustomerDetailModal