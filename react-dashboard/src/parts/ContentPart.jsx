import React from 'react'
import './content.css'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FiSettings  } from "react-icons/fi";
import { Orders, Stacked, Pyramid, Area, Bar, Pie, Financial,ColorMapping, } from "../pages";
import {Ecommerce, Calender, ColorPicker, Customers, Editor, Employees, Kanban} from '../pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

const ContentPart = () => {
  return (
    <>

<div className="content-display">
      <Outlet /> {/* This is where your pages like Ecommerce, Orders, etc. will render */}
    </div>
    <div>

              
    <Router>
      <div>
    

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
   <Route path="/area" element={<Area/>} />
   <Route path="/bar" element={<Bar/>} />
   <Route path="/pie" element={<Pie/>}/>
   <Route path="/financial" element={<Financial/>} />
   <Route path="/color-mapping" element={<ColorMapping/>} />
   <Route path="/pyramid" element={<Pyramid/>} />
   <Route path="/stacked" element={<Stacked/>}/>

   
 
</Routes>
</div>
</Router>
 
    <div className='settings'>
      <Tooltip  content= 'settings' position= 'top'>
    
      <button className='settings-button'><FiSettings /></button>

      </Tooltip>
      </div>
      </div>
    </>
  )
}

export default ContentPart