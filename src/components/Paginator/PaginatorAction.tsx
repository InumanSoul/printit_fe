const PaginatorAction = ({ label, position }: { label: string, position: 'right' | 'left' }) => {
  const leftClass = 'rounded-s-lg'
  const rightClass = 'rounded-e-lg'

  const availablePositions = {
    left: leftClass,
    right: rightClass,
  }

  return (
    <li>
      <a href="#" className={`flex items-center ${availablePositions[position]} justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white`}>
        {label}
      </a>
    </li>
  )
}

export default PaginatorAction