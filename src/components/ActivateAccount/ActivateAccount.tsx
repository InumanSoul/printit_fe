import Button from "../Button/Button"

const ActivateAccount = () => {

  return (
    <div className="border rounded-xl p-5 mb-5">
      <h2 className="text-xl font-bold">Activa tu cuenta en Printit</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quod.
      </p>
      <Button href="/activate" variant="primary" className="w-fit">Activar cuenta</Button>
    </div>
  )
}

export default ActivateAccount