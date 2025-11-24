import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='pt-20'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
