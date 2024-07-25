'use client'

import React from 'react'
import { useGetCategories } from '../../_domain/categories/useGetCategories'

const CategoriesList = () => {
  const { categories, isLoading, error }: any = useGetCategories({
    category_type: 'all'
  })

  return isLoading ? <div>Cargando...</div> : (
    <div className='mt-5'>
      <ul className='border dark:border-neutral-700 rounded-lg'>
        {categories?.map((category: any) => (
          <li key={category.id} className='border-b dark:border-neutral-700 last-of-type:border-b-0 py-3 px-2 dark:text-neutral-50'>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList