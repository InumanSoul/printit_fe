'use client'

import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import Input from '@/components/Input/Input'
import InputLabel from '@/components/InputLabel/InputLabel'
import PageTitle from '@/components/PageTitle/PageTitle'
import { DatePickerTheme } from '@/utils'
import { ArrowLeftIcon, ArrowRightIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import DatePicker from 'tailwind-datepicker-react'
import { useGetContacts } from '../../contacts/_domain/contacts'
import SearchableInput from '@/components/SearchableInput/SearchableInput'

const NewPage = () => {
  const [show, setShow] = React.useState(false)
  const [supplierQuery, setSupplierQuery] = React.useState('')
  const { contacts, isLoading, error }: any = useGetContacts({
    pageNumber: 1,
    contactsType: 'supplier',
    querySearch: supplierQuery
  })

  const options = {
    autoHide: true,
    todayBtn: true,
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

  const handleSupplierSearch = (e: any) => {
    setSupplierQuery(e.target.value)
  }

  return (
    <Container>
      <PageTitle className="mb-4">Registrar gasto</PageTitle>
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-6'>
          <div className='border border-dashed text-neutral-700 border-neutral-400 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-950 rounded-lg p-5 h-full flex items-center justify-center'>
            <div className='flex flex-col gap-2 items-center'>
              <DocumentArrowUpIcon className='size-10'/>
              <p>Arrastra tus documento aqui</p>
            </div>
          </div>
        </div>
        <div className='col-span-6 space-y-3'>
          <div className='flex flex-col gap-2'>
            <InputLabel>Fecha</InputLabel>
            <DatePicker options={options} show={show} onChange={handleChange} setShow={handleClose} />
          </div>
          <SearchableInput
            label='Proveedor'
            value={supplierQuery}
            handler={handleSupplierSearch}
            data={contacts?.data?.data}
            emptyAction={{
              href: '/contacts/new',
              label: 'Registrar',
              title: '¿No encontras el proveedor?'
            }}
          />
          <div className='flex flex-col gap-2'>
            <InputLabel>Categoria</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Importe</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex flex-col gap-2'>
            <InputLabel>Descripción</InputLabel>
            <Input type='text' />
          </div>
          <div className='flex gap-2 mt-5'>
            <Button href='/expenses' variant='secondary'>Cancelar</Button>
            <Button variant='secondary'>Guardar y nuevo</Button>
            <Button variant='primary'>Guardar y salir</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default NewPage