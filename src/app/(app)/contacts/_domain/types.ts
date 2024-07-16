export interface Contact {
  id: number,
  name: string,
  email: string,
  phone: string,
  address: string,
  document: string,
  user_id: number,
  company_id: number,
}

export interface Contacts {
  contacts: Contact[],
}