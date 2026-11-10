import React, { useState } from 'react';
import { Rocket, ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section bg-grid">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Rocket size={14} />
            <span>Engenharia, Sistemas & Dados</span>
          </div>
          <h2 className="section-title">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="section-subtitle">
            Arquitetura de sistemas, compiladores, aplicações fullstack em tempo real, modelagem preditiva em Machine Learning e telemetria IoT.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Top Badge & Org */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span className="section-badge" style={{ margin: 0, fontSize: '0.75rem' }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.organization}
                  </span>
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--color-cyan)', fontSize: '0.88rem', fontWeight: 500, marginBottom: '1rem' }}>
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.summary}
                </p>

                {/* Tech Highlight Callout */}
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.25rem',
                    fontSize: '0.85rem',
                    color: '#e2e8f0',
                  }}
                >
                  <strong style={{ color: 'var(--color-cyan)', display: 'block', marginBottom: '2px' }}>
                    Destaque Técnico:
                  </strong>
                  {project.techHighlight}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.models.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Details & GitHub CTA */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-glass)',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-cyan)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                    }}
                  >
                    <span>Ver Detalhes</span>
                    <ArrowUpRight size={18} />
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn btn-outline"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)' }}
                    >
                      <Github size={15} />
                      <span>Repositório</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
