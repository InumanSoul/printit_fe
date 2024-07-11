import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import PageTitle from '@/components/PageTitle/PageTitle';
import { mockSales } from './sales.mock';

export const metadata = {
	title: 'Printit: Ventas',
}

const Sales = () => {
	return (
		<Container>
			<PageTitle>Ventas</PageTitle>

			<Button variant='primary' href='/sales/new' className='w-fit'>
				Nueva venta
			</Button>

			<div className='mt-4'>
				<div className='relative overflow-x-auto border rounded-xl'>
					<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								<th scope='col' className='px-6 py-3'>
									#
								</th>
								<th scope='col' className='px-6 py-3'>
									Cliente
								</th>
								<th scope='col' className='px-6 py-3'>
									Fecha
								</th>
								<th scope='col' className='px-6 py-3'>
									Monto
								</th>
								<th scope='col' className='px-6 py-3'>
									Acciones
								</th>
							</tr>
						</thead>
						<tbody>
							{
								mockSales.map((sale) => (
									<tr key={sale.id} className='bg-white border-b last-of-type:border-b-0 dark:bg-gray-800 dark:border-gray-700'>
										<td className='px-6 py-4'>
											{sale.id}
										</td>
										<td 
											scope='row'
											className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
											<div className='flex items-center gap-2'>
												<div className='size-10 rounded-full bg-gray-200'></div>
												<div>
													<h4 className='font-semibold'>
														{sale.client}
													</h4>
													<p className='text-gray-500'>4687201</p>
												</div>
											</div>
										</td>
										<td className='px-6 py-4'>
											<span className='text-gray-900 dark:text-gray-100'>{sale.date}</span>
										</td>
										<td className='px-6 py-4'>
											<span className='text-gray-900 dark:text-gray-100'>{sale.amount}</span>
										</td>
										<td className='px-6 py-4 flex gap-2'>
											<Button variant='secondary'>
												Editar
											</Button>
										</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
				<nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
							<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
							<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
								</li>
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
								</li>
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
								</li>
								<li>
									<a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-pink-600 border border-gray-300 bg-pink-50 hover:bg-pink-100 hover:text-pink-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
								</li>
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
								</li>
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
								</li>
								<li>
									<a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
								</li>
							</ul>
						</nav>
			</div>
		</Container>
	);
};

export default Sales;
