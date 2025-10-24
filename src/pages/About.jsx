import React from 'react'
import { PROFILE } from '../data/profile'
import '../styles/about.css'

export default function About() {
    return (
        <section className="about">
            <div className="about-header">
                <h2>About Me</h2>
                <p className="about-intro">
                    I’m a <strong>Full-Stack Developer</strong> focusing on Java (Core/Advanced), Spring Boot,
                    React (Vite), and MySQL. I enjoy building clean UIs and robust backends,
                    and I’m currently integrating real-world flows like payments and deployments.
                </p>
            </div>

            {/* Info cards */}
            <div className="about-grid">
                <div className="about-card">
                    <h3>Location</h3>
                    <p>{PROFILE.location}</p>
                </div>
                <div className="about-card">
                    <h3>Email</h3>
                    <p>
                        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                    </p>
                </div>
                <div className="about-card">
                    <h3>Phone</h3>
                    <p>
                        <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="skills">
                <h3>Skills</h3>
                <ul className="skill-list">
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>REST APIs</li>
                    <li>React</li>
                    <li>Vite</li>
                    <li>Axios</li>
                    <li>MySQL</li>
                    <li>Git & GitHub</li>
                    <li>Netlify</li>
                </ul>
            </div>
        </section>
    )
}
