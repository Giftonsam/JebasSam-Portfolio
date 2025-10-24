// Projects.jsx - Main projects component
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import '../styles/projects.css';

export default function Projects() {
    return (
        <section className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Here are some of the projects I've worked on recently
                </p>

                <div className="project-grid">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}