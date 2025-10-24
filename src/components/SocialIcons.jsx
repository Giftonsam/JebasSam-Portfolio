import React from 'react'
import { PROFILE } from '../data/profile'

export default function SocialIcons({ className = '' }) {
    const S = PROFILE.socials
    return (
        <div className={`socials ${className}`}>
            <a href={S.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={S.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
            <a href={S.instagram_personal} target="_blank" rel="noreferrer" aria-label="Instagram (Personal)">IG</a>
            <a href={S.instagram_official} target="_blank" rel="noreferrer" aria-label="Instagram (Official)">IG★</a>
            <a href={S.netlify} target="_blank" rel="noreferrer" aria-label="Netlify">N</a>
            <a href={S.resume} download aria-label="Resume PDF">CV</a>
        </div>
    )
}
