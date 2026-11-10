import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Award, GraduationCap, Zap } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="section bg-grid" style={{ paddingTop: '8.5rem', paddingBottom: '4rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        
        {/* Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          
          {/* Left Column: Headlines & CTAs */}
          <div style={{ minWidth: 0 }}>
            {/* Top Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div className="section-badge" style={{ margin: 0, background: 'rgba(6, 182, 212, 0.12)', borderColor: 'rgba(6, 182, 212, 0.4)', color: '#38bdf8' }}>
                <GraduationCap size={15} />
                <span>CR: 94,5 / 100 (CEFET-MG)</span>
              </div>

              <div className="section-badge" style={{ margin: 0, background: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fbbf24' }}>
                <Award size={15} />
                <span>Finalista Nacional (Maratona SBC 2026 - 53º/65)</span>
              </div>

              <div className="section-badge" style={{ margin: 0, background: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.4)', color: '#c084fc' }}>
                <Zap size={15} />
                <span>147º / 965 na 1ª Fase SBC (com menos de 2 meses de treino)</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem', color: '#ffffff' }}>
              Danilo Fróis Kaizer
              <span style={{ display: 'block', marginTop: '0.4rem' }} className="gradient-text">
                Engenharia de Software, Algoritmos & Dados
              </span>
            </h1>

            {/* Subtitle & Professional Objective */}
            <p style={{ color: '#f8fafc', fontSize: '1.12rem', fontWeight: 600, maxWidth: '660px', marginBottom: '0.85rem', lineHeight: 1.6 }}>
              Estudante de Engenharia de Computação no CEFET-MG (CR 94,5/100) e Finalista Nacional da Maratona de Programação da SBC (2026).
            </p>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: '660px', marginBottom: '2.25rem', lineHeight: 1.7 }}>
              {PERSONAL_INFO.targetRole}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Ver Projetos</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/Curriculo_Danilo_Frois_Kaizer.pdf"
                download="Curriculo_Danilo_Frois_Kaizer.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} style={{ color: 'var(--color-cyan)' }} />
                <span>Baixar Currículo PDF</span>
              </a>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Profile Card */}
          <div style={{ minWidth: 0, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
              className="animate-pulse-slow"
            />

            <div className="glass-card" style={{ padding: '1.75rem', position: 'relative', zIndex: 1, borderColor: 'rgba(6, 182, 212, 0.25)' }}>
              {/* Window Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  danilo_kaizer.py
                </div>
              </div>

              {/* Code Snippet Box */}
              <div
                style={{
                  background: 'rgba(7, 10, 18, 0.9)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  lineHeight: '1.6',
                  color: '#e2e8f0',
                  overflowX: 'auto',
                  whiteSpace: 'pre',
                }}
              >
                <span style={{ color: '#8b5cf6' }}>class</span> <span style={{ color: '#38bdf8' }}>DaniloKaizer</span>:<br />
                {"    "}<span style={{ color: '#8b5cf6' }}>def</span> <span style={{ color: '#38bdf8' }}>__init__</span>(self):<br />
                {"        "}self.formacao = <span style={{ color: '#10b981' }}>"Engenharia de Computação - CEFET-MG"</span><br />
                {"        "}self.cr = <span style={{ color: '#fbbf24' }}>94.5</span><br />
                {"        "}self.foco = [<span style={{ color: '#10b981' }}>"Engenharia de Software"</span>, <span style={{ color: '#10b981' }}>"Algoritmos"</span>, <span style={{ color: '#10b981' }}>"Ciência de Dados"</span>]<br />
                {"        "}self.maratona_sbc = <span style={{ color: '#10b981' }}>"Finalista Nacional 2026 (53º/65)"</span><br /><br />
                {"    "}<span style={{ color: '#8b5cf6' }}>def</span> <span style={{ color: '#38bdf8' }}>stack_core</span>(self):<br />
                {"        "}<span style={{ color: '#8b5cf6' }}>return</span> [<span style={{ color: '#38bdf8' }}>"Java"</span>, <span style={{ color: '#38bdf8' }}>"C/C++"</span>, <span style={{ color: '#38bdf8' }}>"Python"</span>, <span style={{ color: '#38bdf8' }}>"Spring Boot"</span>, <span style={{ color: '#38bdf8' }}>"SQL"</span>]
              </div>

              {/* Highlights */}
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.08)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Posicionamento</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-cyan)', marginTop: '2px' }}>Software, Algoritmos & Dados</div>
                </div>

                <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Maratona SBC 2026</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-amber)', marginTop: '2px' }}>Finalista Nacional (53º/65)</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Bar */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '920px',
          }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="metric-box glass-card">
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', flexWrap: 'wrap' }}>
                <span className={`metric-value gradient-text-${stat.color === 'gold' ? 'gold' : 'cyan'}`}>
                  {stat.value}
                </span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)', fontWeight: 600 }}>{stat.suffix}</span>
              </div>
              <span className="metric-label">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
