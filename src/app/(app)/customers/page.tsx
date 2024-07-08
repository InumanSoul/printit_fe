
import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Customers = () => {
  return (
    <Container>
      <PageTitle>Clientes</PageTitle>

      <a href='/customers/new' className="bg-pink-500 text-white rounded-lg p-2 w-full">Crear cliente</a>

      <div className="mt-4 h-56 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          No hay clientes registrados
        </p>
      </div>
    </Container>
  )
}

export default Customers