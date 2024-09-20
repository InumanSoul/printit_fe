import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="flex items-center justify-between p-3 w-full border-b border-neutral-200 sticky top-0 bg-white/85">
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
      <section className="flex items-center flex-col justify-center pt-56">
        <div className="mb-12 text-center flex flex-col items-center justify-center max-w-4xl space-y-4">
          <h1 className="text-6xl font-bold">Simplifica la gestión de tu negocio con <span className="bg-gradient-to-b from-rose-500 to-orange-300 text-transparent bg-clip-text">Printit</span></h1>
          <p className="text-neutral-600 text-xl">Facturación, ventas, stock y más, todo en un solo lugar.</p>
          <div className="flex gap-2 items-center">
            <Button href="/register" variant="primary">Crear cuenta gratis</Button>
            <Button href="/login" variant="secondary">Contacto</Button>
          </div>
        </div>
        <div className="w-[80dvw] h-[70dvh] bg-neutral-300 rounded-3xl">
        </div>
      </section>

      <section className="py-28 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold">
          Tu herramienta integral para el éxito de tu empresa
        </h2>
        <p className="text-neutral-600">
          Empieza a automatizar y optimizar tu negocio hoy mismo. Prueba gratis la versión Pro durante 30 días.
        </p>
        <Button variant="primary">Prueba gratis</Button>
      </section>

      <section className="py-28 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir Printit?</h2>
        <ul className="grid grid-cols-6 grid-rows-6 gap-4">
          <li className="border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-3 row-span-4">
            <p className="text-xl font-bold">Facturación simplificada</p>
            <p className="text-neutral-600">
            Genera facturas en segundos y mantén un control claro de tus ventas.
            </p>
          </li>
          <li className="border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-3 row-span-2">
            <p className="text-xl font-bold">Gestión de stock inteligente</p>
            <p className="text-neutral-600">
            Sabe en todo momento qué productos tienes disponibles y mejora tu inventario.
            </p>
          </li>
          <li className="border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-3 row-span-4">
            <p className="text-xl font-bold">Multiplataforma y para múltiples usuarios</p>
            <p className="text-neutral-600">
            Accede desde cualquier dispositivo, permite que tu equipo colabore fácilmente.
            </p>
          </li>
          <li className="border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-3 row-span-2">
            <p className="text-xl font-bold">Cotizaciones rápidas y precisas</p>
            <p className="text-neutral-600">
            Crea presupuestos para tus clientes en un clic y conviértelos en ventas rápidamente.
            </p>
          </li>
          <li className="border border-neutral-300 flex flex-col justify-end rounded-xl p-5 bg-white col-span-6 row-span-2">
            <p className="text-xl font-bold">Reportes detallados</p>
            <p className="text-neutral-600">
            Obtén información clara y visual sobre el estado de tu negocio, toma decisiones más informadas.
            </p>
          </li>
        </ul>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-700 to-orange-500 p-28 space-y-3 text-center">
        <h4 className="text-4xl font-bold text-white">¡Regístrate gratis hoy mismo!</h4>
        <p className="text-xl text-white">Disfruta de 30 días gratis con acceso a todas las funciones Pro. Sin compromisos.</p>
        <Button variant="white-outline" className="mx-auto">Prueba gratuita de 30 días</Button>
      </section>

      <footer className="bg-neutral-50 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-2xl font-bold">printit</h4>
              <ul className="flex flex-col gap-2">
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
            </div>
            <div>
              <h4 className="text-2xl font-bold">Contacto</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/login">Soporte</a>
                </li>
                <li>
                  <a href="/register">Preguntas frecuentes</a>
                </li>
                <li>
                  <a href="/register">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8">
            <p>© 2024 Printit. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="/login">Términos y condiciones</a>
              <a href="/register">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
