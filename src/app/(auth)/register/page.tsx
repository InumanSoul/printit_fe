import Link from 'next/link'
import React from 'react'
import Card from '../components/Card'
import RegisterForm from './RegisterForm'

const Register = () => {

  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <Card>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center dark:text-neutral-50'>Crea tu cuenta</h2>
          <RegisterForm />
        </div>
      </Card>
      <p>Ya tengo cuenta<Link href='/login' className='text-rose-500 text-center ml-1'>Inicia sesión</Link></p>
    </div>
  )
}

export default Register