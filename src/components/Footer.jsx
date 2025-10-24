import React from 'react'
import '../styles/footer.css'
import { PROFILE } from '../data/profile'
import SocialIcons from './SocialIcons'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Social icons */}
                <SocialIcons className="footer-socials" />

                {/* Footer text */}
                <div className="footer-meta">
                    <p>© {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
                    
                </div>
            </div>
        </footer>
    )
}
