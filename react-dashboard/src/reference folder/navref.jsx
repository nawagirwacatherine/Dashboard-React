




import {useRef } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../Navbar.css'
import { TfiMenu } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";
import { TbCircleDottedLetterK } from "react-icons/tb";




const Navbar = () => {


  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
  
    <div className='navbar'>

      <div> <TbCircleDottedLetterK className='log' /></div>
       
        <TfiMenu onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
        <RiCloseLine onClick={closeMenu}  className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link'  href='#home'><p >Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portifolio</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
            </ul>


        <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect with Me</p></AnchorLink></div>
    </div>
  )
}

export default Navbar