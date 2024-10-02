import React from 'react'
import Header from './Header'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footerpart from './Footerpart'

const Layout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footerpart/>
    
    </>
  )
}

export default Layout
