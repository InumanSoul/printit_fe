'use client'

import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import axios from '@/configs/axios'
import useSWR, { useSWRConfig } from 'swr'

export const useGetCategories = ({ category_type }: { category_type: 'product' | 'expense' | 'all'}) => {
  const query = category_type !== 'all' ? `?category_type=${category_type}` : ''

  const { data, error, isLoading } = useSWR(`/api/categories${query}`, fetcher, { revalidateOnFocus: false })

  return {
    categories: data,
    errorCategories: error,
    isLoadingCategories: isLoading,
  }
}

interface CreateCategory {
  name: string
  category_type: 'product' | 'expense'
  setErrors: React.Dispatch<React.SetStateAction<string[]>>
}

export const useCreateCategory = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie') 

  const createCategory = async ({ setErrors, ...props }: CreateCategory) => {
    await csrf()

    setErrors([])

    axios
      .post('/api/categories', props)
      .then((res) => {
        return res.data
      })
      .catch(error => {
        setErrors(error.response.data.errors)
      })
  }

  return {
    createCategory,
  }
}