import Container from '@/components/Container/Container'
import React from 'react'

const NewProduct = () => {
  return (
    <Container>
      <div className='w-full md:w-4/12 mx-auto'>
        <div className='mb-5'>
        <a href='/products' className='rounded-lg p-2 border flex w-fit mb-5'>Volver</a>
        <h2 className='text-2xl font-semibold'>Crear producto</h2>
        </div>
        <form>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Nombre</label>
            <input type='text' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Descripción</label>
            <input type='text' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Precio</label>
            <input type='text' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700'>Cantidad</label>
            <input type='number' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <label className='text-sm font-semibold text-gray-700 flex gap-2'>
              <input type='checkbox' className='bg-pink-500' required/>
              Producto compuesto
            </label>
          </div>
          <div className='mb-2'>
            <button className='bg-pink-500 text-white rounded-lg p-2 flex w-fit'>Guardar producto</button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewProduct