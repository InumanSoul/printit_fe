import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import InputError from "@/components/InputError/InputError";
import InputLabel from "@/components/InputLabel/InputLabel";
import Modal from "@/components/Modal/Modal";
import React from "react";

const ContactsModal = () => {
  return (
    <Modal title='Agregar nuevo contacto'>
      <form>
          <div className='mb-2 flex flex-col'>
            <InputLabel>Tipo de contacto</InputLabel>
            <ul className="items-center w-full text-sm font-medium text-neutral-900 bg-white border border-neutral-400 rounded-lg sm:flex dark:bg-neutral-700 dark:border-neutral-600 dark:text-white">
                <li className="w-full border-b border-neutral-400 sm:border-b-0 sm:border-r dark:border-neutral-600">
                    <div className="flex items-center ps-3">
                        <input id="customer" type="radio" defaultChecked value="customer" name="contacts_type" className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500 dark:focus:ring-rose-500 dark:ring-offset-neutral-700 dark:focus:ring-offset-neutral-700 focus:ring-2 dark:bg-neutral-600 dark:border-neutral-500" />
                        <label htmlFor="customer" className="w-full py-3 ms-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                          Cliente
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-neutral-400 sm:border-b-0 sm:border-r dark:border-neutral-600">
                    <div className="flex items-center ps-3">
                        <input id="supplier" type="radio" value="supplier" name="contacts_type" className="w-4 h-4 text-rose-500 bg-neutral-100 border-neutral-300 focus:ring-rose-500 dark:focus:ring-rose-500 dark:ring-offset-neutral-700 dark:focus:ring-offset-neutral-700 focus:ring-2 dark:bg-neutral-600 dark:border-neutral-500" />
                        <label htmlFor="supplier" className="w-full py-3 ms-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">
                          Proveedor
                        </label>
                    </div>
                </li>
            </ul>
          </div>

          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='name'>Nombre</InputLabel>
            <Input name='name' type='text' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input name='email' type='email' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='phone'>Teléfono</InputLabel>
            <Input name='phone' type='tel' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='address'>Dirección</InputLabel>
            <Input name='address' type='text' required/>
          </div>
          <div className='mb-2 flex flex-col'>
            <InputLabel htmlFor='document'>Documento</InputLabel>
            <Input name='document' type='text' required/>
          </div>
          <div className='mb-2'>
            <Button variant='primary' type='submit'>
              Guardar
            </Button>
          </div>
        </form>
    </Modal>
  );
}

export default ContactsModal;