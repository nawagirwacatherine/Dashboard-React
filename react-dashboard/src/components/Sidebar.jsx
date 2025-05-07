import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from  'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 
// import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='side-bar'>

      {activeMenu && (<>
      <div className='items'>
        <Link to="/" onClick={() => {}} className='shopware' data-tooltip-id="dashboard-tooltip">
       < SiShopware /> <span>Shoppy</span> 
        </Link>

        <Tooltip id="dashboard-tooltip" 
        render={() => (
          <button onClick={() => alert('clicked!')}
          
          style={{
            background: 'transparent',
            border: 'none',
            color: 'red',
            fontSize: '1.2rem',
            cursor: 'pointer'
            
          }}><MdOutlineCancel/></button>
        )}
        />
      </div>
      </>)}
    </div>
  )
}

export default Sidebar