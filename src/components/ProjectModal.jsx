import React from 'react';
import { X, Database, Rocket, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            background: 'rgba(15, 23, 42, 0.95)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className="section-badge" style={{ margin: 0 }}>
                {project.category}
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {project.organization} • {project.period}
              </span>
            </div>
            <h2 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 800 }}>{project.title}</h2>
            <p style={{ color: 'var(--color-cyan)', fontSize: '0.92rem', fontWeight: 500, marginTop: '0.2rem' }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-sub)',
              borderRadius: 'var(--radius-md)',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          
          {/* Key Points Grid */}
          <div>
            <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              Pontos Principais do Projeto
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {project.impactMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(6, 182, 212, 0.06)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                  }}
                >
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)', marginTop: '0.2rem' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objective */}
          <div style={{ background: 'rgba(30, 41, 59, 0.5)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-glass)' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Rocket size={18} style={{ color: 'var(--color-amber)' }} />
              <span>Objetivo do Projeto</span>
            </h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', lineHeight: 1.65 }}>
              {project.problem}
            </p>
          </div>

          {/* Development / Solution */}
          <div style={{ background: 'rgba(30, 41, 59, 0.5)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-glass)' }}>
            <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} style={{ color: 'var(--color-cyan)' }} />
              <span>Como está sendo Desenvolvido / Metodologia</span>
            </h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1rem' }}>
              {project.solution}
            </p>

            {project.architecture && (
              <div>
                <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  Detalhamento & Contribuições:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.architecture.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-sub)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--color-emerald)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Technologies Badges */}
          <div>
            <h4 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Tecnologias & Ferramentas
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.models.map((tech, idx) => (
                <span key={idx} className="tech-badge highlight" style={{ fontSize: '0.82rem', padding: '0.3rem 0.65rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
