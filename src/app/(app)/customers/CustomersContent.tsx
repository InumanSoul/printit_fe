'use client'
import React from 'react'
import { useGetCustomers } from './_domain/customers'
import EmptyState from '@/components/EmptyState/EmptyState'
import CustomersListSkeleton from './components/CustomersListSkeleton'
import CustomersList from './components/CustomersList'

const CustomersContent = () => {
  const { customers, isLoading, error }: any = useGetCustomers()

  return (
    <>
      {isLoading && <CustomersListSkeleton />}
      {
        !isLoading && customers?.length === 0 && (
          <EmptyState type='empty' title='No hay clientes' description='Crea un cliente para comenzar a vender'/>
        )
      }
      {
        !isLoading && error && (
          <EmptyState type='error' title='Error' description='Ocurrió un error al cargar los clientes'/>
        )
      }
      {
        (!isLoading && customers?.length > 0)&&
        <CustomersList customers={customers} />
      }
    </>
  )
}

export default CustomersContent