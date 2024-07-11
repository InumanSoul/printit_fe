import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import CustomersList from './CustomersList'
import { Metadata } from 'next';
import Button from '@/components/Button/Button';

export const metadata: Metadata = {
  title: "Clientes",
  description: "Listado de clientes de Printit.",
};

const Customers = () => {

  return (
    <Container>
      <PageTitle>Clientes</PageTitle>

      <Button href='/customers/new' variant='primary' className='w-fit'>Crear cliente</Button>
      <div className='w-full md:w-4/12 mx-auto'>
        <CustomersList />
      </div>
    </Container>
  )
}

export default Customers