
import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import CustomersList from './CustomersList'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Clientes",
  description: "Listado de clientes de Printit.",
};

const Customers = () => {
  return (
    <Container>
      <PageTitle>Clientes</PageTitle>

      <a href='/customers/new' className="bg-pink-500 text-white rounded-lg p-2 flex w-fit mb-4">Crear cliente</a>

      <CustomersList />
    </Container>
  )
}

export default Customers