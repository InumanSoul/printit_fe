import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-screen-2xl lg:max-w-screen-lg mx-auto'>
      {children}
    </div>
  )
}

export default Container