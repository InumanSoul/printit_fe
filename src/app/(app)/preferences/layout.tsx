import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";

const PreferencesLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <Container>
      <div className='flex gap-2 items-center justify-between'>
          <PageTitle>Preferencias</PageTitle>
      </div>
      <nav className="flex gap-2 my-10">
        <Button href="/preferences/categories" variant="secondary" className="w-fit">Categorias</Button>
        <Button href="/preferences/taxes" variant="secondary" className="w-fit">Impuestos</Button>
        <Button href="/preferences/categories" variant="secondary" className="w-fit">Talonarios</Button>
        <Button href="/preferences/categories" variant="secondary" className="w-fit">Terminales</Button>
        <Button href="/preferences/users" variant="secondary" className="w-fit">Usuarios</Button>
      </nav>
      {children}
    </Container>
  );
}

export default PreferencesLayout;