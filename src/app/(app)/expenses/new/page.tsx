import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

const NewPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-6'>
          <div className='border border-dashed text-neutral-700 border-neutral-400 bg-neutral-100 rounded-lg p-5 h-full flex items-center justify-center'>
            <div className='flex flex-col gap-2 items-center'>
              <DocumentArrowUpIcon className='size-10'/>
              <p>Arrastra tus documento aqui</p>
            </div>
          </div>
        </div>
        <div className='col-span-6 space-y-3'>
          <div className='flex flex-col gap-2'>
            <InputLabel>Fecha</InputLabel>
            <Input type='date' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Proveedor</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Categoria</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Importe</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Descripción</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex gap-2 mt-5'>
            <Button href='/expenses' variant='secondary'>Cancelar</Button>
            <Button variant='secondary'>Guardar y nuevo</Button>
            <Button variant='primary'>Guardar y salir</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NewPage