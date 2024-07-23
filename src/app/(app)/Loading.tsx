import Image from 'next/image'

const Loading = () => {
  return (
    <div className='w-full h-dvh flex justify-center items-center dark:bg-neutral-950'>
      <Image 
        className="animate-pulse"
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