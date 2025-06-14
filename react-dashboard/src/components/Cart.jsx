import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import CartsTable from '../data/CartsTable';

const Cart = ({onClose}) => {
  return (
    <div className=" flex bg-white ">
     
 <CartsTable/>
    <div>
    <MdOutlineCancel className="bg-red-400 rounded-2xl shadow-sm" onClick={onClose}/>
    </div>
    
    </div>
  
  )
}

export default Cart