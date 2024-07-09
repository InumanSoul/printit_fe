'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import { useGetCustomer } from '../_domain/customers'

const CustomerDetail = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { customer, error, isLoading } = useGetCustomer(id)
  return (
    <Container>
      <a href='/customers' className="border rounded-lg p-2 flex w-fit mb-4">Volver</a>
      {isLoading && <p className='text-lg text-center text-gray-400 animate-pulse'>Cargando...</p>}
      {
        !isLoading && customer && (
          <div className='border rounded-2xl p-5 max-w-xl mx-auto'>
            <h2 className='text-2xl font-bold'>{customer?.name}</h2>
            <p>{ customer.address }</p>
            <p>{ customer.email }</p>
            <p>{ customer.phone }</p>
          </div>
        )
      }
      {
        !isLoading && error && (
          <p>Ocurrió un error al cargar el cliente</p>
        )
      }
    </Container>
  )
}

export default CustomerDetail