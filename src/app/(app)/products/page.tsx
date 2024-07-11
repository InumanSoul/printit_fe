
import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import ProductContent from './ProductsContent'
import Button from '@/components/Button/Button'

const Products = () => {
  return (
    <Container>
      <PageTitle>Productos</PageTitle>

      <Button href='/products/new' variant='primary' className='w-fit'>Agregar producto</Button>

      <ProductContent />
    </Container>
  )
}

export default Products