import React, { useState, useEffect } from 'react';
import { Code2, Download, Github, Linkedin, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Conhecimentos', href: '#skills' },
    { name: 'Conquistas', href: '#achievements' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(7, 10, 18, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-main)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)',
            }}
          >
            <Code2 size={22} />
          </div>
          <div>
            <span>Danilo</span>
            <span style={{ color: 'var(--color-cyan)', marginLeft: '4px' }}>Kaizer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-sub)',
                textDecoration: 'none',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-cyan)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-sub)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.85rem' }} className="desktop-nav">
          <a
            href="/Curriculo_Danilo_Frois_Kaizer.pdf"
            download="Curriculo_Danilo_Frois_Kaizer.pdf"
            className="btn btn-outline"
            style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Download size={16} />
            <span>Baixar Currículo PDF</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-sub)', display: 'flex', alignItems: 'center', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-sub)')}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-sub)', display: 'flex', alignItems: 'center', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-sub)')}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.98)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <a
              href="/Curriculo_Danilo_Frois_Kaizer.pdf"
              download="Curriculo_Danilo_Frois_Kaizer.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Download size={18} />
              <span>Baixar Currículo PDF</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 850px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
