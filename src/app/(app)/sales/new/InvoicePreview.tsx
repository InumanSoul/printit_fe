import React from 'react'

const InvoicePreview = () => {
  return (
    <div className='w-full p-7 rounded-xl bg-gray-100 h-full'>
      <h3 className='text-xl font-semibold mb-4'>Resumen de la venta</h3>
      <div className='bg-white min-h-96 rounded shadow-sm p-5 space-y-5'>
        <div className='pb-4 border-b flex justify-between items-center'>
          <p className='font-semibold'>
            Nombre Empresa
          </p>
          <p>
            INV-120354
          </p>
        </div>
        <div className='border-b'>
          <p className='text-sm text-gray-500'>Cliente</p>
          <h5 className='text-lg font-semibold mb-4'>Nombre del Cliente</h5>
        </div>

        <div className='space-y-2 text-right w-full flex flex-col items-end'>
          <div className='flex gap-2 text-gray-500'>
            <p>Subtotal:</p>
            <p>$1200</p>
          </div>
          <div className='flex gap-2 text-gray-500'>
            <p>Descuento:</p>
            <p>$100</p>
          </div>
          <div className='flex gap-2 text-lg'>
            <p className='font-bold'>Total:</p>
            <p className='font-bold'>$1100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview