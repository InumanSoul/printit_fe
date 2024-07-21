import React from 'react'

interface PageTitleProps {
  children: React.ReactNode
  className?: string
}

const PageTitle = ({ children, className } : PageTitleProps) => {
  return (
    <h2 className={
      `text-3xl font-semibold text-gray-800 dark:text-gray-100 ${className}`
    }>
      {children}
    </h2>
  )
}

export default PageTitle