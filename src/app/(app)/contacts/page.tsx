import Container from '@/components/Container/Container'
import PageTitle from '@/components/PageTitle/PageTitle'
import React from 'react'
import { Metadata } from 'next';
import Button from '@/components/Button/Button';
import { UserGroupIcon } from '@heroicons/react/24/outline';

import ContactsContent from './ContactsContent';
export const metadata: Metadata = {
  title: "Contactos",
  description: "Directorio de contactos disponibles",
};

const Contacts = () => {

  return (
    <Container>
      <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='size-16 rounded-xl from-neutral-50 to-neutral-200 bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center'>
            <UserGroupIcon className='size-8 text-neutral-500 dark:text-neutral-400'/>
          </div>
          <PageTitle>Contactos</PageTitle>
        </div>
        <Button href='/contacts/new' variant='primary' className='w-fit'>
          Nuevo contacto
        </Button>
      </div>

      <div className='my-6'>
        <ContactsContent />
      </div>
    </Container>
  )
}

export default Contacts