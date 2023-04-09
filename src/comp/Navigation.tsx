import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

export default function Navigation() {
  const location = useLocation();
  return (
    <div className='navs'>
      <span>Logo</span>
      <NavLink to={'/classes'} key={'classes'} className={location.pathname === "/classes" ? 'active': ""}>Classes</NavLink>
      <NavLink to={'/students'} key={'students'} className={location.pathname === "/students" ? 'active': ""}>Student</NavLink>
      <NavLink to={'/groups'} key={'groups'} className={location.pathname === "/groups" ? 'active': ""}>Groups</NavLink>
    </div>
  )
}