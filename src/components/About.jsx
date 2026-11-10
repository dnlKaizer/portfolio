import React from 'react';
import { Code2, Calculator, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Sobre Mim</span>
          </div>
          <h2 className="section-title">
            Perfil Técnico & <span className="gradient-text">Engenharia de Software</span>
          </h2>
          <p className="section-subtitle">
            {PERSONAL_INFO.targetRole}
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="about-grid">
          
          {/* Paragraph Narrative Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-cyan)' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                {PERSONAL_INFO.summary[0]}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-violet)' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                {PERSONAL_INFO.summary[1]}
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-emerald)' }}>
              <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.75 }}>
                {PERSONAL_INFO.summary[2]}
              </p>
            </div>
          </div>

          {/* 3 Pillar Cards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(6, 182, 212, 0.15)', color: 'var(--color-cyan)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <Code2 size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Engenharia de Software & Sistemas
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Desenvolvimento de compiladores com geração direta de bytecode JVM (ANTLR4, OW2 ASM), aplicações fullstack em tempo real com Java, Spring Boot e WebSockets, e telemetria IoT.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--color-amber)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <Award size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Algoritmos & Programação Competitiva
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Finalista Nacional da Maratona SBC 2026 (53º/65 no Brasil | 147º/965 na 1ª Fase), responsável pela resolução em Java dos 3 problemas mais difíceis da equipe na final.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-emerald)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <Calculator size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Base Matemática & Ciência de Dados
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Ex-monitor bolsista de Geometria Analítica e Álgebra Linear e pesquisador em Machine Learning, com engenharia de variáveis e modelagem preditiva sobre ~200 mil registros do SiSU.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
