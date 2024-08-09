'use client'

import useSWR from 'swr'
import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const useExpenses = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([])
  const { data: expenses, error: allExpensesError, isLoading: allExpensesLoading } = useSWR('/api/expenses', fetcher, { revalidateOnFocus: false })

  const createExpense = async (props: any) => {
    await axios.get('/sanctum/csrf-cookie')

    try {
      await axios.post('/api/expenses', props)
      router.push('/expenses')
    } catch (error: any) {
      setErrors(error.response.data.errors)
    }
  }

  return {
    expenses,
    allExpensesError,
    allExpensesLoading,
    createExpense,
    errors,
  }
}

export const useGetExpense = (id: number) => {
  const { data: expense, error: singleExpenseError, isLoading: singleExpenseLoading } = useSWR(id ? `/api/expenses/${id}` : null, fetcher, { revalidateOnFocus: false })

  return {
    expense,
    error: singleExpenseError,
    isLoading: singleExpenseLoading,
  }
}