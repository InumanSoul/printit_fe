/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useProducts } from '../_domain/products'
import Link from 'next/link'

const ProductsList = () => {
  const { products }: any = useProducts()

  return (
    <ul className='w-full mx-auto flex flex-col space-y-2'>
      {
        products?.data?.map((product: any) => (
          <li key={product.id} className='border px-3 py-2 rounded-lg flex items-center justify-between hover:bg-gray-50'>
            <Link href={`/products/${product.id}`}>
              <div className='flex gap-3 items-center justify-between'>
                <div className='size-20 rounded-lg bg-gray-200 overflow-hidden'>
                  <img src={product.image} alt={product.name} className='w-full h-full object-fill'/>
                </div>
                <div className='flex-1'>
                  <h5 className='font-semibold text-lg'>{product.name}</h5>
                  <p className='text-gray-400 text-sm'>{product.description}</p>
                  <p className='text-gray-800'>
                    Precio: <span className='font-semibold'>{product.price}</span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductsList