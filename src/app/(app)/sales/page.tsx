import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Sales = () => {
  return (
    <Container>
      <PageTitle>Ventas</PageTitle>

      <div className="mt-4">
        <p className="text-gray-500">
          Listado de ventas
        </p>
      </div>
    </Container>
  )
}

export default Sales