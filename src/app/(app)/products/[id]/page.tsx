'use client'

import Container from '@/components/Container/Container'
import React from 'react'
import Button from '@/components/Button/Button'
import { useGetProduct } from '../_domain/products'
import { parseDatabaseBoolean } from '@/utils'
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/outline'
import InputLabel from '@/components/InputLabel/InputLabel'
import Input from '@/components/Input/Input'
import Link from 'next/link'
import DetailSkeleton from './DetailSkeleton'

const ProductDetail = ({ params }: { params: { id: number} }) => {
  const { id } = params
  const { product, error, isLoading } = useGetProduct(id)
  return (
    <Container>
        <Link href='/products' className="border rounded-lg p-2 flex w-fit mb-4">Volver</Link>
        {isLoading && <DetailSkeleton />}
        {
          !isLoading && product && (
            <div className='border rounded-2xl max-w-xl mx-auto'>
              <div className='p-5'>
                <div className='w-full h-48 rounded-lg bg-gray-200 overflow-hidden mb-5 mx-auto'>
                  <img src={product.image} alt={product.name} className='w-full h-full object-cover'/>
                </div>
                <h2 className='text-2xl font-bold'>{product?.name}</h2>
                <p className='text-gray-500'>{ product.description }</p>

                <div className='flex flex-col gap-2 my-2'>
                  <InputLabel>Precio</InputLabel>
                  <Input value={product.price} disabled />
                </div>

                <div className='flex flex-col gap-2 my-2'>
                  <InputLabel>Código de barras</InputLabel>
                  <Input value={product.barcode || ''} disabled />
                </div>

                <div className='flex gap-2 my-2 items-center'>
                  <p>Inventario:</p>
                  { 
                    parseDatabaseBoolean(product.inventory) ? 
                      (<CheckBadgeIcon className='size-5 text-green-500' />) : 
                      (<XCircleIcon className='size-5 text-red-500' />)
                  }
                </div>
              </div>
              <div className='border-t p-5 flex gap-2'>
                <Button variant='secondary'>Editar</Button>
                <Button variant='danger'>Eliminar</Button>
              </div>
            </div>
          )
        }
        {
          !isLoading && error && (
            <p>Ocurrió un error al cargar el cliente</p>
          )
        }
    </Container>
  )
}

export default ProductDetail