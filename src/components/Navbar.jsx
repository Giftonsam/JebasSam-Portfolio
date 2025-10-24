import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
import '../styles/navbar.css'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="navbar">
            <div className="nav-container">
                <div className="logo">Jebas<span>Portfolio</span></div>
                <nav className={`nav-links ${open ? 'open' : ''}`}>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/education">Education</NavLink>
                    <NavLink to="/certifications">Certifications</NavLink>  {/* New link */}
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
                <div className="nav-actions">
                    <DarkModeToggle />
                    <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
                </div>
            </div>
        </header>
    )
}