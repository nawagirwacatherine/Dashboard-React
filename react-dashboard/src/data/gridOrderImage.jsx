
import React from 'react'
import avatar from "./avatar.jpg";

const gridOrderImage = () => {
  return (
     <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      src={avatar} 
      alt="Order"
      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
    />
  </div>

  )
}

export default gridOrderImage



 