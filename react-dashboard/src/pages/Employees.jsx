import React from 'react';
import EmployeesTable from '../data/EmployeesTable';
// import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-4 md:m-10">
      {/* <Header category="Page" title="Employees" /> */}
      <EmployeesTable />
    </div>
  );
};

export default Employees;