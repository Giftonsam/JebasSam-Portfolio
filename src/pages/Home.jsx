import React from "react";
import { PROFILE } from "../data/profile";
import SocialIcons from "../components/SocialIcons";
import "../styles/home.css";
import sam from "../assets/profile.jpeg";

export default function Home() {
    return (
        <section className="home">
            <div className="hero-container">

                {/* Left Section */}
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I’m <span className="highlight">{PROFILE.name}</span>
                    </h1>
                    <h2 className="hero-subtitle">{PROFILE.title}</h2>
                    <p className="hero-tagline">{PROFILE.tagline}</p>

                    <div className="socials-wrapper">
                        <SocialIcons />
                    </div>

                    <div className="hero-cta">
                        <a className="btn primary" href="/projects">View Projects</a>
                        <a className="btn secondary" href={PROFILE.socials.resume} download>
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={sam} alt="Profile" />
                    </div>
                </div>
            </div>
        </section>
    );
}
