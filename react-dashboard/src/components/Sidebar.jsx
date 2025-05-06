import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from  'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='side-bar'>

      {activeMenu && (<>
      <div className='items'>
        <Link to="/" onClick={() => {}} className='shopware'>
       < SiShopware /> <span>Shoppy</span> 
        </Link>
      </div>
      </>)}
    </div>
  )
}

export default Sidebar