

import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";


import { cartsData } from "../data/dummy"; 

const CartsTable = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Customers</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Flavor</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartsData.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.product}</TableCell>
              <TableCell>{product.flavor}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CartsTable;