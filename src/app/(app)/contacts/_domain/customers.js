'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'

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

export const useCreateCustomer = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()

  const createCustomer = async ({ setErrors, ...props }) => {
    await csrf()

    setErrors([])

    axios
      .post('/api/customers', props)
      .then(() => {
        router.push('/customers')
      })
      .catch(error => {
          setErrors(error.response.data.errors)
      })
  }

  return {
    createCustomer,
  }
}