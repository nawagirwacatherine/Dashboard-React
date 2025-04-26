import React,{ useEffect } from 'react'
import "./App.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const activeMenu = true;
  return (
    <>
    <div className="app">
      <BrowserRouter>
      <div className='router1'>

        <div className='router2' style={{zIndex:"1000"}}>
          <button type='button' className='setting-button'>Settings</button>
        </div>

        {
          activeMenu ? (
            <div className='side-bar'>
              sidebar
            </div>
          ): (
            <div className='side-bar1'>
              sidebar
            </div>
          )
        }
      </div>
      </BrowserRouter>
    </div>

   </>
  )
}

export default App
