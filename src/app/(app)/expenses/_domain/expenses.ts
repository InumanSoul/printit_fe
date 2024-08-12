'use client'

import useSWR from 'swr'
import { fetcher } from '@/app/(app)/_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CreateExpenseProps, Expenses, ExpenseItem } from './expenses.types'

export const useExpenses = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([])
  const { data: expenses, error: allExpensesError, isLoading: allExpensesLoading } = useSWR<Expenses>('/api/expenses', fetcher, { revalidateOnFocus: false })

  const createExpense = async ({ data, redirect }: CreateExpenseProps) => {
    await axios.get('/sanctum/csrf-cookie')

    axios.post('/api/expenses', data)
    .then(() => {
      redirect && router.push('/expenses')
    })
    .catch(error => {
      setErrors(error.response.data.errors)
    })
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
  const { data: expense, error: singleExpenseError, isLoading: singleExpenseLoading } = useSWR<ExpenseItem>(id ? `/api/expenses/${id}` : null, fetcher, { revalidateOnFocus: false })

  return {
    expense,
    error: singleExpenseError,
    isLoading: singleExpenseLoading,
  }
}