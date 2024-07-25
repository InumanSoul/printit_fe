interface SearchableInputItemProps {
  onClick: (e: any) => void;
  data: any;
  hasIcon?: boolean;
}

const SearchableInputItem = ({ onClick, data, hasIcon }: SearchableInputItemProps) => {
  return (
    <div 
      key={data.id}
      role="listitem"
      onClick={onClick}
      className='flex gap-4 items-center p-4 cursor-pointer duration-150 hover:bg-neutral-50 dark:hover:bg-neutral-900'
    >
      {
        hasIcon ? (
          <>
            <div className="size-8 bg-neutral-200 rounded-full">{data.icon}</div>
            <div>
              <p className="font-semibold text-neutral-800 dark:text-neutral-50">{data.label}</p>
              <p className='text-sm text-neutral-400 dark:text-neutral-500'>{data.description}</p>
            </div>
          </>
        ) : (
          <p className="text-neutral-800 dark:text-neutral-50">{data.label}</p>
        )
      }
    </div>
  )
}

export default SearchableInputItem