import React,{ useEffect } from 'react'
import {useRef } from 'react';
import "./App.css"
import "./Sidebar.jsx"
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  
  // const menuRef = useRef();

  // const sideBar = () => {
  //   menuRef.current.style.right = "0";
  // }

  // const navBar = () => {
  //   menuRef.current.style.right = "-350px"

  // }
  return (
    <>
    <div className="app">
      <BrowserRouter>
      <div className='router1'>

        {/* <div className='router2' style={{zIndex:"1000"}}>
          <button type='button' className='setting-button'>Settings</button>
        </div>


          <div className="nav">
            <div> */}
                    {/* <TfiMenu onClick={sideBar} className='side-bar' /> */}

                    </div>

                    <div>
                    
                    {/* <RiCloseLine onClick={navBar}  className='navbar'/> */}

                    {/* </div>
          </div> */}

        </div>
      </BrowserRouter>
    </div>

   </>
  )
}

export default App
