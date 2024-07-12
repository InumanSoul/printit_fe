import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import PageTitle from '@/components/PageTitle/PageTitle';
import PageContent from './PageContent';

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

			<PageContent />
		</Container>
	);
};

export default Sales;
