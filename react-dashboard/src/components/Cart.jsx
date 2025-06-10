import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import CartsTable from '../data/CartsTable';

const Cart = ({onClose}) => {
  return (
    <div className="p-6 flex bg-white rounded-2xl shadow-sm">
     
 <CartsTable/>
    
    <MdOutlineCancel className="bg-red-400 rounded-2xl" onClick={onClose}/>
    
    </div>
  
  )
}

export default Cart