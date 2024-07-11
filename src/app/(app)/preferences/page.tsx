import Button from "@/components/Button/Button"
import Container from "@/components/Container/Container"
import PageTitle from "@/components/PageTitle/PageTitle"

const Preferences = () => {
  return (
    <Container>
			<PageTitle>Preferencias</PageTitle>

      <Button href="/preferences/categories" variant="primary" className="w-fit">Categorias</Button>

    </Container>
  )
}

export default Preferences