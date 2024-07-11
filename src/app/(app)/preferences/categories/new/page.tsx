import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputError from '@/components/InputError/InputError'
import InputLabel from '@/components/InputLabel/InputLabel'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'

const NewCategory = () => {
  return (
    <Container>
      <div className='md:max-w-lg mx-auto'>
        <Button href='/preferences/categories' variant='secondary' className='w-fit mb-8'>Volver</Button>
        <PageTitle>Crear categoria</PageTitle>
        <form>
          <InputLabel>Nombre</InputLabel>
          <Input type='text' placeholder='Nombre de la categoría' required />
          <InputError messages={[]} />
          <Button type='submit' variant='primary' className='w-full mt-5'>Guardar</Button>
        </form>
      </div>
    </Container>
  )
}

export default NewCategory