'use client'

import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import React, { useState } from 'react'
import Card from '../components/Card'

const Login = () => {
  const [email, setEmail] = useState('')

  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <Card>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center dark:text-neutral-50'>Olvidaste tu contraseña</h2>
          <form>
            <div className='mb-2 flex flex-col'>
              <InputLabel>Email</InputLabel>
              <Input type='email' value={email} required/>
            </div>
            <div className='mb-2'>
              <button className='bg-rose-500 text-white rounded-lg p-2 w-full'>Enviar link de recuperación</button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Login