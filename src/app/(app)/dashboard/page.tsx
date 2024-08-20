import Button from "@/components/Button/Button";

const DashboardPage = () => {
  return (
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-lg font-bold mb-4">Resumen</h2>

          <div>
            <h2 className="text-lg font-bold mb-4">Transacciones recientes</h2>
            <ul>
              <li className="border-b border-neutral-100 p-4 flex items-center justify-between">
                <p>Compra de producto</p>
                <p className="text-neutral-500">Hace 5 minutos</p>
              </li>
              <li className="border-b border-neutral-100 p-4 flex items-center justify-between">
                <p>Venta de producto</p>
                <p className="text-neutral-500">Hace 5 minutos</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="border-l px-5">
            <h2 className="text-lg font-bold mb-4">Actividad</h2>
            <div className="border p-4 rounded-lg">
              <p className="bg-purple-100 text-purple-700 inline-flex px-1 me-1 rounded">@username</p>
              Te mencionó en un comentario
              <blockquote className="font-mono text-neutral-500 bg-neutral-50 p-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod.
              </blockquote>
              <Button variant="secondary" size="sm" className="w-fit">Ver documento</Button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default DashboardPage;