'use client'
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input"
import InputLabel from "../InputLabel/InputLabel"
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SearchableInputProps {
  label: string;
  value: string;
  handler: (e: any) => void;
  data: any;
  emptyAction?: {
    href: string;
    label: string;
    title: string;
  };
}

const SearchableInput = ({ label, value, handler, data, emptyAction }: SearchableInputProps) => {
  const [selected, setSelected] = useState<any>(null);

  const handleSelection = (data: any) => {
    setSelected(data)
    console.log(data);
  }

  return (
    <div className='flex flex-col gap-2 relative'>
      <InputLabel>{label}</InputLabel>
      {
        selected ? (
          <div className='flex gap-4 items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg'>
            <div className="size-8 bg-neutral-200 rounded-full"></div>
            <div className="flex-1">
              <p className="font-semibold dark:text-neutral-50">{selected.name}</p>
              <p className='text-sm text-neutral-400 dark:text-neutral-500'>{selected.email}</p>
            </div>
            <button className="text-neutral-400 hover:text-neutral-50 cursor-pointer duration-200" onClick={() => setSelected(null)}>
              <XMarkIcon className='size-5'/>
            </button>
          </div>
        )
      :
      <>
        <Input type='search' value={value} onChange={handler} className='peer' />
        <div role="list" className='bg-white dark:bg-neutral-800 divide-y dark:divide-neutral-700 absolute top-20 w-full max-h-60 duration-200 ease-in-out overflow-auto shadow-xl rounded-lg opacity-0 peer-focus:opacity-100'>
          {
            data?.map((data: any) => (
              <div 
                role="listitem"
                key={data.id}
                onClick={() => handleSelection(data)}
                className='flex gap-4 items-center p-4 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900'
              >
                <div className="size-8 bg-neutral-200 rounded-full"></div>
                <div>
                  <p className="font-semibold dark:text-neutral-50">{data.name}</p>
                  <p className='text-sm text-neutral-400 dark:text-neutral-500'>{data.email}</p>
                </div>
              </div>
            ))
          }
          {
            emptyAction &&
            <div className='flex gap-2 items-center justify-between p-4'>
              <p className='text-neutral-400'>{emptyAction.title}</p>
                <Button href={emptyAction.href} variant='secondary' size='sm'>{emptyAction.label}</Button>
            </div>
          }
        </div>
      </>
      }
    </div>
  )
}

export default SearchableInput;