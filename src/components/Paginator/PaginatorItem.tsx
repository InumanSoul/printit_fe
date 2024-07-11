const PaginatorItem = ({ label, active }: { label: string, active: boolean }) => {
  const activeClass = 'text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 dark:text-pink-700'
  const inactiveClass = 'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white'

  return (
    <li>
      <a href="#" aria-current="page" className={`flex items-center justify-center px-3 h-8 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 ${active ? activeClass : inactiveClass}`}>
        {label}
      </a>
    </li>
  )  
}

export default PaginatorItem