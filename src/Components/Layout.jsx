import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const Layout = ({search}) => {
  return (
   <>
   
   <Navbar search={search}/>
   <Outlet></Outlet>
   </>
  )
}

export default Layout
