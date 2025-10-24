// ProjectCard.jsx - Individual project card component
import React from 'react';

function ProjectCard({ project }) {
    return (
        <article className="project-card">
            {/* Project Status Badge */}
            <div className={`project-status ${project.status}`}>
                {project.status === 'completed' ? 'Live' :
                    project.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
            </div>

            {/* Project Image/Icon Area */}
            <div className="project-image">
                {project.title.charAt(0)}
            </div>

            {/* Project Content */}
            <div className="project-content">
                <h3>{project.title}</h3>

                {/* Technology Stack */}
                <div className="stack">
                    {project.stack.join(' • ')}
                </div>

                <p className="desc">{project.description}</p>

                {/* Tags */}
                <div className="tags">
                    {project.tags?.map((tag, idx) => (
                        <span key={idx} className="tag">#{tag}</span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="actions">
                    {project.live && project.live !== "#" && (
                        <a
                            className="btn"
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.repo && (
                        <a
                            className="btn btn-outline"
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;