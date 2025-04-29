import React from 'react'
import "./search.css"
import { FiSearch, FiShoppingCart,  FiMail,    } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";

const Searchpart = () => {
  return (
    <div className='search'>
        <div className='menu-search'>
        <IoMenu/>
        <FiSearch />
        </div>

        <div className='profile'>
        <FiShoppingCart />
          <FiMail />
          <TfiBell />
        </div>
         
        
    </div>
  )
}

export default Searchpart