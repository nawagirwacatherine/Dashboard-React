import React from 'react'
import "./Parts.css"
import LeftPart from './parts/LeftPart'
import Searchpart from './parts/Searchpart'
import ContentPart from './parts/ContentPart'




const Parts = () => {
  return (
    <div className='parts'>

        <div className='left-part'><LeftPart/></div>
        
        <div className='search-bar'><Searchpart /></div>
        
        <div className='content-part'><ContentPart/></div>
        
    </div>
  )
}

export default Parts