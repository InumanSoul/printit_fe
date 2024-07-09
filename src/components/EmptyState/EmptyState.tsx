import { FaceFrownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'

const EmptyState = ({ title, description, type } : { title: string, description: string, type: string }) => {
  return (
    <div className="mt-4 h-56 flex items-center justify-center">
      <div className="text-gray-500 text-center">
        {
          type === 'empty' && <SparklesIcon className="size-10 mx-auto mb-4"/>
        }
        {
          type === 'error' && <FaceFrownIcon className="size-10 mx-auto mb-4"/>
        }
        <h2 className='text-lg font-semibold'>{ title }</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default EmptyState