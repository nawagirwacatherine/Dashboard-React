import React, { useState } from 'react'
import "./Parts.css"
import LeftPart from './parts/LeftPart'
import Searchpart from './parts/Searchpart'
import ContentPart from './parts/ContentPart'




const Parts = () => {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className='parts'>
      {
        sidebarOpen && (
          <div className='left-part'><LeftPart onClose ={() => setSidebarOpen(false)} /></div>
          
        )
      }

     
        

        <div className='search-bar'><Searchpart onMenuClick = {() => setSidebarOpen (!sidebarOpen)} /></div>
        
        <div className='content-part'><ContentPart/></div>
        </div>
        
        

  )
}

export default Parts