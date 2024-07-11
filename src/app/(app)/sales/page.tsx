import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import PageTitle from '@/components/PageTitle/PageTitle';
import { mockSales } from './sales.mock';
import Paginator from '@/components/Paginator/Paginator';

export const metadata = {
	title: 'Printit: Ventas',
}

const mockPages = [
  { label: '1', active: true },
  { label: '2', active: false },
  { label: '3', active: false },
  { label: '4', active: false },
  { label: '5', active: false },
  { label: '6', active: false },
  { label: '7', active: false },
  { label: '8', active: false },
  { label: '9', active: false },
  { label: '10', active: false },
]

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
				<Paginator label='Example' items={mockPages} />
			</div>
		</Container>
	);
};

export default Sales;
