
import React from 'react';
import CustomersTable from '../data/CustomersTable';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="m-4 md:m-10">
      <Header category="Page" title="Customers" />
      <CustomersTable/>
    </div>
  );
};

export default Customers;