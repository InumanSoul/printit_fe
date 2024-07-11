'use client'
import { EyeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useProducts } from '../_domain/products'

const ProductsList = () => {
  const { products }: any = useProducts()

  return (
    <ul className='w-full flex flex-col space-y-2'>
      {
        products?.map((product: any) => (
          <li key={product.id} className='border px-3 py-2 rounded-lg flex items-center justify-between'>
            <div className='flex-1'>
              <h5 className='font-semibold'>{product.name}</h5>
              <p className='text-gray-400 text-sm'>{product.description}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <a href={`/products/${product.id}`} className='hover:bg-gray-100 p-5 rounded-full'>
                <EyeIcon className='size-5 text-gray-500'/>
              </a>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ProductsList