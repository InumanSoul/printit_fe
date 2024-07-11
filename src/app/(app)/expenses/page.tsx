import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Expenses = () => {
  return (
    <Container>
      <PageTitle>Gastos</PageTitle>

      <div className="mt-4">
        <p className="text-gray-500">
          Listado de gastos
        </p>
      </div>
    </Container>
  )
}

export default Expenses