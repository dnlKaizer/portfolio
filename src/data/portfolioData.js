export const PERSONAL_INFO = {
  name: "Danilo Fróis Kaizer",
  headline: "Danilo Fróis Kaizer | Engenharia de Software, Algoritmos & Dados",
  roleHighlight: "Engenharia de Software, Algoritmos & Dados",
  title: "Estudante de Engenharia de Computação no CEFET-MG (CR 94,5/100) e Finalista Nacional da Maratona de Programação da SBC (2026).",
  targetRole: "Estudante de Engenharia de Computação focado em Engenharia de Software, Algoritmos e Sistemas de Alta Confiabilidade, com sólida base matemática e experiência prática em Ciência de Dados.",
  institution: "CEFET-MG",
  degree: "Engenharia de Computação",
  cr: "94,5 / 100",
  graduationDate: "12/2027",
  location: "Coronel Fabriciano, MG - Brasil",
  email: "danilokaizer@gmail.com",
  linkedin: "https://www.linkedin.com/in/danilo-kaizer-83b7aa3aa/",
  linkedinTag: "danilo-kaizer-83b7aa3aa",
  github: "https://github.com/dnlKaizer",
  githubTag: "dnlKaizer",
  resumePdf: "/Curriculo_Danilo_Frois_Kaizer.pdf",
  sbcMarathon: "Finalista Nacional da Maratona de Programação da SBC (2026) — 53º/65",
  summary: [
    "Estudante do 8º período de Engenharia de Computação no CEFET-MG com excelente desempenho acadêmico (CR 94,5/100). Sólida base em algoritmos, estruturas de dados avançadas e desenvolvimento de software robusto (Java, C++, Python, Spring Boot), aliada à experiência prática em Ciência de Dados e Machine Learning.",
    "Finalista Nacional da Maratona de Programação da SBC 2026 (53º lugar entre os 65 finalistas do país), conquistando a primeira classificação do campus em 8 anos após apenas 4 meses de preparação intensiva autodidata. Na final, fui responsável pela resolução em Java dos 3 problemas de maior dificuldade da equipe (matemática, implementação e guloso).",
    "Ex-monitor bolsista de Geometria Analítica e Álgebra Linear, combinando facilidade com fundamentos matemáticos e métodos quantitativos à engenharia de software pragmática, capaz de construir desde compiladores com geração direta de bytecode até arquiteturas IoT com mensageria MQTT e dashboards em tempo real."
  ]
};

export const STATS = [
  { label: "CEFET-MG", value: "CR: 94,5", suffix: "/ 100", color: "cyan" },
  { label: "Maratona SBC 2026 - 53º/65", value: "Finalista", suffix: "Nacional", color: "gold" },
  { label: "com menos de 2 meses de treino", value: "147º / 965", suffix: "na 1ª Fase SBC", color: "cyan" }
];

export const PROJECTS = [
  {
    id: "comcet-compiler",
    title: "Compilador MiniPascal (comcet)",
    subtitle: "Compilador de 8 estágios com geração direta de bytecode JVM via OW2 ASM",
    category: "Engenharia de Software & Compiladores",
    organization: "CEFET-MG",
    period: "2026",
    githubUrl: "https://github.com/dnlKaizer/compiler",
    summary: "Construção de um compilador acadêmico completo para um subconjunto da linguagem Pascal desenvolvido em Java utilizando Maven. Implementa análise léxica e sintática via ANTLR4, construção e travessia de Árvore Sintática Abstrata (AST) utilizando o padrão de projeto Visitor para verificação de escopos e checagem semântica estrita, e geração direta de bytecode nativo da JVM através da biblioteca OW2 ASM.",
    techHighlight: "Compilador de 8 estágios com análise léxica/sintática ANTLR4, AST com Visitor Pattern para checagem semântica estrita e emissão direta de bytecode JVM nativo via OW2 ASM.",
    models: ["Java", "ANTLR4", "OW2 ASM", "JVM Bytecode", "Maven", "Visitor Pattern", "AST"],
    impactMetrics: [
      { label: "Pipeline de Compilação", value: "8 Estágios" },
      { label: "Frontend & AST", value: "ANTLR4 + Visitor" },
      { label: "Target Backend", value: "JVM Bytecode (ASM)" }
    ],
    problem: "Projetar e implementar um compilador completo para um subconjunto da linguagem Pascal capaz de realizar validações léxicas, sintáticas e semânticas rigorosas e gerar código executável diretamente na Java Virtual Machine (JVM).",
    solution: "Arquitetura modular em 8 estágios construída em Java com Maven. Utiliza gramáticas ANTLR4 para parsing, padrão Visitor sobre a AST para tabela de símbolos e verificação de tipos/escopos, e a biblioteca OW2 ASM para geração direta de instruções de bytecode JVM (.class).",
    architecture: [
      "Análise Léxica e Sintática automatizada com gramática formal definida no ANTLR4",
      "Construção e travessia de Árvore Sintática Abstrata (AST) utilizando o padrão de projeto Visitor",
      "Gerenciamento de tabela de símbolos, verificação de escopos e checagem semântica estrita de tipos",
      "Geração direta de bytecode nativo da JVM (.class) através da biblioteca de manipulação de bytecode OW2 ASM",
      "Gerenciamento de build, dependências e testes automatizados via Apache Maven"
    ]
  },
  {
    id: "chess-platform",
    title: "Plataforma de Xadrez Online Multiplayer",
    subtitle: "Aplicação web fullstack em tempo real com Java, Spring Boot e WebSockets",
    category: "Engenharia de Software Fullstack",
    organization: "Projeto Pessoal",
    period: "2025",
    githubUrl: "https://github.com/dnlKaizer/chess",
    summary: "Sistema web completo para partidas de xadrez em tempo real entre dois jogadores com comunicação bidirecional de baixa sobrecarga via WebSockets. Implementa regras oficiais do xadrez, validação de movimentos no servidor, controle síncrono de relógios com derrota por tempo, sistema de salas privadas por código único e interface reativa construída em Angular.",
    techHighlight: "Comunicação bidirecional de baixa latência via WebSockets/STOMP, motor de validação das regras oficiais no servidor (Spring Boot) e sincronização de relógios em tempo real.",
    models: ["Java", "Spring Boot", "Angular", "TypeScript", "WebSockets", "STOMP"],
    impactMetrics: [
      { label: "Comunicação", value: "WebSockets / STOMP" },
      { label: "Backend Engine", value: "Java & Spring Boot" },
      { label: "Frontend Reativo", value: "Angular + TS" }
    ],
    problem: "Desenvolver uma aplicação multiplayer em tempo real capaz de validar todas as regras oficiais do xadrez no servidor, sincronizar partidas simultâneas com baixa latência e gerenciar relógios e eventos de partida.",
    solution: "Arquitetura fullstack com backend em Java (Spring Boot) responsável pelo motor de regras, controle de estado e mensageria WebSockets (STOMP), integrado a uma interface reativa em Angular + TypeScript com salas privadas por código único.",
    architecture: [
      "Comunicação bidirecional de baixa sobrecarga em tempo real via WebSockets e protocolo STOMP",
      "Validação completa de movimentos e regras oficiais do xadrez no servidor (xeque, xeque-mate, roque, en passant, promoção)",
      "Controle síncrono de relógios com detecção de derrota por tempo, desistência e oferta de empate",
      "Sistema de salas privadas com pareamento instantâneo por código único",
      "Interface reativa em Angular com destaques visuais de lances válidos, capturas, xeque e histórico completo de jogadas"
    ]
  },
  {
    id: "sisu-ml",
    title: "Pipeline de Classificação de Matrículas do SiSU",
    subtitle: "Modelagem preditiva e feature engineering sobre ~200 mil registros reais",
    category: "Ciência de Dados & Machine Learning",
    organization: "35ª META CEFET-MG",
    period: "2025 - 2026",
    summary: "Estudo comparativo de modelos de Machine Learning (Árvores de Decisão, Random Forest, SVM e XGBoost) para predizer a confirmação de matrícula de candidatos a partir de microdados do SiSU (~200 mil registros tratados a partir de 2 milhões). O XGBoost alcançou ROC-AUC de 0,79 e recall de 0,75 (validação cruzada 10-fold, desvio <= 0,005). Responsável pela engenharia de variáveis estratégicas (distância geográfica via IBGE e índice de demanda por campus), elevando o F1-score de 0,67 para 0,72 (+5 p.p.). Apresentado na 35ª META do CEFET-MG com artigo científico em fase de redação.",
    techHighlight: "Engenharia de variáveis estratégicas (distância geográfica via IBGE e índice de demanda por campus) que elevou o F1-score de 0,67 para 0,72 (+5 p.p.), alcançando ROC-AUC de 0,79 com XGBoost.",
    models: ["Python", "Pandas", "XGBoost", "Scikit-learn", "NumPy", "Matplotlib"],
    impactMetrics: [
      { label: "XGBoost (10-fold CV)", value: "ROC-AUC 0,79" },
      { label: "Ganho em F1-Score", value: "0,67 → 0,72 (+5 p.p.)" },
      { label: "Volume de Dados", value: "~200 mil registros" }
    ],
    problem: "Predizer a confirmação de matrícula de candidatos a partir de microdados reais do SiSU (~200 mil registros filtrados e tratados a partir de uma base bruta de 2 milhões de registros), identificando os fatores determinantes da evasão inicial.",
    solution: "Pipeline completo de preparação de dados, engenharia de atributos geográficos e institucionais e avaliação comparativa rigorosa via validação cruzada 10-fold entre Árvores de Decisão, Random Forest, SVM e XGBoost.",
    architecture: [
      "Tratamento e saneamento de ~200 mil registros reais a partir de 2 milhões de entradas dos microdados do SiSU",
      "Feature Engineering (Danilo): Cálculo de distância geográfica entre município do candidato e campus via coordenadas do IBGE e criação do índice de demanda por campus",
      "Impacto direto das novas features: elevação do F1-score de 0,67 para 0,72 (+5 pontos percentuais)",
      "Modelagem comparativa (Árvores de Decisão, Random Forest, SVM e XGBoost) com validação cruzada 10-fold (desvio <= 0,005), atingindo ROC-AUC de 0,79 e recall de 0,75 no XGBoost",
      "Trabalho apresentado na 35ª META do CEFET-MG com artigo científico em fase de redação"
    ]
  },
  {
    id: "esp32-mqtt",
    title: "Sistema de Telemetria IoT com ESP32 & MQTT",
    subtitle: "Monitoramento de sensores em tempo real com protocolo pub/sub e PWA em React",
    category: "Sistemas Embarcados & IoT",
    organization: "CEFET-MG",
    period: "2026",
    githubUrl: "https://github.com/dnlKaizer/esp32-mqtt",
    summary: "Arquitetura de telemetria ponta a ponta para monitoramento contínuo de reservatórios/lixeiras utilizando microcontrolador ESP32 programado em C/C++ conectado a sensores ultrassônicos. Os dados são transmitidos em tempo real via protocolo pub/sub MQTT sobre WebSockets e consumidos por um Progressive Web App (PWA) responsivo desenvolvido em React + TypeScript.",
    techHighlight: "Telemetria ponta a ponta integrando firmware em C/C++ no ESP32, mensageria pub/sub MQTT sobre WebSockets e dashboard PWA em React + TypeScript.",
    models: ["ESP32", "C/C++", "MQTT", "WebSockets", "React", "TypeScript", "IoT"],
    impactMetrics: [
      { label: "Embarcados", value: "ESP32 (C/C++)" },
      { label: "Mensageria", value: "MQTT / WebSockets" },
      { label: "Frontend", value: "PWA React + TS" }
    ],
    problem: "Construir uma arquitetura de telemetria ponta a ponta de baixa latência para monitorar continuamente o nível de ocupação de reservatórios e lixeiras em tempo real.",
    solution: "Integração entre hardware embarcado (ESP32 programado em C/C++ com sensores ultrassônicos), transmissão assíncrona via broker MQTT sobre WebSockets e visualização em tempo real em um Progressive Web App (PWA) construído com React e TypeScript.",
    architecture: [
      "Firmware embarcado em C/C++ no microcontrolador ESP32 para leitura contínua de sensores ultrassônicos",
      "Transmissão de telemetria em tempo real utilizando arquitetura publish/subscribe com protocolo MQTT sobre WebSockets",
      "Consumo de streams de dados e atualização reativa de estado em um Progressive Web App (PWA)",
      "Interface responsiva e instalável desenvolvida em React + TypeScript com alertas visuais de capacidade"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "programming-languages",
    title: "Linguagens de Programação",
    icon: "Code2",
    description: "Domínio de linguagens fortemente tipadas, programação competitiva, sistemas e ciência de dados.",
    skills: [
      { name: "Java", tags: ["Core", "POO", "Bytecode JVM"] },
      { name: "C / C++", tags: ["Algoritmos competitivos", "Ponteiros", "Sistemas embarcados"] },
      { name: "Python", tags: ["Automação", "Pandas", "ML"] },
      { name: "SQL", tags: ["Consultas analíticas", "Agregações", "Modelagem relacional"] },
      { name: "TypeScript / JavaScript", tags: ["Frontend moderno", "Angular", "React"] }
    ]
  },
  {
    id: "software-engineering",
    title: "Engenharia de Software & Backend",
    icon: "Layers",
    description: "Desenvolvimento de sistemas distribuídos, comunicação em tempo real e construção de compiladores.",
    skills: [
      { name: "Backend & Mensageria em Tempo Real", tags: ["Spring Boot", "REST APIs", "WebSockets / STOMP", "MQTT"] },
      { name: "Compiladores, Build & Bytecode", tags: ["Maven", "ANTLR4", "OW2 ASM"] }
    ]
  },
  {
    id: "data-science",
    title: "Ciência de Dados & Computação Científica",
    icon: "BrainCircuit",
    description: "Modelagem preditiva, engenharia de atributos, validação estatística e computação numérica.",
    skills: [
      { name: "Machine Learning & Análise de Dados", tags: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM"] },
      { name: "Visualização & Computação Científica", tags: ["Matplotlib / Seaborn", "MATLAB"] }
    ]
  },
  {
    id: "tools-infra",
    title: "Ferramentas, Infra & Ambientes",
    icon: "Terminal",
    description: "Controle de versão, ambientes Unix, conteinerização e frameworks web modernos.",
    skills: [
      { name: "Infraestrutura, DevOps & Web", tags: ["Git / GitHub", "Linux / WSL", "Docker (Básico)", "React", "Angular"] }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "sbc-marathon",
    title: "Finalista Nacional da Maratona de Programação SBC (2026)",
    type: "Programação Competitiva & Algoritmos",
    institution: "SBC",
    date: "53º lugar na Final Nacional (65 equipes) | 147º lugar na 1ª Fase (965 equipes)",
    badge: "🏆 Finalista Nacional (53º/65)",
    badgeColor: "gold",
    description: "53º lugar na Final Nacional (entre as 65 melhores equipes do Brasil) | 147º lugar na 1ª Fase (entre 965 equipes).",
    bullets: [
      "Métricas: 53º lugar na Final Nacional (entre as 65 melhores equipes do Brasil) | 147º lugar na 1ª Fase (entre 965 equipes).",
      "Contexto: Preparação autodidata com menos de 2 meses de treino até a 1ª fase e menos de 4 meses até a final nacional, quebrando um hiato de 8 anos do CEFET-MG Campus Timóteo (4ª participação da história do campus).",
      "Atuação: Responsável direto pela resolução em Java dos 3 problemas de maior complexidade da equipe na prova da Final Nacional."
    ]
  },
  {
    id: "cefet-degree",
    title: "Coeficiente de Rendimento (CR) 94,5 / 100 — CEFET-MG",
    type: "Bacharelado em Engenharia de Computação",
    institution: "CEFET-MG",
    date: "8º Período • Previsão de Formatura: 12/2027",
    badge: "🎓 CR 94,5 / 100",
    badgeColor: "cyan",
    description: "Desempenho acadêmico consistente nas disciplinas de Engenharia de Computação (Algoritmos e Estruturas de Dados, Cálculo, Álgebra Linear, Sistemas Embarcados e Compiladores).",
    bullets: [
      "Destaque: Desempenho acadêmico consistente nas disciplinas de Engenharia de Computação (Algoritmos e Estruturas de Dados, Cálculo, Álgebra Linear, Sistemas Embarcados e Compiladores).",
      "Atividades: Monitor bolsista de Geometria Analítica e Álgebra Linear durante 2 semestres consecutivos e bolsista de Iniciação Científica (PIBIC)."
    ]
  }
];
