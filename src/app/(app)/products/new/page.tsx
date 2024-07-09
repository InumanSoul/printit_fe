import Container from '@/components/Container/Container'
import React from 'react'
import ProductForm from './ProductForm'

const NewProduct = () => {
  return (
    <Container>
      <div className='w-full md:w-4/12 mx-auto'>
        <div className='mb-5'>
        <a href='/products' className='rounded-lg p-2 border flex w-fit mb-5'>Volver</a>
        <h2 className='text-2xl font-semibold'>Crear producto</h2>
        </div>
        <ProductForm />
      </div>
    </Container>
  )
}

export default NewProduct