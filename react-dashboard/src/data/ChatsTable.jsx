

import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useStateContext } from "../contexts/ContextProvider"
import { MdClose } from "react-icons/md";
import { cartsData } from "../data/dummy"; 

const CartsTable = () => {
  const {setIsClicked } = useStateContext
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Chats</h2>

    < MdClose className=" cursor-pointer text-gray-500 hover:text-red-500" onClick= {() => setIsClicked(prev =>({ ...prev,chat:false}))} />
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