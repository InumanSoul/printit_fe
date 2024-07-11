const PaginatorAction = ({ label, position }: { label: string, position: 'right' | 'left' }) => {
  const leftClass = 'rounded-s-lg'
  const rightClass = 'rounded-e-lg'

  const availablePositions = {
    left: leftClass,
    right: rightClass,
  }

  return (
    <li>
      <a href="#" className={`flex items-center ${availablePositions[position]} justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
        {label}
      </a>
    </li>
  )
}

export default PaginatorAction