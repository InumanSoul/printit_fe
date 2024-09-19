import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between p-3">
        <Image src="/printit.svg" alt="Logo" width={28} height={28} />
        <ul className="flex gap-4">
          <li>
            <a href="/login">Inicio</a>
          </li>
          <li>
            <a href="/register">Acerca de</a>
          </li>
          <li>
            <a href="/register">Funciones</a>
          </li>
          <li>
            <a href="/register">Ayuda</a>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li>
            <Button href="/login" variant="secondary">Iniciar sesión</Button>
          </li>
        </ul>
      </nav>
      <section className="min-h-dvh flex items-center flex-col justify-center">
        <h1 className="text-4xl font-bold">Controla tu empresa de manera inteligente</h1>
        <div className="flex gap-2 items-center">
        <Button href="/register" variant="secondary">Crear cuenta</Button>
        <Button href="/login" variant="primary">Contacto</Button>
        </div>
      </section>
    </main>
  );
}
