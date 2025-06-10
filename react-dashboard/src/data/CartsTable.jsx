
import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";


import { cartsData } from "../data/dummy"; 

const CartsTable = () => {
  return (
    < div >
      <div>
      <h2 className="text-2xl font-semibold mb-4"> Add to cart</h2>
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
    </div>
  );
};

export default CartsTable;