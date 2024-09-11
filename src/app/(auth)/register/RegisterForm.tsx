'use client'

import { useState } from 'react'
import InputLabel from '@/components/InputLabel/InputLabel'
import Input from '@/components/Input/Input'
import Datepicker from "tailwind-datepicker-react"
import Button from '@/components/Button/Button'
import { DatePickerTheme } from '@/utils'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const RegisterForm = () => {
  const [show, setShow] = useState(false)

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
    <form>
      <div className='mb-2 flex flex-col'>
        <InputLabel>Nombre</InputLabel>
        <Input type='text' required />
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel>Email</InputLabel>
        <Input type='email' required />
      </div>
      <div className='mb-2 flex flex-col relative'>
        <InputLabel>Fecha de nacimiento</InputLabel>
        <Datepicker options={options} show={show} onChange={handleChange} setShow={handleClose} />
      </div>
      <div className='mb-2 flex flex-col'>
        <InputLabel>Documento</InputLabel>
        <Input type='text' required />
      </div>
      <div className='mb-2'>
        <Button variant='primary' className='w-full'>Crear cuenta</Button>
      </div>
    </form>
  )
}

export default RegisterForm;