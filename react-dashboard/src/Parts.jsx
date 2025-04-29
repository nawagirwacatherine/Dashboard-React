import React from 'react'
import LeftPart from './parts/LeftPart'
import Searchpart from './parts/Searchpart'
import ContentPart from './parts/ContentPart'




const Parts = () => {
  return (
    <div>
        <LeftPart/>
        <Searchpart />
        <ContentPart/>
    </div>
  )
}

export default Parts