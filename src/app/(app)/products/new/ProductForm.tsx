'use client'

import Checkbox from '@/components/Checkbox/Checkbox'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import React from 'react'

const ProductForm = () => {
  const [isCompound, setIsCompound] = React.useState(false)

  return (
    <form>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <Input type='text' name='name' required/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor="price">Precio</InputLabel>
        <Input type='text' name='price' required/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor="description">Descripción</InputLabel>
        <Input type='text' name='description' required/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor="quantity">Cantidad</InputLabel>
        <Input type='number' name='quantity' required/>
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel htmlFor='barcode'>Código de barras</InputLabel>
        <Input type='text' name='barcode' required/>
      </div>
      <div className='mb-2 flex flex-col'>
        <Checkbox label='Producto compuesto' checked={isCompound} onChange={setIsCompound} required/>
      </div>
      {
        isCompound && (
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='items'>Items</InputLabel>
            <Input type='text' name='items' required/>  
          </div>
        )
      }
      <div className='mb-2'>
        <button className='bg-rose-500 text-white rounded-lg p-2 flex w-fit'>Guardar producto</button>
      </div>
    </form>
  )
}

export default ProductForm