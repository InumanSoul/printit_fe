import React from 'react'

const PageTitle = ({ children } : { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold dark:text-gray-50">
      {children}
    </h2>
  )
}

export default PageTitle