import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'

export const metadata = {
  title: 'Printit: Empresa',
}

const Company = () => {
  return (
    <Container>
      <PageTitle>Empresa</PageTitle>

      <div className="mt-4">
        <p className="text-gray-500">
          Detalles de la Empresa
        </p>
      </div>
    </Container>
  )
}

export default Company