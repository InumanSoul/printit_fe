import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Company = () => {
  return (
    <Container>
      <PageTitle>Empresa</PageTitle>

      <div className="mt-4">
        <p className="text-gray-500">
          Detalles de la Empresa
        </p>
      </div>
    </Container>
  )
}

export default Company