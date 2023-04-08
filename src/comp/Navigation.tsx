import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

export default function Navigation() {
 
  return (
    <div className='navs'>
      <span>Logo</span>
      <NavLink to={'/classes'} key={'classes'}>Classes</NavLink>
      <NavLink to={'/students'} key={'students'}>Student</NavLink>
      <NavLink to={'/groups'} key={'groups'}>Groups</NavLink>
    </div>
  )
}