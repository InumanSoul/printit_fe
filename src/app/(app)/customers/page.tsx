import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import { Metadata } from 'next';
import Button from '@/components/Button/Button';
import CustomersContent from './CustomersContent';

export const metadata: Metadata = {
  title: "Clientes",
  description: "Listado de clientes.",
};

const Customers = () => {

  return (
    <Container>
      <PageTitle>Clientes</PageTitle>

      <Button href='/customers/new' variant='primary' className='w-fit'>Crear cliente</Button>
      <div className='w-full md:w-6/12 mx-auto'>
        <CustomersContent />
      </div>
    </Container>
  )
}

export default Customers