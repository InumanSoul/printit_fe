import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import PageContent from './PageContent'
import Button from '@/components/Button/Button'

const Expenses = () => {
  return (
    <Container>
      <PageTitle>Gastos</PageTitle>

      <Button href='/expenses/new' variant='primary' className='w-fit'>Registrar gasto</Button>

      <PageContent />
    </Container>
  )
}

export default Expenses