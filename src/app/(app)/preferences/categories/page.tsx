import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import CategoriesList from './CategoriesList'
import Button from '@/components/Button/Button'

const Categories = () => {
  return (
    <Container>
      <div className='md:max-w-lg mx-auto'>
        <PageTitle>Categorias</PageTitle>
        <p className='text-gray-500 mb-5'>
          Aquí encontrarás categorías que pueden usarse en el registro de productos y gastos, tienes algunas predefinidas y puedes agregar más según necesites.
        </p>

        <Button href='/preferences/categories/new' variant='primary' className='w-fit'>Nueva categoría</Button>

        <CategoriesList />
      </div>
    </Container>
  )
}

export default Categories