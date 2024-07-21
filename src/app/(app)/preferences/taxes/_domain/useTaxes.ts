'use client'

import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import useSWR from 'swr'

export type TaxType = {
  data: {
    id: number;
    name: string;
    rate: number;
  }
  [key: string]: any;
}

export const useGetTaxes = (): {
  taxes: any;
  error: any;
  isLoading: boolean;
} => {
  const { data, error, isLoading } = useSWR('/api/taxes', fetcher, { revalidateOnFocus: false })

  return {
    taxes: data,
    error,
    isLoading,
  }
}