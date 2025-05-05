import React from 'react'
import './content.css'

import { BrowserRouter as Router} from 'react-router-dom'
import {FiSettings  } from "react-icons/fi";

const ContentPart = () => {
  return (
    <>
    <div>
    <Router>
    <div className='settings'>
    
      <button className='settings-button'><FiSettings /></button>
      </div>
      </Router>
      </div>
    </>
  )
}

export default ContentPart