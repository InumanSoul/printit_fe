import Container from '@/components/Container/Container'
import React from 'react'

const Account = () => {
  return (
    <Container>
      <div className='w-full md:w-5/12 mx-auto'>
        <div className='border-b py-5'>
          <h2 className='text-3xl font-bold'>Nombre Usuario</h2>
          <p className='text-gray-500'>Nombre empresa</p>
        </div>
        <div className="py-5">
          <div className='flex'>
            <p className='font-semibold'>Email</p>
            <p className='ml-2'>
              <a href='mailto:example@example.com'>
                example@example.com
              </a>
            </p>
          </div>
          <div className='flex'>
            <p className='font-semibold'>Dirección</p>
            <p className='ml-2'>
              Main Street 123
            </p>
          </div>
        </div>
        <div className='bg-pink-50 border border-pink-300 rounded-xl p-5'>
          <h4 className='text-xl font-bold'>Nombre Plan</h4>
          <p className='text-gray-500'>Vence el 25/10/28</p>
        </div>
      </div>
    </Container>
  )
}

export default Account