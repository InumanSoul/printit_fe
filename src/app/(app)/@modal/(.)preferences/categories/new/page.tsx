import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import InputLabel from "@/components/InputLabel/InputLabel";
import Modal from "@/components/Modal/Modal";
import React from "react";

const CategoriesModal = () => {
  return (
    <Modal title="Nueva categoria">
      <form>
        <div className="mb-2 flex flex-col">
          <InputLabel>Nombre</InputLabel>
          <Input name="name" type="text" required />
        </div>
        <Button variant="primary" type="submit">Agregar</Button>
      </form>
    </Modal>
  );
}

export default CategoriesModal;