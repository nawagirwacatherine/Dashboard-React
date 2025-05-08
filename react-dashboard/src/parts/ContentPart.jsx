import React from 'react'
import './content.css'
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import {FiSettings  } from "react-icons/fi";

const ContentPart = () => {
  return (
    <>

<div className="content-display">
      <Outlet /> {/* This is where your pages like Ecommerce, Orders, etc. will render */}
    </div>
    <div>
 
    <div className='settings'>
    
      <button className='settings-button'><FiSettings /></button>
      </div>
      </div>
    </>
  )
}

export default ContentPart