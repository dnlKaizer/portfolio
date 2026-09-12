import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section bg-grid" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Canais Diretos</span>
          </div>
          <h2 className="section-title">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="section-subtitle">
            Estou disponível para entrevistas e oportunidades de <strong>Estágio em Ciência de Dados ou Desenvolvimento de Software</strong>.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Main Email Card */}
          <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-cyan)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              E-mail Principal
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(6, 182, 212, 0.15)', color: 'var(--color-cyan)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                    {PERSONAL_INFO.email}
                  </span>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
                    Disponível para contatos sobre vagas de estágio
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}
              >
                {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                <span>{copiedEmail ? 'E-mail Copiado!' : 'Copiar E-mail'}</span>
              </button>
            </div>
          </div>

          {/* Social & Platform Links Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '1.5rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                  <Linkedin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>LinkedIn</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>danilo-kaizer</div>
                </div>
              </div>
              <ArrowUpRight size={20} style={{ color: 'var(--color-cyan)' }} />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: '1.5rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.1)', color: '#fff' }}>
                  <Github size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GitHub</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>dnlKaizer</div>
                </div>
              </div>
              <ArrowUpRight size={20} style={{ color: 'var(--color-cyan)' }} />
            </a>

            {/* Location */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-emerald)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Localização</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
