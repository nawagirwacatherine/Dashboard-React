import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FiSettings  } from "react-icons/fi";
import { Orders, Stacked, Pyramid, Area, Bar, Pie, Financial,ColorMapping, } from "./pages";
import {Ecommerce, Calender, ColorPicker, Customers, Editor, Employees, Kanban} from './pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { FiSearch, FiShoppingCart,  FiMail,   } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { IoMenu } from "react-icons/io5";

const App = () => {
  return (
    <>
    <Router>
    <div className='flex-item-center gap-20'>
 <div>
     <div className='search'>
            <div className='menu-search'>
            <button className='menu-button'><IoMenu/></button>
            <FiSearch />
            </div>
    
            <div className='profile'>
            <FiShoppingCart />
              <FiMail />
              <TfiBell />
            </div>
              
    <div className='settings'>
    
      <button className='settings-button'
       data-tooltip-id="settings-tooltip"
  data-tooltip-content="Settings"
  >
    <FiSettings className='color-red' /></button>

      <Tooltip id="settings-tooltip" place="top" />
      </div>
            
        </div>

</div>

      
 
              
    
      <div className='content'>
    < Sidebar/>
    <Navbar/>
    

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




      
       </div>
       </Router>
    </>
  )
}

export default App;