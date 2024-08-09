import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dispatch, SetStateAction } from 'react';

interface SearchableSelectedItemProps {
	item: any;
	icon: boolean;
	setSelected: Dispatch<SetStateAction<any>>;
}

const SearchableSelectedItem = ({
	item,
	icon,
	setSelected,
}: SearchableSelectedItemProps) => {
	return (
		<div className='flex gap-4 items-center px-4 py-3 border border-neutral-400 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
			{icon && <div className='size-8 bg-neutral-200 rounded-full'></div>}
			<div className='flex-1'>
				<p className='font-semibold dark:text-neutral-50'>{item.name}</p>
				<p className='text-sm text-neutral-400 dark:text-neutral-500'>
					{item.email}
				</p>
			</div>
			<button
				className='text-neutral-400 dark:hover:text-neutral-50 hover:text-neutral-700 cursor-pointer duration-200'
				onClick={() => setSelected(null)}>
				<XMarkIcon className='size-5' />
			</button>
		</div>
	);
};

export default SearchableSelectedItem;
