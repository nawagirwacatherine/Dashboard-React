import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const LeftPart = () => {
  return (
    <div>
      <Router>
        <Routes>
          
           {/* Dashboard */}
           <Route path="/" element="Ecommerce"/>
           <Route path="./ecommerce" element="./Ecommerce" />

           {/* pages */}
           <Route path="./orders" element="./Orders" />
           <Route path="./employees" elements="./Employees" />
           <Route path="./customers" element="./Customers" />

           {/* Apps */}

           <Route path="./kanban" element="./Kanban" />
           <Route  path="./editor" element="./Editor"/>
           <Route path="./calender" element="./Calender"/>
           <Route path="./color-picker" element="./ColorPicker" />
           <Route />
           <Route />
         
        </Routes>
      </Router>
    </div>
  )
}

export default LeftPart;