export interface Customers {
  id: number,
  name: string,
  email: string,
  phone: string,
  address: string,
  document: string,
  user_id: number,
  company_id: number,
}

export interface Customers {
  customers: Customers[],
}