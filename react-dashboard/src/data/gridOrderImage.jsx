
import React from 'react'

const gridOrderImage = (props) => {
  return (
     <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      src={props.ImageUrl} // use your actual image field
      alt="Order"
      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
    />
  </div>

  )
}

export default gridOrderImage



 