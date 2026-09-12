import React from 'react';
import { Award, GraduationCap, CheckCircle2, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const getBadgeStyle = (color) => {
    if (color === 'gold') {
      return {
        background: 'rgba(245, 158, 11, 0.15)',
        borderColor: 'rgba(245, 158, 11, 0.4)',
        color: '#fbbf24',
      };
    }
    return {
      background: 'rgba(6, 182, 212, 0.15)',
      borderColor: 'rgba(6, 182, 212, 0.4)',
      color: '#38bdf8',
    };
  };

  const getCardIcon = (id) => {
    switch (id) {
      case 'sbc-marathon': return <Trophy size={28} style={{ color: '#fbbf24' }} />;
      case 'cefet-degree': return <GraduationCap size={28} style={{ color: '#38bdf8' }} />;
      default: return <Award size={28} />;
    }
  };

  return (
    <section id="achievements" className="section bg-grid">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Trajetória Acadêmica</span>
          </div>
          <h2 className="section-title">
            Formação & <span className="gradient-text">Conquistas</span>
          </h2>
          <p className="section-subtitle">
            Destaque em competição de programação competitiva nacional e desempenho acadêmico no CEFET-MG.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {ACHIEVEMENTS.map((item) => {
            const badgeStyle = getBadgeStyle(item.badgeColor);

            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  borderTop: item.id === 'sbc-marathon' ? '3px solid #f59e0b' : '1px solid var(--border-glass)',
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', background: 'rgba(15, 23, 42, 0.9)', border: '1px solid var(--border-glass)' }}>
                      {getCardIcon(item.id)}
                    </div>
                    <span className="section-badge" style={{ margin: 0, ...badgeStyle }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Type */}
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>
                    {item.type} {item.institution && `• ${item.institution}`}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-cyan)', fontWeight: 600, marginBottom: '1rem' }}>
                    {item.date}
                  </div>

                  {/* Description */}
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                        <CheckCircle2 size={16} style={{ color: item.badgeColor === 'gold' ? '#fbbf24' : 'var(--color-cyan)', marginTop: '3px', flexShrink: 0 }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
