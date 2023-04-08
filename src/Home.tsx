import React, {useEffect} from 'react';
import Navigation from './comp/Navigation';
import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import './Home.css'


export default function Home() {

  const loaction = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(loaction.pathname === "/"){
      navigate('/students')
    }
  },[]);

  return (
    <div className='Container'>
      <Navigation />
      <Outlet />
    </div>
  )
}