import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Certifications from './pages/Certifications'  // New import
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  )
}

export default App