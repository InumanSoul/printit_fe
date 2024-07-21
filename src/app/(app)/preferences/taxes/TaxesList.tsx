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
            <ul>
              {
                taxes?.data?.map((tax: any) => (
                  <li key={tax.id} className="dark:text-neutral-50">{tax.name}</li>
                ))
              }
            </ul>
          }
      </>
  );
}

export default TaxesList;