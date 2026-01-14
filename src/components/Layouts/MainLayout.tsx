import { Outlet } from 'react-router-dom'
import Navbar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import ParticlesBackground from '../Background/ParticlesBackground'

export default function MainLayout() {
  return (
    <>
      <ParticlesBackground/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
