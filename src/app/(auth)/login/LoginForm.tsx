'use client'

import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import InputError from '@/components/InputError/InputError'

const LoginForm = () => {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/account'
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
    <form onSubmit={submitForm}>
      <div className='mb-2 flex flex-col'>
        <label className='text-sm font-semibold text-gray-700'>Email</label>
        <input type='email' value={email} onChange={e => setEmail(e.target.value)} className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
        <InputError messages={errors.email} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <label className='text-sm font-semibold text-gray-700'>Contraseña</label>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
        <InputError messages={errors.password} className='mt-2'/>
      </div>
      <div className='mb-2 flex flex-col'>
        <label className='text-sm font-semibold text-gray-700 flex gap-2'>
          <input type='checkbox' className='bg-pink-500' checked={shouldRemember} onChange={e => setShouldRemember(!shouldRemember)}/>
          Recordarme
        </label>
      </div>
      <div className='mb-2'>
        <button className='bg-pink-500 text-white rounded-lg p-2 w-full'>Iniciar sesión</button>
      </div>
      <a href='/forgot-password' className='text-pink-500 text-center mt-2'>¿Olvidaste tu contraseña?</a>
    </form>
  )
}

export default LoginForm