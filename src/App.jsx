import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ComoFunciona from './pages/ComoFunciona/ComoFunciona'
import Recursos from './pages/Recursos/Recursos'
import Fornecedores from './pages/Fornecedores/Fornecedores'
import Sobre from './pages/Sobre/Sobre'
import Governanca from './pages/Governanca/Governanca'
import GestaoTI from './pages/GestaoTI/GestaoTI'
import Projeto from './pages/Projeto/Projeto'
import Contato from './pages/Contato/Contato'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/governanca" element={<Governanca />} />
            <Route path="/gestao-ti" element={<GestaoTI />} />
            <Route path="/projeto" element={<Projeto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
