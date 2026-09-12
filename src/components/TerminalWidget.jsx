import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, STATS } from '../data/portfolioData';

export default function TerminalWidget({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: '==================================================', type: 'system' },
    { text: '  DANILO KAISER CLI [Version 2.0.26]', type: 'system' },
    { text: '  Digite "help" para ver os comandos disponíveis.', type: 'system' },
    { text: '==================================================', type: 'system' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `$ ${inputVal}`, type: 'input' }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Comandos disponíveis:', type: 'output' },
          { text: '  about     - Resumo do perfil técnico de Danilo', type: 'output' },
          { text: '  cr        - Exibir Coeficiente de Rendimento (CEFET-MG)', type: 'output' },
          { text: '  sbc       - Informações da Final Nacional Maratona SBC', type: 'output' },
          { text: '  projects  - Listar projetos e estudos de caso de ML/Engenharia', type: 'output' },
          { text: '  skills    - Matriz de habilidades principais', type: 'output' },
          { text: '  contact   - Links de contato, GitHub e E-mail', type: 'output' },
          { text: '  clear     - Limpar terminal', type: 'output' }
        );
        break;

      case 'about':
        newHistory.push(
          { text: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`, type: 'highlight' },
          { text: `Instituição: ${PERSONAL_INFO.institution} (${PERSONAL_INFO.degree})`, type: 'output' },
          { text: `CR: ${PERSONAL_INFO.cr} | Local: ${PERSONAL_INFO.location}`, type: 'output' },
          { text: PERSONAL_INFO.summary[0], type: 'output' }
        );
        break;

      case 'cr':
        newHistory.push(
          { text: `[CR CEFET-MG] Danilo Fróis Kaizer: 94,5 / 100`, type: 'highlight' },
          { text: `Previsão de Formatura: 12/2027 (Engenharia de Computação)`, type: 'output' },
          { text: `Ex-Monitor de Geometria Analítica e Álgebra Linear.`, type: 'output' }
        );
        break;

      case 'sbc':
        newHistory.push(
          { text: `🏆 ${PERSONAL_INFO.sbcMarathon}`, type: 'gold' },
          { text: `Foco: Algoritmos Avançados, Teoria dos Grafos, Otimização e Programação Dinâmica.`, type: 'output' }
        );
        break;

      case 'projects':
        newHistory.push({ text: `Projetos de Destaque:`, type: 'highlight' });
        PROJECTS.forEach((p, idx) => {
          newHistory.push({ text: `  ${idx + 1}. [${p.category}] ${p.title} (${p.organization})`, type: 'output' });
        });
        break;

      case 'skills':
        newHistory.push(
          { text: `• Data Science & ML: Python, XGBoost, Random Forest, Scikit-learn, Feature Eng, Pandas`, type: 'output' },
          { text: `• Backend & Systems: Java, Spring Boot, WebSockets, REST, SQL, Algoritmos SBC`, type: 'output' },
          { text: `• Scientific & Dev: Matlab, TypeScript, Angular, React, Git, ESP32`, type: 'output' }
        );
        break;

      case 'contact':
        newHistory.push(
          { text: `E-mail: ${PERSONAL_INFO.email}`, type: 'output' },
          { text: `LinkedIn: ${PERSONAL_INFO.linkedin}`, type: 'output' },
          { text: `GitHub: ${PERSONAL_INFO.github}`, type: 'output' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({ text: `Comando desconhecido: "${cmd}". Digite "help" para ver comandos válidos.`, type: 'error' });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '750px', background: '#070a12', border: '1px solid var(--color-cyan-glow)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            padding: '0.85rem 1.25rem',
            background: 'rgba(15, 23, 42, 0.95)',
            borderBottom: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <TerminalIcon size={18} style={{ color: 'var(--color-cyan)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#f8fafc', fontWeight: 600 }}>
              danilo@cefet-mg:~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-sub)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div
          style={{
            padding: '1.25rem',
            minHeight: '320px',
            maxHeight: '480px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.86rem',
            lineHeight: 1.6,
          }}
        >
          {history.map((line, i) => {
            let style = { color: 'var(--text-sub)' };
            if (line.type === 'system') style = { color: 'var(--text-muted)' };
            if (line.type === 'input') style = { color: 'var(--color-cyan)', fontWeight: 'bold' };
            if (line.type === 'highlight') style = { color: '#38bdf8', fontWeight: 'bold' };
            if (line.type === 'gold') style = { color: '#fbbf24', fontWeight: 'bold' };
            if (line.type === 'error') style = { color: '#ef4444' };

            return (
              <div key={i} style={style}>
                {line.text}
              </div>
            );
          })}

          {/* Interactive Form Line */}
          <form onSubmit={handleCommandSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--color-cyan)', fontWeight: 'bold' }}>$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoFocus
              placeholder="digite um comando..."
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                flex: 1,
              }}
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
