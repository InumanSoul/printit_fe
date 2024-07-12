import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import React from 'react'

const NewPage = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-6'>
          <div className='border border-dashed border-gray-500 bg-gray-100 rounded-lg p-5'>
            <p>Arrastra tus documento aqui</p>
          </div>
        </div>
        <div className='col-span-6'>
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