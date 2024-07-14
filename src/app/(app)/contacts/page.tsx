import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import { Metadata } from 'next';
import Button from '@/components/Button/Button';
import CustomersContent from './CustomersContent';
import { UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "Contactos",
  description: "Directorio de contactos disponibles",
};

const Contacts = () => {

  return (
    <Container>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='size-16 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center'>
            <UserGroupIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>
          </div>
          <PageTitle>Contactos</PageTitle>
        </div>
        <Button href='/contacts/new' variant='primary' className='w-fit'>
          Nuevo contacto
        </Button>
      </div>

      <div className='my-6'>
        <CustomersContent />
      </div>
    </Container>
  )
}

export default Contacts