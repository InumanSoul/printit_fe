const PaginatorAction = ({ label, position, setter }: { label: string, position: 'right' | 'left', setter?: React.Dispatch<React.SetStateAction<number>> }) => {
  const leftClass = 'rounded-s-lg'
  const rightClass = 'rounded-e-lg'

  const availablePositions = {
    left: leftClass,
    right: rightClass,
  }

  return (
    <li>
      <button 
        type="button"
        onClick={() => setter && setter((prev) => position === 'left' ? prev - 1 : prev + 1)}
        className={`flex items-center ${availablePositions[position]} justify-center px-3 h-8 ms-0 leading-tight text-neutral-500 bg-white border border-neutral-300 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white`}
      >
        {label}
      </button>
    </li>
  )
}

export default PaginatorAction