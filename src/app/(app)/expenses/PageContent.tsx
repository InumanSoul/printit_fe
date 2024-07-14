import Paginator from '@/components/Paginator/Paginator'
import Table from '@/components/Table/Table'
import TableCell from '@/components/Table/TableCell'
import TableRow from '@/components/Table/TableRow'
import React from 'react'

const mockPages = [
  { label: 'Previous', active: false },
  { label: '1', active: true },
  { label: '2', active: false },
  { label: '3', active: false },
  { label: '4', active: false },
  { label: 'Next', active: false },
]


const PageContent = () => {
  return (
    <div className='mt-8'>
      <Table data={{ columns: ['Fecha', 'Proveedor', 'Descripción', 'Monto'] }}>
        {
          [1, 2, 3, 4, 5].map((item, index) => (
            <TableRow key={index}>
              <TableCell>01/01/2021</TableCell>
              <TableCell>Company Sample</TableCell>
              <TableCell>Compra de insumos</TableCell>
              <TableCell>$ 150.00</TableCell>
            </TableRow>
          ))
        }
      </Table>
      <Paginator items={mockPages} />
    </div>
  )
}

export default PageContent