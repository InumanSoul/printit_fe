import React from 'react'

const InvoicePreview = () => {
  return (
    <div className='w-full p-7 rounded-xl bg-neutral-100 dark:bg-neutral-900 h-full'>
      <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>Resumen de la venta</h3>
      <div className='bg-white dark:bg-neutral-800 min-h-96 rounded shadow-sm p-5 space-y-5'>
        <div className='pb-4 border-b flex justify-between items-center dark:text-neutral-100'>
          <p className='font-semibold'>
            Nombre Empresa
          </p>
          <p>
            INV-120354
          </p>
        </div>
        <div className='border-b'>
          <p className='text-sm text-neutral-500'>Cliente</p>
          <h5 className='text-lg font-semibold mb-4 dark:text-neutral-50'>Nombre del Cliente</h5>
        </div>
        <div className='py-4 border-b'>
          <div className='flex justify-between items-center font-semibold'>
            <div>
              <p className='text-sm text-neutral-500'>Cantidad</p>
            </div>
            <div>
              <p className='text-sm text-neutral-500'>Descripción</p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm text-neutral-500'>1</p>
            </div>
            <div>
              <p className='text-sm text-neutral-500'>Producto ejemplo</p>
            </div>
          </div>
        </div>

        <div className='space-y-2 text-right w-full flex flex-col items-end'>
          <div className='flex gap-2 text-neutral-500'>
            <p>Subtotal:</p>
            <p>$1200</p>
          </div>
          <div className='flex gap-2 text-neutral-500'>
            <p>Descuento:</p>
            <p>$100</p>
          </div>
          <div className='flex gap-2 text-lg dark:text-neutral-50'>
            <p className='font-bold'>Total:</p>
            <p className='font-bold'>$1100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview