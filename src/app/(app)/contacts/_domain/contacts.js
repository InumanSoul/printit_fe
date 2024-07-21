'use client'

import useSWR from 'swr'
import { fetcher } from '../../_infraestructure/fetcher'
import axios from '@/configs/axios'
import { useRouter } from 'next/navigation'

export const useGetContacts = ({ pageNumber, contactsType, querySearch }) => {
  const queryParams = {};
  
  if (contactsType !== undefined && contactsType !== 'all') {
    queryParams['contacts_type'] = contactsType;
  }
  if (pageNumber !== undefined) {
    queryParams['page'] = pageNumber;
  }
  if (querySearch !== undefined && querySearch !== '' && querySearch.length > 2) {
    queryParams['query'] = querySearch;
  }

  const queryString = Object.keys(queryParams)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  
  const { data, error, isLoading } = useSWR(`/api/contacts?${queryString}`, fetcher, { revalidateOnFocus: false })

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