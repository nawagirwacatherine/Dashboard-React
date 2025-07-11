import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import  avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect } from 'react';



   const NavButton = ({title, customFunc, icon, color, dotColor }) => (
    
     <>
    <button type="button" onClick={customFunc}
    style={{color}}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    data-tooltip-id="dashboard-tooltip"
            data-tooltip-content={title}
            position="BottomCenter"
            >
              < span style={{background:dotColor}}
              className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
              />
              { icon }
            </button>
             <Tooltip id="dashboard-tooltip" />
             </>

            
   )

const Navbar = () => {

  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    closeComponent, 
  } = useStateContext();

    useEffect(() => {
     const handleResize = () => setScreenSize (window.innerWidth);

     window.addEventListener('resize',handleResize)
     handleResize();

     return () => window.removeEventListener
     ('resize', handleResize);
    }, []);

    useEffect(() => {
      if (screenSize <= 900){
        setActiveMenu(false);
      }
      else {
        setActiveMenu(true)
      }
    }, [screenSize]);

  

  return (
    
    <div className='flex justify-between p-2 md:mx-6 relative '>
    <NavButton title="Menu" customFunc = {() => setActiveMenu((prevActiveMenu) =>!prevActiveMenu)} color='blue' icon ={< AiOutlineMenu /> } />

    <div className='flex  justify-between'>
      <div>
     <NavButton title="Cart"
      customFunc = {() => handleClick('cart')}
       color='blue' 
       icon ={< FiShoppingCart /> } />
       </div>

         <div>
            <NavButton title="Chat"
            
      customFunc = {() => handleClick('chat')}
       color='blue' 
       icon ={< BsChatLeft /> } />
       </div>

  <div>
            <NavButton title="Notification"
      customFunc = {() => handleClick('notification')}
       color='blue' 
       icon ={< RiNotification3Line /> } />
        </div> 
       

    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'

     data-tooltip-id="dashboard-tooltip"
            data-tooltip-content="Profile"
            position="BottomCenter"
    onClick={() => handleClick('userProfile')}>
      <img className='rounded-full w-8 h-8 ' src={avatar }/>
      <p>
        <span className='text-gray-400 text-14'>Hello,</span>{''}
        <span className='text-gray-400 font-bold ml-1 text-14'>Katie</span>
      </p>

      <MdKeyboardArrowDown className='text-gray-400 text-14'/>

    </div>
     <Tooltip id="dashboard-tooltip" />
     <div className="relative">

     {isClicked.cart &&( 

      <div className="absolute right-0 mt-2 w-64 z-50">
        <Cart  onClose={closeComponent}/>

      </div>)}

      {isClicked.chat && (
         <div className="absolute right-0 mt-2 w-64 z-50">
        <Chat onClose={closeComponent}/>
        </div>
        )}
       {isClicked.notification && (
         <div className="absolute right-0 mt-2 w-64 z-50">
        <Notification onClose={closeComponent}/>
        </div>
      )}

        



        {isClicked.userProfile && (
          
          <div className="absolute right-0 mt-2 w-64 z-50">
          <UserProfile onClose={closeComponent}/>
       </div>
      
      )}

        </div>
       
    </div>
    </div>
  )
}

export default Navbar

