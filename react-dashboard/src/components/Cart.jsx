import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import CartsTable from '../data/CartsTable';

const Cart = ({onClose}) => {
  return (
    <div className="flex absolute right-5 top-16 bg-white p-4 rounded-xl w-80 z-50 ">
     
 <CartsTable/>
    <div>
    <MdOutlineCancel className="bg-red-400 rounded-2xl shadow-sm" onClick={onClose}/>
    </div>
    
    </div>
  
  )
}

export default Cart