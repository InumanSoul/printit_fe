'use client'

import Button from '@/components/Button/Button'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Datepicker from "tailwind-datepicker-react"

const Login = () => {
  const [show, setShow] = React.useState(false)

  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Borrar",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-white",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500",
      input: "",
      inputIcon: "",
      selected: "bg-green-500 hover:bg-green-400",
    },
    icons: {
      prev: () => <ArrowLeftIcon className='size-5 text-gray-900' />,
      next: () => <ArrowRightIcon className='size-5 text-gray-900' />,
    },
    defaultDate: new Date("2024-01-01"),
    language: "es",
    disabledDates: [],
    weekDays: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Selecciona una fecha",
    inputDateFormatProp: {
      day: undefined,
      month: undefined,
      year: undefined,
    }
  }

  const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
	}

  return (
    <div className='flex flex-col w-96 gap-5 items-center'>
      <div className='bg-white rounded-lg shadow-sm border border-gray-300 py-2 w-full'>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center'>Crea tu cuenta</h2>
          <form>
          <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-gray-700'>Nombre</label>
              <input type='text' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-gray-700'>Email</label>
              <input type='email' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2 flex flex-col relative'>
              <label className='text-sm font-semibold text-gray-700'>Fecha de nacimiento</label>
              <Datepicker options={options} show={show} onChange={handleChange} setShow={handleClose} />
            </div>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-gray-700'>Documento</label>
              <input type='text' className='border border-gray-400 rounded-lg w-full p-2 focus:border-pink-400 outline-pink-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2'>
              <Button variant='primary'>Crear cuenta</Button>
            </div>
          </form>
        </div>
      </div>
      <p>Ya tengo cuenta<a href='/login' className='text-pink-500 text-center ml-1'>Inicia sesión</a></p>
    </div>
  )
}

export default Login