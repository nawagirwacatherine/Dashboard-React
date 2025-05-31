
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import { customersData } from "../data/dummy"; 

const CustomersTable = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Hire Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customersData.map((customer, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={customer.image} alt={customer.Employee} />
                  <AvatarFallback>{customer.Employee[0]}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{customer.Employee}</TableCell>
              <TableCell>{customer.Country}</TableCell>
              <TableCell>{customer.HireDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTable;