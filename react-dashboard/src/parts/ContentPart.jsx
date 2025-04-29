import React from 'react'
import './content.css'
import {FiSettings  } from "react-icons/fi";

const ContentPart = () => {
  return (
    <>
    <div>
    content part
    <div className='settings'>
    
      <button className='settings-button'><FiSettings /></button>
      </div>
      </div>
    </>
  )
}

export default ContentPart