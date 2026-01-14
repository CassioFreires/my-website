import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Technologies from './pages/Technologies/Technologies';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import MainLayout from './components/Layouts/MainLayout';
import AboutUs from './pages/OboutUs/AboutUs';

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<AboutUs />} />
        <Route path='/tecnologias' element={<Technologies />} />
        <Route path='/contato' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />

      </Route>
    </Routes>
  )
}

export default App
