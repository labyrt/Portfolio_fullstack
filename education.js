(() => {
  'use strict';

  const educationCopy = {
    pt: [
      {
        institution: 'FACULDADE EXAME',
        status: 'EM ANDAMENTO · 1º SEMESTRE',
        period: '08/2026 — 07/2028',
        title: 'Ciência de Dados e Inteligência Artificial — Tecnólogo',
        summary: 'Graduação tecnológica voltada a dados, inteligência artificial e tomada de decisão orientada por evidências, conectando fundamentos quantitativos à construção de soluções digitais.',
        learning: ['Análise, organização e interpretação de dados.', 'Fundamentos de estatística, inteligência artificial e modelagem.', 'Aplicação de Python, SQL e raciocínio analítico em problemas de negócio e tecnologia.'],
        tags: ['DATA SCIENCE', 'IA', 'PYTHON', 'SQL']
      },
      {
        institution: 'UNIVERSIDADE CRUZEIRO DO SUL · UNICSUL',
        status: 'EM ANDAMENTO',
        period: '08/2026 — 08/2028',
        title: 'Análise de Dados de Alta Performance — Tecnólogo',
        summary: 'Formação complementar em análise de dados, raciocínio quantitativo e uso de informações para apoiar decisões e produtos digitais.',
        learning: ['Aprofundamento em análise, interpretação e comunicação de dados.', 'Raciocínio quantitativo e decisões orientadas por evidências.', 'Conexão entre dados, automação e desenvolvimento de aplicações.'],
        tags: ['DATA ANALYSIS', 'ANALYTICS', 'PERFORMANCE']
      },
      {
        institution: 'CAMPUS JAÇANÃ',
        status: 'EM ANDAMENTO',
        period: '2026 — ATUAL',
        title: 'Tecnologia em Redes de Computadores',
        summary: 'Formação voltada a fundamentos de redes, infraestrutura e conectividade, ampliando a base técnica para troubleshooting, sistemas distribuídos e segurança.',
        learning: ['Fundamentos de redes e comunicação entre sistemas.', 'Infraestrutura, conectividade e diagnóstico técnico.', 'Integração dos conhecimentos de redes com aplicações web e serviços.'],
        tags: ['REDES', 'INFRA', 'LINUX', 'TROUBLESHOOTING']
      },
      {
        institution: 'EBAC',
        status: 'CONCLUÍDO',
        period: '08/2024 — 08/2026',
        title: 'Full Stack Python — Curso Profissionalizante Livre',
        summary: 'Formação prática de dois anos em desenvolvimento de aplicações web completas, cobrindo front-end, back-end, bancos de dados, testes, APIs, versionamento e deploy.',
        learning: ['HTML, CSS, JavaScript, TypeScript, React, Vue e Redux.', 'Python, Django, Django REST Framework, PostgreSQL, APIs REST e autenticação.', 'Git/GitHub, Pytest, Cypress, React Testing Library, Docker e CI/CD.'],
        tags: ['PYTHON', 'DJANGO', 'REACT', 'POSTGRESQL', 'TESTES', 'CI/CD']
      }
    ],
    en: [
      {
        institution: 'FACULDADE EXAME',
        status: 'ONGOING · 1ST SEMESTER',
        period: '08/2026 — 07/2028',
        title: 'Data Science and Artificial Intelligence — Technology Degree',
        summary: 'Technology degree focused on data, artificial intelligence and evidence-informed decision making, connecting quantitative foundations with digital solution development.',
        learning: ['Data analysis, organization and interpretation.', 'Foundations of statistics, artificial intelligence and modeling.', 'Python, SQL and analytical reasoning applied to business and technology problems.'],
        tags: ['DATA SCIENCE', 'AI', 'PYTHON', 'SQL']
      },
      {
        institution: 'UNIVERSIDADE CRUZEIRO DO SUL · UNICSUL',
        status: 'ONGOING',
        period: '08/2026 — 08/2028',
        title: 'High-Performance Data Analysis — Technology Degree',
        summary: 'Complementary degree in data analysis, quantitative reasoning and the use of information to support decisions and digital products.',
        learning: ['Deeper data analysis, interpretation and communication skills.', 'Quantitative reasoning and evidence-informed decisions.', 'Connecting data, automation and application development.'],
        tags: ['DATA ANALYSIS', 'ANALYTICS', 'PERFORMANCE']
      },
      {
        institution: 'JAÇANÃ CAMPUS',
        status: 'ONGOING',
        period: '2026 — PRESENT',
        title: 'Computer Networks Technology',
        summary: 'Training in networking, infrastructure and connectivity fundamentals, expanding the technical foundation for troubleshooting, distributed systems and security.',
        learning: ['Networking and system communication fundamentals.', 'Infrastructure, connectivity and technical diagnostics.', 'Connecting networking knowledge with web applications and services.'],
        tags: ['NETWORKS', 'INFRA', 'LINUX', 'TROUBLESHOOTING']
      },
      {
        institution: 'EBAC',
        status: 'COMPLETED',
        period: '08/2024 — 08/2026',
        title: 'Full Stack Python — Professional Program',
        summary: 'Two-year hands-on program in complete web application development, covering front-end, back-end, databases, testing, APIs, version control and deployment.',
        learning: ['HTML, CSS, JavaScript, TypeScript, React, Vue and Redux.', 'Python, Django, Django REST Framework, PostgreSQL, REST APIs and authentication.', 'Git/GitHub, Pytest, Cypress, React Testing Library, Docker and CI/CD.'],
        tags: ['PYTHON', 'DJANGO', 'REACT', 'POSTGRESQL', 'TESTING', 'CI/CD']
      }
    ]
  };

  const recruiterProjects = [
    {
      id: 'econverse-frontend-2026',
      title: 'Teste Front-End Jr — Econverse',
      year: '2026',
      category: 'frontend',
      featured: true,
      visual: 'tech',
      status: 'published',
      description: {
        pt: 'Implementação de teste técnico com React e TypeScript a partir de Figma, consumo do JSON oficial de produtos, modal dinâmico, responsividade, acessibilidade, testes automatizados e CI. O projeto foi calibrado para alta fidelidade visual sem transformar a interface em imagem estática.',
        en: 'Junior front-end technical challenge built with React and TypeScript from a Figma reference, using the official product JSON, dynamic modal behavior, responsive layout, accessibility, automated tests and CI. The interface was calibrated for high visual fidelity without becoming a static image.'
      },
      stack: ['React', 'TypeScript', 'Vite', 'Sass/SCSS', 'Vitest', 'React Testing Library'],
      repo: 'https://github.com/labyrt/teste-front-end',
      demo: 'https://teste-front-end-econverse-lucy.vercel.app/',
      source: 'repository',
      deployment: 'teste-front-end-econverse-lucy'
    },
    {
      id: 'bookstore-drf-2026',
      title: 'Bookstore — API REST, Docker e PostgreSQL',
      year: '2026',
      category: 'product',
      featured: true,
      visual: 'api',
      status: 'code',
      description: {
        pt: 'Backend em Django REST Framework com catálogo público, pedidos autenticados por token, isolamento de dados por usuário, CRUD, PostgreSQL via Docker Compose, suíte Pytest e validação automatizada em GitHub Actions.',
        en: 'Django REST Framework backend with a public catalog, token-authenticated orders, per-user data isolation, CRUD operations, PostgreSQL through Docker Compose, a Pytest suite and automated validation in GitHub Actions.'
      },
      stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'Pytest', 'GitHub Actions'],
      repo: 'https://github.com/labyrt/ebac-bookstore-serializers',
      source: 'repository'
    },
    {
      id: 'python-avancado-2026',
      title: 'Python Avançado — SQL, Dados e Concorrência',
      year: '2026',
      category: 'fundamentals',
      featured: false,
      visual: 'code',
      status: 'code',
      description: {
        pt: 'Repositório de exercícios avançados envolvendo DDL/DML, JOIN, GROUP BY, índices, EXPLAIN ANALYZE, processamento de CSV e concorrência com multithreading em Python.',
        en: 'Advanced exercises covering DDL/DML, JOIN, GROUP BY, indexes, EXPLAIN ANALYZE, CSV processing and multithreading concurrency in Python.'
      },
      stack: ['Python', 'SQL', 'PostgreSQL', 'CSV', 'Multithreading'],
      repo: 'https://github.com/labyrt/ebac_python_avancado',
      source: 'repository'
    }
  ];

  function currentLanguage() {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; }
    catch { return 'pt'; }
  }

  function renderEducation() {
    const grid = document.querySelector('.study-grid');
    if (!grid) return;
    const language = currentLanguage();
    const cards = educationCopy[language];
    grid.innerHTML = cards.map((course, index) => `
      <article class="study-card reveal${index === 0 ? ' study-card--data' : ''}" data-current-education>
        <div class="study-card-top"><span>${course.institution}</span><span>${course.status}</span></div>
        <div class="study-period">${course.period}</div>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <div class="study-learning">
          <span>${language === 'pt' ? 'Aprendizados e foco' : 'Learning and focus'}</span>
          <ul>${course.learning.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="study-tags">${course.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      </article>`).join('');

    const caption = document.querySelector('.portrait-caption');
    if (caption) {
      caption.innerHTML = language === 'pt'
        ? '<span>Ciência de Dados & IA · EXAME</span><span>Full Stack Python · EBAC</span>'
        : '<span>Data Science & AI · EXAME</span><span>Full Stack Python · EBAC</span>';
    }
  }

  function addRecruiterProjects() {
    const projects = window.PORTFOLIO_PROJECTS;
    if (!Array.isArray(projects)) return false;

    recruiterProjects.forEach(project => {
      if (!projects.some(existing => existing.id === project.id)) projects.unshift(project);
    });
    return true;
  }

  function rerenderPortfolioProjects() {
    const button = document.querySelector('[data-language]');
    if (!button) return;
    const original = button.textContent;
    button.click();
    button.click();
    if (button.textContent !== original) button.click();
  }

  function applyUpdates() {
    renderEducation();
    if (addRecruiterProjects()) rerenderPortfolioProjects();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyUpdates, { once: true });
  } else {
    applyUpdates();
  }

  document.addEventListener('click', event => {
    if (event.target.closest('[data-language]')) setTimeout(renderEducation, 0);
  });
  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-language') renderEducation();
  });
})();
