import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Account = () => {
  return (
    <Container>
      <PageTitle>Mi cuenta</PageTitle>

      <div className="mt-4">
        <p className="text-gray-500">
          Detalles de la cuenta
        </p>
      </div>
    </Container>
  )
}

export default Account