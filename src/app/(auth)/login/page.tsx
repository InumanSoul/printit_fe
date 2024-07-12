import React from 'react'
import LoginForm from './LoginForm'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <div className='bg-white rounded-lg shadow-sm border border-gray-300 py-2 w-full'>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center'>Inicia sesión</h2>
          <LoginForm />
        </div>
      </div>
      <p>¿No tienes cuenta?<Link href='/register' className='text-pink-500 text-center ml-1'>Regístrate</Link></p>
    </div>
  )
}

export default Login