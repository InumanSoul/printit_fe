import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-dvh flex justify-center items-center'>
      <Image 
        className="animate-bounce"
        src="/printit.svg"
        width={50} 
        height={50} 
        alt="Printit Logo"
        priority
      />

    </div>
  )
}

export default Loading