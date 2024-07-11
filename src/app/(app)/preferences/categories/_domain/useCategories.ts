'use client'

import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import useSWR from 'swr'

export const useGetCategories = () => {
  const { data, error, isLoading } = useSWR('/api/categories', () => fetcher('/api/categories'), { revalidateOnFocus: false })

  return {
    categories: data,
    error,
    isLoading,
  }
}