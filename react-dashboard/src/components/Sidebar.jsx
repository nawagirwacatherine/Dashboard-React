import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from  'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
// import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='side-bar'>

      {activeMenu && (<>
      <div className='items'>
        <Link to="/" onClick={() => {}} className='shopware' data-tip="Go to dashboard">
       < SiShopware /> <span>Shoppy</span> 
        </Link>

        <Tooltip id="my-tooltip" />
      </div>
      </>)}
    </div>
  )
}

export default Sidebar