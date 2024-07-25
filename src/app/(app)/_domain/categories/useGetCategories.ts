'use client'

import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import useSWR from 'swr'

export const useGetCategories = ({ category_type }: { category_type: 'product' | 'expense' | 'all'}) => {
  const query = category_type !== 'all' ? `?category_type=${category_type}` : ''

  const { data, error, isLoading } = useSWR(`/api/categories${query}`, fetcher, { revalidateOnFocus: false })

  return {
    categories: data,
    errorCategories: error,
    isLoadingCategories: isLoading,
  }
}