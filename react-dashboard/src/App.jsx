import React from 'react'
import Parts from "./Parts.jsx"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Orders, Stacked, Pyramid, Area, Bar, Pie, Financial,ColorMapping,Line } from './pages';
import {Ecommerce, Calender, ColorPicker, Customers, Editor, Employees, Kanban} from './pages';


const App = () => {
  return (
    
         
       <Router>
       < Parts/>

<Routes>
  
   {/* Dashboard */}
   <Route path="/" element={<Ecommerce />}/>
   <Route path="/ecommerce" element={<Ecommerce/>} />

   {/* pages */}
   <Route path="/orders" element={<Orders/>}/>
   <Route path="/employees" elements={<Employees/>} />
   <Route path="/customers" element={<Customers />}/>

   {/* Apps */}

   <Route path="/kanban" element={<Kanban/>} />
   <Route  path="/editor" element={<Editor/>}/>
   <Route path="/calender" element={<Calender/>}/>
   <Route path="/color-picker" element={<ColorPicker/>}/>

   {/* charts */}
   <Route path="/line" element={<Line/>}/>
   <Route path="/area" element={<Area/>} />
   <Route path="/bar" element={<Bar/>} />
   <Route path="/pie" element={<Pie/>}/>
   <Route path="/financial" element={<Financial/>} />
   <Route path="/color-mapping" element={<ColorMapping/>} />
   <Route path="/pyramid" element={<Pyramid/>} />
   <Route path="/stacked" element={<Stacked/>}/>

   
 
</Routes>
</Router>
    
  )
}

export default App
