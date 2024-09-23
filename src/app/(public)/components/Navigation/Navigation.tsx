import Button from "@/components/Button/Button"
import Image from "next/image"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-3 w-full border-b border-neutral-200 sticky top-0 bg-white/60 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <Image src="/printit.svg" alt="Printit logo" width={28} height={28} />
        <p className="font-bold text-2xl">printit</p>
      </div>
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
          <Button href="/login" variant="neutral">
            Iniciar sesión
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation