import React from 'react';
import { BrainCircuit, Calculator, Award, Sparkles, GraduationCap } from 'lucide-react';
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
            Perfil Acadêmico & <span className="gradient-text">Motivação Profissional</span>
          </h2>
          <p className="section-subtitle">
            Estudante de Engenharia de Computação no CEFET-MG, buscando oportunidade de estágio para colocar em prática meus estudos em Ciência de Dados e Desenvolvimento de Software.
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
                <BrainCircuit size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Ciência de Dados & Machine Learning
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Estudo prático de análise exploratória, tratamento de dados com Pandas e aplicação de algoritmos de aprendizado de máquina com Scikit-learn.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--color-amber)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <Award size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Lógica de Programação & Maratona SBC
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Finalista da Maratona de Programação da SBC 2026. Resolução de problemas de lógica, grafos e estruturas de dados em Java.
                </p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-emerald)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                <Calculator size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: '#fff' }}>
                  Base em Matemática & Monitoria
                </h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Atuação como monitor bolsista de Geometria Analítica e Álgebra Linear no CEFET-MG, com boa facilidade em raciocínio quantitativo e matrizes.
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
