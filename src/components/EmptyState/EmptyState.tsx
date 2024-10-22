import { FaceFrownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface EmptyStateProps {
  title: string,
  description: string,
  type: 'empty' | 'error' 
}

const EmptyState = ({ title, description, type } : EmptyStateProps) => {
  const availableTypes = {
    empty: <SparklesIcon className="size-10 mx-auto mb-4"/>,
    error: <FaceFrownIcon className="size-10 mx-auto mb-4"/>,
  }

  return (
    <div className="mt-4 h-56 flex items-center justify-center border border-neutral-300 dark:border-neutral-700 rounded-xl">
      <div className="text-neutral-500 text-center">
        {
          availableTypes[type]
        }
        <h2 className='text-lg font-semibold'>{ title }</h2>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default EmptyState