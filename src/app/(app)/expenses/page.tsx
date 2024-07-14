import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import PageContent from './PageContent'
import Button from '@/components/Button/Button'
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

const Expenses = () => {
  return (
    <Container>
      <PageTitle>Gastos</PageTitle>

      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='size-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'>
            <ArrowDownCircleIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>
          </div>
          <PageTitle>Gastos</PageTitle>
        </div>
        <Button href='/expenses/new' variant='primary' className='w-fit'>
          Registrar gasto
        </Button>
      </div>
      

      <PageContent />
    </Container>
  )
}

export default Expenses