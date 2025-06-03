import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FiSettings  } from "react-icons/fi";
import { Orders, Stacked, Pyramid, AreaChartCard, Bar, Pie, Financial,ColorMapping, Line } from "./pages";
import {Ecommerce, Calender, ColorPicker, Customers, Editor, Employees, Kanban} from './pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {useStateContext} from './contexts/ContextProvider';
import { useState } from 'react';

const App = () => {

  const {activeMenu} = useStateContext();
  const [themeSettingsOpen, setThemeSettingsOpen] = useState(false);
  return (
    <>
    
    <Router>
      
    <div className='flex relative dark:bg-main-dark-bg'>
       <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
    
      <button type='button' className='text-3xl p-3 hover:drop-shadow-xl
      hover:bg-light-gray text-white ' style={{ background:'green', borderRadius:'50%'}}
       data-tooltip-id="settings-tooltip"
  data-tooltip-content="Settings"
  onClick={() => setThemeSettingsOpen(true)}
  >
    <FiSettings /></button>

      <Tooltip id="settings-tooltip" place="top" />
      </div>

      
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
           < Sidebar/>
          </div>
        ):(
         <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar/></div>
        )
      }

      <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full${activeMenu ? ' md:ml-72' : 'flex-2'}`}>

        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
          <Navbar/>
        </div>

<div>     


  <ThemeSettings open={themeSettingsOpen} onClose={ () =>setThemeSettingsOpen(false)}/>

<Routes>


   {/* Dashboard */}
   <Route path="/" element={<Ecommerce />}/>
   <Route path="/ecommerce" element={<Ecommerce/>} />




   {/* pages */}
   <Route path="/orders" element={<Orders/>}/>
   <Route path="/employees" element={<Employees/>} />
   <Route path="/customers" element={<Customers />}/>




   {/* Apps */}
   <Route path="/kanban" element={<Kanban/>} />
   <Route  path="/editor" element={<Editor/>}/>
   <Route path="/calender" element={<Calender/>}/>
   <Route path="/colorpicker" element={<ColorPicker/>}/>



   {/* charts */}
    <Route path="/line" element={<Line/>}/>
   <Route path="/areachartcard" element={<AreaChartCard/>} />
   <Route path="/bar" element={<Bar/>} />
   <Route path="/pie" element={<Pie/>}/>
   <Route path="/financial" element={<Financial/>} />
   <Route path="/colormapping" element={<ColorMapping/>} />
   <Route path="/pyramid" element={<Pyramid/>} />
   <Route path="/stacked" element={<Stacked/>}/>
   
 
</Routes>
</div>
 </div>
      </div>
       </Router>
    </>
  )
}

export default App;