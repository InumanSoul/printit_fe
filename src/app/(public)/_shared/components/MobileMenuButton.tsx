type MobileMenuButtonProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

export default function MobileMenuButton({ toggleMenu, isOpen }: MobileMenuButtonProps) {
	return (
		<div className='flex md:hidden'>
			<button
				type='button'
				className='inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500'
				onClick={toggleMenu}
				aria-expanded={isOpen}>
				<span className='sr-only'>
					{isOpen ? 'Close main menu' : 'Open main menu'}
				</span>
				{isOpen ? (
					<svg
						className='block h-6 w-6'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						aria-hidden='true'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				) : (
					<svg
						className='block h-6 w-6'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						aria-hidden='true'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				)}
			</button>
		</div>
	);
}
