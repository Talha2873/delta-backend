import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Expertise from './pages/Expertise'
import Contact from './pages/Contact'
import DeltaAssistant from './components/DeltaAssistant'
import './App.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) setMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/expertise', label: 'Expertise' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center font-black text-white text-sm tracking-tight">Δ</div>
          <span className="font-black text-white text-lg tracking-tight leading-none">DELTA<span className="text-orange-500">-</span>DEVELOPERS</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-orange-400 ${location.pathname === l.to ? 'text-orange-400' : 'text-white/70'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-200 hover:scale-105">
            Hire Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-sm font-bold tracking-widest uppercase">
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-6 pb-8 pt-4 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`text-sm font-bold tracking-widest uppercase ${location.pathname === l.to ? 'text-orange-400' : 'text-white/70'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2 px-5 py-3 bg-orange-600 text-white text-sm font-bold tracking-widest uppercase rounded-full text-center">
            Hire Us
          </Link>
        </div>
      )}
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-700 flex items-center justify-center font-black text-white text-xs">Δ</div>
          <span className="font-black text-white tracking-tight">DELTA<span className="text-orange-500">-</span>DEVELOPERS</span>
        </div>
        <p className="text-white/40 text-sm text-center">© 2025 Delta-Developers. All rights reserved.</p>
        <div className="flex gap-6">
          {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
            <a key={s} href="#" className="text-white/40 hover:text-orange-400 text-sm font-medium transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* ── Delta Assistant — renders on every page, above everything ── */}
        <DeltaAssistant />
      </div>
    </Router>
  )
}