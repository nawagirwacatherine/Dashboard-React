
import React from 'react';
import { useState } from 'react';
import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input'; 

const Orders = () => {

  const [ search, setSearch] =useState('');

  const filteredData = ordersData.filter((order) => 
  Object.values(order).some((value) =>
  String(value).toLowerCase().includes(search.toLowerCase())
  )
  )
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Orders' />

       <div className='mb-4'>
        <Input
          type='text'
          placeholder='Search orders...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full md:w-1/3'
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {ordersGrid.map((col, idx) => (
              <TableHead key={idx} className='text-left'>
                {col.headerText || col.field}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((order, rowIndex) => (
            <TableRow key={rowIndex}>
              {ordersGrid.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {order[col.field.trim()]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;