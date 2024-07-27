'use client'
import { useCreateCategory } from "@/app/(app)/_domain/categories/useGetCategories";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import InputLabel from "@/components/InputLabel/InputLabel";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { useSWRConfig } from "swr";

const CategoriesModal = () => {
  const { createCategory } = useCreateCategory();
  const { mutate } = useSWRConfig();
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const category_type = form.get('category_type');
    
    try {
      await createCategory({
        name: name as string,
        category_type: category_type as 'product' | 'expense',
        setErrors: setErrors
      });
    } catch (error) {
      console.log(error);
    } finally {
      e.target.reset();
      mutate(`/api/categories?category_type=${category_type}`);
      setMessage('Categoria creada correctamente');
    }

  };

  return (
    <Modal title="Nueva categoria">
      {message && (
        <div className="mb-2 p-2 bg-green-100 text-green-500 dark:bg-green-500 dark:text-white rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-2 flex flex-col">
          <InputLabel>Nombre</InputLabel>
          <div className="flex mb-1">
            <Input name="name" type="text" className="flex-1 rounded-r-none border-e-0" required />
            <select className="rounded-r-lg w-36 border-neutral-400" name="category_type" required>
              <option value="product">Productos</option>
              <option value="expense">Gastos</option>
            </select>
          </div>
          <span className="text-sm text-neutral-400 dark:text-neutral-700">
            El tipo de categoria define si se utilizara para productos o gastos
          </span>
        </div>
        <Button variant="primary" type="submit">Agregar</Button>
        {errors.length > 0 && (
          <div className="mt-2 p-2 bg-red-100 text-red-500 dark:bg-red-500 dark:text-white rounded">
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </form>
    </Modal>
  );
}

export default CategoriesModal;