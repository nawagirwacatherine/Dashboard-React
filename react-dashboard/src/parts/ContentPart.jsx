import React from 'react'
import './content.css'
import {FiSettings  } from "react-icons/fi";

const ContentPart = () => {
  return (
    <>
    <div>
    <div className='settings' style={{zIndex:"1000"}}>
      <button className='settings-button'><FiSettings /></button>
      </div>
      </div>
    </>
  )
}

export default ContentPart