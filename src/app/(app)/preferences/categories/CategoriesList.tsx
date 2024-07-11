'use client'

import React from 'react'
import { useGetCategories } from './_domain/useCategories'

const CategoriesList = () => {
  const { categories, isLoading, error }: any = useGetCategories()

  return isLoading ? <div>Cargando...</div> : (
    <div className='mt-5'>
      <ul className='border rounded-lg'>
        {categories?.map((category: any) => (
          <li key={category.id} className='border-b last-of-type:border-b-0 py-3 px-2'>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList