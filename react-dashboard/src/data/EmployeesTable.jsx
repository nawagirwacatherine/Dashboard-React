import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import { employeesData } from "../data/dummy"; 

const EmployeesTable = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Employees</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Hire Date</TableHead>
            <TableHead>Reports To</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeesData.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={employee.image} alt={employee.Employee} />
                  <AvatarFallback>{employee.Employee[0]}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{employee.Employee}</TableCell>
              <TableCell>{employee.Designation}</TableCell>
              <TableCell>{employee.Country}</TableCell>
              <TableCell>{employee.HireDate}</TableCell>
              <TableCell>{employee.ReportsTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EmployeesTable;