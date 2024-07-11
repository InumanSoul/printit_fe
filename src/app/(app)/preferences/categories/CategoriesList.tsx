'use client'

import React from 'react'
import { useGetCategories } from './_domain/useCategories'

const CategoriesList = () => {
  const { categories, isLoading, error }: any = useGetCategories()

  return isLoading ? <div>Cargando...</div> : (
    <div className='mt-5'>
      <ul>
        {categories?.map((category: any) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList