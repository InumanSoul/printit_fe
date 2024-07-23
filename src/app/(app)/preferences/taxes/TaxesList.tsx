'use client'
import { useGetTaxes } from "./_domain/useTaxes";

const TaxesList = () => {
  const { taxes, isLoading, error } = useGetTaxes()

  console.log(taxes?.data);

  return (
      <>
          {isLoading && <p>Loading...</p>}
          {
            (!isLoading && taxes?.data?.length > 0) &&
            <ul className='border dark:border-neutral-700 rounded-lg'>
              {
                taxes?.data?.map((tax: any) => (
                  <li key={tax.id} className='border-b dark:border-neutral-700 last-of-type:border-b-0 py-3 px-2 dark:text-neutral-50'>
                    {tax.name}
                  </li>
                ))
              }
            </ul>
            
          }
      </>
  );
}

export default TaxesList;