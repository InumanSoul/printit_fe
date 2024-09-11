'use client'

import { useAuth } from "@/hooks/useAuth"

const CompanyDetails = () => {
  const { user } = useAuth()
  return (
    <>
      <h2 className="font-bold text-2xl">{user.company.name}</h2>
      <p>{user.company.address}</p>
      <p>{user.company.phone}</p>
    </>
  )
}

export default CompanyDetails;