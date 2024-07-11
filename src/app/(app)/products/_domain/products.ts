'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useProducts = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])

  const { data: products, error: allProductsError, isLoading: allProductsLoading } = useSWR('/api/products', () => fetcher('/api/products'), { revalidateOnFocus: false })

  const createCustomer = async (props: any) => {
    await axios.get('/sanctum/csrf-cookie')

    setErrors([])

    try {
      await axios.post('/api/products', props)
      router.push('/products')
    } catch (error: any) {
      setErrors(error.response.data.errors)
    }
  }

  return {
    products,
    allProductsError,
    allProductsLoading,
    createCustomer,
    errors,
  }
}

export const useGetProduct = (id: number) => {
  const { data: customer, error: singleCustomerError, isLoading: singleCustomerLoading } = useSWR(id ? `/api/products/${id}` : null, () => fetcher(`/api/products/${id}`), { revalidateOnFocus: false })

  return {
    customer,
    error: singleCustomerError,
    isLoading: singleCustomerLoading,
  }
}