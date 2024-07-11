
import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const Products = () => {
  return (
    <Container>
      <PageTitle>Reportes</PageTitle>

      <div className="mt-4 flex gap-2">
        <div className='flex items-center justify-center p-6 border rounded-xl'>
          <p className='text-gray-500'>Reporte de ventas</p>
        </div>
        <div className='flex items-center justify-center p-6 border rounded-xl'>
          <p className='text-gray-500'>Historial de ventas</p>
        </div>
        <div className='flex items-center justify-center p-6 border rounded-xl'>
          <p className='text-gray-500'>Facturas emitidas</p>
        </div>
        <div className='flex items-center justify-center p-6 border rounded-xl'>
          <p className='text-gray-500'>Ventas por clientes</p>
        </div>
      </div>
    </Container>
  )
}

export default Products