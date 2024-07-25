'use client'

import React from 'react'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import { ArrowLeftIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'
import InvoicePreview from './InvoicePreview'
import SearchableInput from '@/components/SearchableInput/SearchableInput'

const NewSale = () => {
  return (
		<Container>
			<div className='grid grid-cols-12'>
				<div className='col-span-5'>
          <Button variant='secondary' href='/sales' className='w-fit'>
            <ArrowLeftIcon className='size-5 mr-2' />
            Volver 
          </Button>
					<form className='mt-8'>
            <div className='mb-8'>
            <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>Detalles de la venta</h3>
            <SearchableInput
              label='Cliente'
              selectedItem={null}
              value=''
              handler={() => {}}
              data={[]}
              emptyAction={{
                href: '/contacts/new',
                label: 'Nuevo cliente',
                title: 'No se encontraron resultados'
              }}
            />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold mb-4 dark:text-neutral-50'>Productos</h3>
              <div>
              <SearchableInput
                label='Producto'
                selectedItem={null}
                value=''
                handler={() => {}}
                data={[]}
                emptyAction={{
                  href: '/products/new',
                  label: 'Nuevo producto',
                  title: 'No se encontraron resultados'
                }}
              />
              </div>
              <Button variant='link' size='sm' className='w-fit mt-4'>
                <PlusIcon className='size-5 mr-2' />
                Nuevo item
              </Button>
            </div>

            <div className='flex gap-2 border-t dark:border-neutral-700 mt-5'>
              <Button variant='secondary' className='w-fit mt-4'>
                Guardar borrador
              </Button>
              <Button variant='primary' className='w-fit mt-4'>
                Registrar venta
              </Button>
            </div>
					</form>
				</div>
        <div className='col-span-6 col-start-7'>
          <InvoicePreview />
        </div>
			</div>
		</Container>
	);
}

export default NewSale