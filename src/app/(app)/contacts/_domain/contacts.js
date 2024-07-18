'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'

export const useGetContacts = ({ pageNumber }) => {
  const { data, error, isLoading } = useSWR(`/api/contacts?page=${pageNumber}`, fetcher, { revalidateOnFocus: false })

  return {
    contacts: data,
    error,
    isLoading,
  }
}

export const useGetContact = (id) => {
  const { data, error, isLoading } = useSWR(['/api/contacts', id], () => fetcher(`/api/contacts/${id}`), { revalidateOnFocus: false })

  return {
    customer: data,
    error,
    isLoading,
  }
}

export const useDeleteContact = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()

  const deleteContact = async (id) => {
    await csrf()

    axios
      .delete(`/api/contacts/${id}`)
      .then(() => {
        router.push('/contacts')
      })
  }

  return {
    deleteContact,
  }
}

export const useCreateContact = () => {
  const csrf = () => axios.get('/sanctum/csrf-cookie')
  const router = useRouter()

  const createContact = async ({ setErrors, ...props }) => {
    await csrf()

    setErrors([])

    axios
      .post('/api/contacts', props)
      .then(() => {
        router.push('/contacts')
      })
      .catch(error => {
          setErrors(error.response.data.errors)
      })
  }

  return {
    createContact,
  }
}