import React from 'react'

const CustomersListSkeleton = () => {
  return (
    <div className='w-full space-y-3'>
      <div className='w-full h-10 bg-gray-200 animate-pulse rounded-lg'></div>
      <div className='w-full h-10 bg-gray-200 animate-pulse rounded-lg'></div>
      <div className='w-full h-10 bg-gray-200 animate-pulse rounded-lg'></div>
      <div className='w-full h-10 bg-gray-200 animate-pulse rounded-lg'></div>
    </div>
  )
}

export default CustomersListSkeleton