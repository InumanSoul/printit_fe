import React from 'react'
import LoginForm from './LoginForm'
import Link from 'next/link'
import Card from '../components/Card'

const Login = () => {
  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <Card>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center dark:text-neutral-50'>Inicia sesión</h2>
          <LoginForm />
        </div>
      </Card>
      <p className='dark:text-neutral-50'>¿No tienes cuenta?<Link href='/register' className='text-rose-500 text-center ml-1'>Regístrate</Link></p>
    </div>
  )
}

export default Login