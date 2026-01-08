import { Outlet } from 'react-router-dom'
import Navbar from './NavBar/NavBar'
import Footer from './Footer/Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
