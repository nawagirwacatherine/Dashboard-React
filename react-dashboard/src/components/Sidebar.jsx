import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
// import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;

  return (
    <nav className="sidebar">
      {activeMenu && (
        <div className="items">
          <Link
            to="/"
            className="shopware"
            data-tooltip-id="dashboard-tooltip"
            data-tooltip-content="Dashboard"
          >
            <SiShopware /> <span>Shoppy</span>
          </Link>
          <Tooltip id="dashboard-tooltip" />
        </div>
      )}

      <ul>
        {links.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'active-link' : 'normal-link'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;