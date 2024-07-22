'use client'

import Button from '@/components/Button/Button'
import { DatePickerTheme } from '@/utils'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Datepicker from "tailwind-datepicker-react"
import Card from '../components/Card'

const Login = () => {
  const [show, setShow] = React.useState(false)

  const options = {
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Borrar",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: DatePickerTheme,
    icons: {
      prev: () => <ArrowLeftIcon className='size-5 text-neutral-900 dark:text-neutral-50' />,
      next: () => <ArrowRightIcon className='size-5 text-neutral-900 dark:text-neutral-50' />,
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
      <Card>
        <div className='p-5'>
          <h2 className='text-2xl font-semibold mb-5 text-center dark:text-neutral-50'>Crea tu cuenta</h2>
          <form>
          <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-neutral-700'>Nombre</label>
              <input type='text' className='border border-neutral-400 rounded-lg w-full p-2 focus:border-rose-400 outline-rose-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-neutral-700'>Email</label>
              <input type='email' className='border border-neutral-400 rounded-lg w-full p-2 focus:border-rose-400 outline-rose-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2 flex flex-col relative'>
              <label className='text-sm font-semibold text-neutral-700'>Fecha de nacimiento</label>
              <Datepicker options={options} show={show} onChange={handleChange} setShow={handleClose} />
            </div>
            <div className='mb-2 flex flex-col'>
              <label className='text-sm font-semibold text-neutral-700'>Documento</label>
              <input type='text' className='border border-neutral-400 rounded-lg w-full p-2 focus:border-rose-400 outline-rose-400/50 outline-4 outline-offset-2' required/>
            </div>
            <div className='mb-2'>
              <Button variant='primary'>Crear cuenta</Button>
            </div>
          </form>
        </div>
      </Card>
      <p>Ya tengo cuenta<Link href='/login' className='text-rose-500 text-center ml-1'>Inicia sesión</Link></p>
    </div>
  )
}

export default Login