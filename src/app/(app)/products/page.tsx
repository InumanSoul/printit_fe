
import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Products = () => {
  return (
    <Container>
      <PageTitle>Productos</PageTitle>

      <a href='/products/new' className="bg-pink-500 text-white rounded-lg p-2 w-full">Agregar producto</a>

      <div className="mt-4">
        <p className="text-gray-500">
          Listado de productos
        </p>
      </div>
    </Container>
  )
}

export default Products