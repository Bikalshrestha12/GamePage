import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import NavBar from './NavBar'

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AdminLayout
