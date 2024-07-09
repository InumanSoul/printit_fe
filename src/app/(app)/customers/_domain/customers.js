'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'

export const useGetCustomers = () => {
  const { data, error, isLoading } = useSWR('/api/customers', () => fetcher('/api/customers'), { revalidateOnFocus: false })

  return {
    customers: data,
    error,
    isLoading,
  }
}

export const useGetCustomer = (id) => {
  const { data, error, isLoading } = useSWR(['/api/customer', id], () => fetcher(`/api/customers/${id}`), { revalidateOnFocus: false })

  return {
    customer: data,
    error,
    isLoading,
  }
}