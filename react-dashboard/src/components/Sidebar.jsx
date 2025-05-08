import React from 'react'
import { NavLink, Link  } from 'react-router-dom';

import { SiShopware } from  'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; 


const Sidebar = () => {
  const activeMenu = true;

  const links =[
    { to: '/ecommerce' , label: 'Dashboard' },
    { to: '/orders', label:'Orders'},
    { to: '/employees', label: 'Employees'},
    { to: '/customers', label:'Customers'},
    { to: '/kanban', label:'Kanban' },
    { to: '/editor', label: '/Editor'},
    { to: '/calender', label: '/Calender'},
    { to: '/color-picker', label: 'Color Picker' },
{ to: '/line', label: 'Line Chart' },
{ to: '/area', label: 'Area Chart' },
{ to: '/bar', label: 'Bar Chart' },
{ to: '/pie', label: 'Pie Chart' },
{ to: '/financial', label: 'Financial Chart' },
{ to: '/color-mapping', label: 'Color Mapping' },
{ to: '/pyramid', label: 'Pyramid Chart' },
{ to: '/stacked', label: 'Stacked Chart' },
  ];
  return (
    <>
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


<nav className="sidebar">
<ul>
  {links.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        className={({ isActive }) =>
          isActive ? 'active-link' : 'normal-link'
        }
      >
        {link.label}
      </NavLink>
    </li>
  ))}
</ul>
</nav>
</>
  )
}

export default Sidebar