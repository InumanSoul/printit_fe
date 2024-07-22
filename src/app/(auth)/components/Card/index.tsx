const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white dark:bg-neutral-900 rounded-lg shadow-sm border border-neutral-300 dark:border-neutral-700 py-2 w-full'>
      {children}
    </div>
  )
}

export default Card