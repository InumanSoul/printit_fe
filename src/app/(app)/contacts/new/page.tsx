'use client'

import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import React, { useState } from 'react'
import { useCreateCustomer } from '../_domain/customers'
import InputError from '@/components/InputError/InputError'
import Button from '@/components/Button/Button'

const NewCustomer = () => {
  const { createCustomer } = useCreateCustomer()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    phone: [],
    email: [],
    address: [],
    document: []
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      document: formData.get('document') as string,
    }

    createCustomer({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      document: data.document,
      setErrors
    })
    setIsSubmitting(false)
  }

  return (
    <Container>
      <div className='w-full md:max-w-lg mx-auto'>
        <div className='mb-5'>
        <Button href='/contacts' variant='secondary' className='w-fit mb-5'>Volver</Button>
        <h2 className='text-2xl font-semibold dark:text-neutral-50'>Registrar contacto</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='name'>Nombre</InputLabel>
            <Input name='name' type='text' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input name='email' type='email' required/>
            <InputError messages={errors.email} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='phone'>Teléfono</InputLabel>
            <Input name='phone' type='tel' required/>
            <InputError messages={errors.phone} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='address'>Dirección</InputLabel>
            <Input name='address' type='text' required/>
            <InputError messages={errors.address} className='mt-2'/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='document'>Documento</InputLabel>
            <Input name='document' type='text' required/>
            <InputError messages={errors.document} className='mt-2'/>
          </div>
          <div className='mb-2'>
            <Button variant='primary' disabled={isSubmitting} type='submit'>
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewCustomer