 import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footers from '../Footers/Footers'
 
 const Layout = () => {
   return (
     <div>
       <Navbar/>
       <Outlet/>
       <Footers/>
     </div>
   )
 }
 
 export default Layout
 