import Container from '@/components/Container/Container'
import React from 'react'

const NewCustomer = () => {
  return (
    <Container>
      <div className='w-5/12 mx-auto'>
        <div className='mb-5'>
        <a href='/customers' className='rounded-lg p-2 border flex w-fit'>Volver</a>
        <h2 className='text-2xl font-semibold'>Crear cliente</h2>
        </div>
        <form>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Nombre</label>
            <input type='text' className='border border-gray-300 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Email</label>
            <input type='email' className='border border-gray-300 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Teléfono</label>
            <input type='tel' className='border border-gray-300 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Dirección</label>
            <input type='text' className='border border-gray-300 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2'>
            <button className='bg-pink-500 text-white rounded-lg p-2 flex w-fit'>Crear cliente</button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewCustomer