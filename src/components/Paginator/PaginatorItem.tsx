const PaginatorItem = ({ label, active, setter }: { label: string, active: boolean, setter?: React.Dispatch<React.SetStateAction<number>>}) => {
  const activeClass = 'text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 dark:bg-pink-950 dark:text-pink-500 dark:hover:bg-pink-900 dark:hover:text-white'
  const inactiveClass = 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:hover:text-white'

  return (
    <li>
      <button 
        type="button"
        aria-current="page"
        onClick={() => setter && setter(Number(label))}
        className={`flex items-center justify-center px-3 h-8 border border-neutral-300 dark:border-neutral-700  ${active ? activeClass : inactiveClass}`}
      >
        {label}
      </button>
    </li>
  )  
}

export default PaginatorItem