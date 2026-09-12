export const PERSONAL_INFO = {
  name: "Danilo Fróis Kaizer",
  title: "Estudante de Engenharia de Computação",
  targetRole: "Buscando Estágio em Ciência de Dados & Análise de Dados",
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
  sbcMarathon: "Finalista Nacional da Maratona de Programação da SBC (2026)",
  summary: [
    "Estudante de Engenharia de Computação no CEFET-MG com excelente desempenho acadêmico (CR 94,5/100), com foco principal em Ciência de Dados, Aprendizado de Máquina e Análise Exploratória, buscando oportunidade de estágio na área.",
    "Combino facilidade com estatística e base matemática sólida (ex-monitor de Geometria Analítica e Álgebra Linear) com raciocínio lógico apurado em solução de problemas, comprovado pela classificação como Finalista Nacional da Maratona de Programação da SBC (2026).",
    "Possuo experiência prática no uso de Python (Pandas, NumPy, Scikit-learn, Matplotlib) e SQL para manipulação e análise de dados, mantendo também conhecimentos complementares em desenvolvimento de software (Java/Spring Boot)."
  ]
};

export const STATS = [
  { label: "CR no CEFET-MG", value: "94,5", suffix: "/100", color: "cyan" },
  { label: "Maratona SBC 2026", value: "Finalista", suffix: "Nacional", color: "gold" }
];

export const PROJECTS = [
  {
    id: "sisu-ml",
    title: "Pipeline de Classificação de Matrículas do SISU",
    subtitle: "Projeto em Andamento (Em Equipe) | META CEFET-MG & Artigo Científico",
    category: "Ciência de Dados & ML",
    organization: "CEFET-MG",
    period: "Em Andamento",
    summary: "Projeto de Ciência de Dados desenvolvido em equipe para análise e predição de ingresso de candidatos no SISU. O trabalho será apresentado na META (Mostra Específica de Trabalhos e Aplicações) do CEFET-MG e submetido como artigo científico.",
    techHighlight: "Responsável direto pela criação das features 'DISTANCIA_KM' (usando base externa do GitHub/IBGE com latitude e longitude) e 'PRESTIGIO_IES' / 'PRESTIGIO_CAMPUS' (baseadas na contagem de candidatos).",
    models: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Feature Engineering", "Dados IBGE"],
    impactMetrics: [
      { label: "Status do Projeto", value: "Em Andamento (Em Equipe)" },
      { label: "Apresentação & Artigo", value: "META CEFET-MG" },
      { label: "Contribuição Danilo", value: "Engenharia de Features" }
    ],
    problem: "Analisar a base de dados de candidatos do SISU no CEFET-MG para identificar padrões e fatores associados à confirmação de matrícula e atratividade das vagas.",
    solution: "Desenvolvimento colaborativo de um pipeline em Python. Atualmente a equipe está testando e avaliando diversos algoritmos de Machine Learning para selecionar o melhor modelo, com planos posteriores de comparar os resultados com arquiteturas de Deep Learning.",
    architecture: [
      "Projeto acadêmico em equipe no CEFET-MG (em andamento)",
      "Contribuição (Danilo): Criação da feature 'DISTANCIA_KM' integrando latitude/longitude de municípios a partir de base externa do IBGE (GitHub)",
      "Contribuição (Danilo): Criação das features 'PRESTIGIO_IES' e 'PRESTIGIO_CAMPUS' calculando a contagem (count) total de candidatos concorrentes",
      "Modelagem: Teste e comparação de múltiplos modelos de Aprendizado de Máquina para seleção da melhor abordagem (com comparação futura em Deep Learning)",
      "Divulgação Científica: Apresentação na META (CEFET-MG) e submissão de artigo científico"
    ]
  },
  {
    id: "genai-ocr-etl",
    title: "Automação de Leitura e Migração de Dados de Notas Fiscais",
    subtitle: "Projeto Freelancer em Andamento | Python, Gemini (GenAI) & Pandas",
    category: "Ciência de Dados & ML",
    organization: "Freelancer",
    period: "Em Andamento",
    summary: "Projeto freelancer em andamento para limpeza e migração de estoque. Uso de Pandas para tratar o arquivo do sistema legado e integração com Gemini (Google GenAI) para extrair dados tabulares de notas fiscais e cruzar com os dados existentes.",
    techHighlight: "Tratamento de planilhas legadas com Pandas/NumPy e extração de tabelas de notas fiscais de compra via modelo Gemini (Google GenAI) para preencher dados faltantes da migração.",
    models: ["Python", "Pandas", "NumPy", "Gemini (GenAI)", "Extração de Dados", "ETL"],
    impactMetrics: [
      { label: "Status", value: "Em Andamento" },
      { label: "IA Utilizada", value: "Gemini (GenAI)" },
      { label: "Manipulação", value: "Pandas & NumPy" }
    ],
    problem: "A planilha exportada pelo sistema legado da empresa continha informações cruciais ausentes para a migração de estoque, exigindo a extração dessas informações diretamente de dezenas de notas fiscais de compra.",
    solution: "Desenvolvimento de script em Python utilizando Pandas para limpeza inicial dos dados antigos e requisições ao Gemini (Google GenAI) para extrair os itens das notas fiscais em PDF/Imagem, realizando em seguida o cruzamento dos dados com Pandas e NumPy.",
    architecture: [
      "Limpeza e padronização da planilha exportada pelo sistema antigo com Pandas",
      "Análise e extração de dados tabulares de notas fiscais utilizando a API do Gemini (Google GenAI)",
      "Cruzamento e enriquecimento dos dados das notas com a planilha legada via Pandas e NumPy",
      "Projeto em andamento para finalização da migração do estoque"
    ]
  },
  {
    id: "pibic-acos-gno",
    title: "Iniciação Científica (PIBIC) - Processamento de Dados de Aços GNO",
    subtitle: "Tratamento de Dados & Análise Estatística",
    category: "Engenharia de Dados",
    organization: "CEFET-MG",
    period: "2025.2 - 2026.1",
    summary: "Projeto de Iniciação Científica focado na automação de leitura, tratamento estatístico e visualização de dados experimentais de aços elásticos GNO.",
    techHighlight: "Script em Matlab para consolidação automática e filtragem de ruídos em múltiplas planilhas de testes laboratoriais.",
    models: ["Matlab", "Análise Estatística", "Tratamento de Dados", "Visualização de Dados"],
    impactMetrics: [
      { label: "Área", value: "Análise de Dados Científicos" },
      { label: "Ferramenta", value: "Matlab" },
      { label: "Formato", value: "Planilhas .xlsx" }
    ],
    problem: "Organizar e extrair métricas de dezenas de planilhas de testes laboratoriais de forma automatizada para análise científica.",
    solution: "Criação de scripts que percorrem arquivos de medições físicas, removem outliers e geram gráficos consolidados para relatórios.",
    architecture: [
      "Leitura automatizada de múltiplos arquivos em diretórios",
      "Filtragem e consolidação estatística",
      "Geração de plots e gráficos explicativos"
    ]
  },
  {
    id: "esp32-mqtt",
    title: "Monitor de Nível de Lixeiras – Dashboard MQTT",
    subtitle: "Trabalho Prático de Sistemas Embarcados II | CEFET-MG",
    category: "Desenvolvimento de Software",
    organization: "CEFET-MG",
    period: "2026.1",
    summary: "Dashboard web desenvolvido como Progressive Web App (PWA) em React + TypeScript para monitoramento em tempo real do nível de lixeiras através de comunicação MQTT via WebSocket conectada a microcontroladores ESP32.",
    techHighlight: "Conexão via WebSocket ao broker público HiveMQ, assinando tópicos MQTT em tempo real e exibindo dados lidos pelos sensores ultrassônicos HC-SR04 dos ESP32.",
    models: ["React", "TypeScript", "ESP32", "MQTT.js", "HiveMQ", "WebSocket", "PWA"],
    impactMetrics: [
      { label: "Comunicação", value: "MQTT via WebSocket" },
      { label: "Sensor / HW", value: "ESP32 + HC-SR04" },
      { label: "Interface", value: "PWA (React + TS)" }
    ],
    problem: "Criar um dashboard web responsivo e instalável para monitorar em tempo real os níveis de lixeiras informados pelos sensores ESP32 sem depender de plataformas IoT fechadas.",
    solution: "Desenvolvimento de interface em React com TypeScript integrada à biblioteca MQTT.js para escutar os tópicos do broker público HiveMQ e atualizar os estados dos níveis de lixeira em tempo real.",
    architecture: [
      "Leitura de distância via sensor ultrassônico HC-SR04 acoplado ao microcontrolador ESP32",
      "Publicação das medições nos tópicos do broker público HiveMQ",
      "Conexão WebSocket com MQTT.js no frontend React (TypeScript)",
      "Configuração de suporte a Progressive Web App (PWA) para instalação nativa"
    ]
  },
  {
    id: "chess-platform",
    title: "Plataforma de Xadrez Online Multiplayer em Tempo Real",
    subtitle: "Aplicação Robusta | Java (Spring Boot), Angular & WebSockets",
    category: "Desenvolvimento de Software",
    organization: "Pessoal",
    period: "2025",
    summary: "Plataforma web de xadrez multiplayer completa jogável em tempo real por duas pessoas via código de sala. Inclui sistema de criação/ingresso por código, derrota por tempo, desistência, oferta de empate e feedbacks visuais detalhados.",
    techHighlight: "Sistema multiplayer com criação de sala por código único, comunicação bidirecional por WebSockets, feedbacks visuais de lances/xeque/capturas e controle completo de eventos da partida (não hospedado em servidor público).",
    models: ["Java", "Spring Boot", "Angular", "TypeScript", "WebSockets", "STOMP"],
    impactMetrics: [
      { label: "Modo de Jogo", value: "Multiplayer via Código" },
      { label: "Recursos Visuais", value: "Xeque, Capturas & Lances" },
      { label: "Eventos", value: "Tempo, Desistência & Empate" }
    ],
    problem: "Desenvolver uma aplicação multiplayer robusta capaz de gerenciar todas as regras de xadrez, sincronizar partidas simultâneas sem atrasos e oferecer controle completo de tempo e eventos de partida.",
    solution: "Arquitetura distribuída com backend em Java (Spring Boot) validando todas as regras e enviando atualizações via WebSockets para a interface reativa em Angular. O primeiro jogador cria a partida e recebe um código de sala, que o segundo jogador utiliza para se conectar.",
    architecture: [
      "Sistema de Sala por Código: Um jogador cria a partida, recebe um código de sala e o segundo jogador conecta-se inserindo o código",
      "Eventos de Partida: Suporte completo a desistência, oferta/aceite de empate e derrota por estouro de tempo do relógio",
      "Feedbacks Visuais no Tabuleiro: Destaque de jogadas possíveis, indicação de peças capturadas, marcação do último lance realizado e alerta visual de xeque",
      "Histórico de Jogadas: Registro e descrição textual detalhada de todas as jogadas efetuadas na partida",
      "Comunicação em Tempo Real: Atualização instantânea dos tabuleiros via WebSockets (STOMP), pronta para execução local (projeto não hospedado)"
    ]
  },
  {
    id: "n-queens-ga",
    title: "Resolução do Problema das N-Rainhas via Algoritmo Genético",
    subtitle: "Trabalho Acadêmico de Algoritmos",
    category: "IA & Otimização",
    organization: "CEFET-MG",
    period: "2026.1",
    summary: "Implementação de um algoritmo genético simples em Java para estudo de técnicas de busca e otimização no problema das N-Rainhas.",
    techHighlight: "Estudo prático de operadores evolutivos de seleção e cruzamento em Java.",
    models: ["Java", "Algoritmos Genéticos", "Lógica de Programação"],
    impactMetrics: [
      { label: "Área", value: "Inteligência Artificial" },
      { label: "Técnica", value: "Algoritmo Genético" },
      { label: "Linguagem", value: "Java" }
    ],
    problem: "Encontrar arranjos de N rainhas sem ataques em um tabuleiro.",
    solution: "Aplicação de algoritmo genético com cálculo de colisões diagonais como função de aptidão.",
    architecture: [
      "Geração da população inicial de posições",
      "Avaliação da função fitness",
      "Cruzamento e mutação dos indivíduos"
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "data-science",
    title: "Ciência de Dados, ML & Análise de Dados (Foco Principal)",
    icon: "BrainCircuit",
    description: "Principais ferramentas e bibliotecas estudadas para manipulação e análise de dados.",
    skills: [
      { name: "Python", tags: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
      { name: "Análise Exploratória & EDA", tags: ["Limpeza de Dados", "Estatística Descritiva", "Visualização Tabular"] },
      { name: "Machine Learning (Conceitos)", tags: ["Regressão", "Classificação", "Random Forest", "XGBoost"] },
      { name: "SQL & Bancos de Dados", tags: ["Consultas SQL", "JOINs", "PostgreSQL", "MySQL"] }
    ]
  },
  {
    id: "data-engineering",
    title: "Processamento de Dados & Computação Científica",
    icon: "Layers",
    description: "Tratamento de dados, automação de scripts e ferramentas acadêmicas.",
    skills: [
      { name: "Tratamento & Extração com GenAI", tags: ["Pandas", "NumPy", "Gemini (GenAI)", "Arquivos .xlsx / CSV"] },
      { name: "Matlab", tags: ["Scripts Acadêmicos", "Gráficos Estatísticos", "Processamento de Dados"] }
    ]
  },
  {
    id: "software-eng",
    title: "Desenvolvimento de Software & Algoritmos (Secundário)",
    icon: "Code2",
    description: "Linguagens de programação e lógica para suporte no desenvolvimento.",
    skills: [
      { name: "Java", tags: ["Orientação a Objetos", "Spring Boot Básico", "Estruturas de Dados", "Maratona SBC"] },
      { name: "IoT & Web (ESP32 / React)", tags: ["ESP32", "MQTT.js", "WebSocket", "React / TypeScript", "PWA"] },
      { name: "Algoritmos & Lógica", tags: ["Resolução de Problemas", "Teoria dos Grafos", "Programação Dinâmica"] },
      { name: "Git & Versionamento", tags: ["Git Flow", "Commits", "GitHub"] }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "sbc-marathon",
    title: "Finalista Nacional - Maratona de Programação da SBC (2026)",
    type: "Competição Acadêmica de Programação",
    date: "2026",
    badge: "🏆 Finalista Nacional",
    badgeColor: "gold",
    description: "Classificação para a final nacional da Maratona de Programação da SBC com a equipe do CEFET-MG.",
    bullets: [
      "Resolução de problemas de lógica, matemática e estruturas de dados sob limite de tempo.",
      "Prática intensiva de algoritmos e resolução de problemas em Java.",
      "Trabalho em equipe e raciocínio lógico focado."
    ]
  },
  {
    id: "cefet-degree",
    title: "Bacharelado em Engenharia de Computação",
    type: "Graduação em Andamento",
    institution: "CEFET-MG",
    date: "Previsão de Formatura: 12/2027",
    badge: "🎓 CR 94,5 / 100",
    badgeColor: "cyan",
    description: "Estudante de Engenharia de Computação com excelente desempenho acadêmico (CR 94,5/100).",
    bullets: [
      "Dedicação às disciplinas de algoritmos, cálculo, álgebra linear e sistemas de computação.",
      "Participação em projetos acadêmicos e atividades complementares."
    ]
  }
];
