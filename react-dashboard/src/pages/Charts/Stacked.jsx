
import { useStateContext } from '@/contexts/ContextProvider'
import React from 'react'

const Stacked = () => {

  const {isActive} = useStateContex();
  return (
    <div>Stacked
{isActive ? (
  <div>sideBar</div>
):(
  <div></div>
)}

    </div>

  )
}

export default Stacked

