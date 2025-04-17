import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './components/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}
