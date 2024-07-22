'use client'

import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import InputError from '@/components/InputError/InputError'
import Button from '@/components/Button/Button'
import Link from 'next/link'
import { ArrowPathIcon } from '@heroicons/react/16/solid'
import InputLabel from '@/components/InputLabel/InputLabel'
import Input from '@/components/Input/Input'

const LoginForm = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/sales'
  })
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [shouldRemember, setShouldRemember] = React.useState(false)
  const [errors, setErrors] = React.useState(
    {
      email: [],
      password: [],
    }
  )
  const [status, setStatus] = React.useState('')

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    })
  }

  return (
    <form onSubmit={submitForm} className='space-y-3'>
      <div className='flex flex-col'>
        <InputLabel>Email</InputLabel>
        <Input type='email' value={email} onChange={e => setEmail(e.target.value)} required/> 
        <InputError messages={errors.email} className='mt-2'/>
      </div>
      <div className='flex flex-col'>
        <InputLabel>Contraseña</InputLabel>
        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} required/>
        <InputError messages={errors.password} className='mt-2'/>
      </div>
      <div className='flex flex-col'>
        <label className='text-sm font-semibold text-neutral-500 flex gap-2'>
          <input type='checkbox' className='bg-rose-500' defaultChecked={shouldRemember} onChange={e => setShouldRemember(!shouldRemember)}/>
          Recordarme
        </label>
      </div>
      <Button variant='primary' className='w-full' disabled={status === 'loading'}>
        {status === 'loading' ? <ArrowPathIcon className='size-4 animate-spin' /> : 'Iniciar sesión'}
      </Button>
      <Link href='/forgot-password' className='text-rose-500 text-center mt-3 w-full block'>¿Olvidaste tu contraseña?</Link>
    </form>
  )
}

export default LoginForm