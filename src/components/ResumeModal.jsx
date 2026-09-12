import React from 'react';
import { X, Download, FileText, CheckCircle2, Award, GraduationCap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '900px', background: '#0b0f19', border: '1px solid var(--border-glass)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.25rem 2rem',
            background: 'rgba(15, 23, 42, 0.95)',
            borderBottom: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={22} style={{ color: 'var(--color-cyan)' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
              Currículo Vitæ - Danilo Fróis Kaizer
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/Danilo_Frois_Kaizer_Curriculo.pdf"
              download="Danilo_Frois_Kaizer_Curriculo.pdf"
              className="btn btn-primary"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
            >
              <Download size={16} />
              <span>Baixar PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-sub)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.45rem',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable / Structured CV View */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Header Info */}
          <div style={{ borderBottom: '1px solid var(--border-glass)', paddingBottom: '1.5rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>{PERSONAL_INFO.name}</h1>
            <p style={{ color: 'var(--color-cyan)', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.2rem' }}>
              {PERSONAL_INFO.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginTop: '0.75rem', fontSize: '0.88rem', color: 'var(--text-sub)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={15} style={{ color: 'var(--color-cyan)' }} /> {PERSONAL_INFO.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={15} style={{ color: 'var(--color-cyan)' }} /> {PERSONAL_INFO.email}
              </span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cyan)', textDecoration: 'none' }}>
                LinkedIn: {PERSONAL_INFO.linkedinTag}
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-cyan)', textDecoration: 'none' }}>
                GitHub: {PERSONAL_INFO.githubTag}
              </a>
            </div>
          </div>

          {/* Resumo Profissional */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', borderLeft: '3px solid var(--color-cyan)', paddingLeft: '0.75rem', marginBottom: '0.75rem' }}>
              Resumo Profissional
            </h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', lineHeight: 1.7 }}>
              {PERSONAL_INFO.summary.join(' ')}
            </p>
          </div>

          {/* Formação & Prêmios */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', borderLeft: '3px solid var(--color-violet)', paddingLeft: '0.75rem', marginBottom: '1rem' }}>
              Formação & Principais Conquistas
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ACHIEVEMENTS.map((a) => (
                <div key={a.id} style={{ background: 'rgba(30, 41, 59, 0.4)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-glass)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>{a.title}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>{a.date}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{a.institution || a.type}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)' }}>{a.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experiência & Case Studies */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#fff', borderLeft: '3px solid var(--color-emerald)', paddingLeft: '0.75rem', marginBottom: '1rem' }}>
              Projetos & Case Studies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PROJECTS.map((p) => (
                <div key={p.id} style={{ background: 'rgba(30, 41, 59, 0.4)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--border-glass)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <strong style={{ color: '#fff', fontSize: '1rem' }}>{p.title}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.period}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginTop: '0.3rem' }}>{p.summary}</p>
                  <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {p.models.map((m, idx) => (
                      <span key={idx} className="tech-badge">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer PDF button */}
          <div style={{ textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
            <a
              href="/Danilo_Frois_Kaizer_Curriculo.pdf"
              download="Danilo_Frois_Kaizer_Curriculo.pdf"
              className="btn btn-primary"
              style={{ padding: '0.75rem 2rem' }}
            >
              <Download size={18} />
              <span>Baixar Arquivo PDF Completo</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
