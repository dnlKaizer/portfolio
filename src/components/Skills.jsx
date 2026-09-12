import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { BrainCircuit, Code2, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit size={24} className="gradient-text-cyan" />;
      case 'Code2': return <Code2 size={24} style={{ color: 'var(--color-violet)' }} />;
      case 'Layers': return <Layers size={24} style={{ color: 'var(--color-emerald)' }} />;
      default: return <Sparkles size={24} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Ferramentas & Linguagens</span>
          </div>
          <h2 className="section-title">
            Conhecimentos <span className="gradient-text">Técnicos</span>
          </h2>
          <p className="section-subtitle">
            Hard skills, linguagens de programação e tecnologias estudadas e aplicadas em projetos.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)' }}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>{cat.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{cat.description}</p>
                  </div>
                </div>

                <hr style={{ border: 'none', borderTop: '1px solid var(--border-glass)', margin: '1.25rem 0' }} />

                {/* Skill Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cat.skills.map((skill, idx) => (
                    <div key={idx} style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-cyan)', flexShrink: 0 }} />
                        <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.98rem' }}>
                          {skill.name}
                        </span>
                      </div>

                      {/* Skill Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {skill.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="tech-badge" style={{ fontSize: '0.78rem' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
