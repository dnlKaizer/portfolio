import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#04070f',
        borderTop: '1px solid var(--border-glass)',
        padding: '3rem 0 2rem 0',
        color: 'var(--text-muted)',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <Code2 size={18} />
            </div>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>
              Danilo Fróis Kaizer
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-sub)' }} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-sub)' }} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: 'var(--text-sub)' }} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
          >
            <ArrowUp size={16} />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border-glass)' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem' }}>
          <div>
            © {new Date().getFullYear()} Danilo Fróis Kaizer. CEFET-MG • CR 94,5 • Finalista Maratona SBC 2026.
          </div>
          <div>
            Desenvolvido com React + Vite & Vanilla CSS Design System.
          </div>
        </div>

      </div>
    </footer>
  );
}
