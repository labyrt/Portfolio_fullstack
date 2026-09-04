(() => {
  'use strict';

  const copy = {
    pt: {
      status: 'EM ANDAMENTO · 1º SEMESTRE',
      period: '08/2026 — 07/2028',
      title: 'Ciência de Dados e Inteligência Artificial — Tecnólogo',
      summary: 'Graduação tecnológica na Faculdade EXAME voltada a ciência de dados, inteligência artificial e aplicação prática de tecnologia na resolução de problemas.',
      learning: 'Aprendizados',
      one: 'Fundamentos de ciência de dados, inteligência artificial e raciocínio analítico.',
      two: 'Aplicação de Python, SQL e organização de dados em problemas de tecnologia.',
      three: 'Desenvolvimento de visão orientada a dados para produtos e soluções digitais.',
      caption: 'Ciência de Dados & IA · EXAME',
      ebacStatus: 'CONCLUÍDO'
    },
    en: {
      status: 'ONGOING · 1ST SEMESTER',
      period: '08/2026 — 07/2028',
      title: 'Data Science and Artificial Intelligence — Technology Degree',
      summary: 'Technology degree at Faculdade EXAME focused on data science, artificial intelligence and practical technology applied to problem solving.',
      learning: 'Learning',
      one: 'Foundations of data science, artificial intelligence and analytical reasoning.',
      two: 'Python, SQL and data organization applied to technology problems.',
      three: 'Data-informed thinking for digital products and technology solutions.',
      caption: 'Data Science & AI · EXAME',
      ebacStatus: 'COMPLETED'
    }
  };

  const PHOTO_B64 = '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';

  const extraFeatured = [
    {
      id: 'econverse-frontend-2026',
      title: 'Teste Front-End Jr — Econverse',
      year: '2026',
      category: 'frontend',
      featured: true,
      visual: 'tech',
      status: 'published',
      description: {
        pt: 'Teste técnico em React e TypeScript construído a partir de Figma, com catálogo dinâmico, modal de produto, responsividade, acessibilidade, testes automatizados e CI.',
        en: 'React and TypeScript technical challenge built from Figma with a dynamic catalog, product modal, responsive behavior, accessibility, automated tests and CI.'
      },
      stack: ['React', 'TypeScript', 'Vite', 'Sass/SCSS', 'Vitest', 'React Testing Library'],
      repo: 'https://github.com/labyrt/teste-front-end',
      demo: 'https://teste-front-end-econverse-lucy.vercel.app/',
      source: 'repository',
      deployment: 'teste-front-end-econverse-lucy'
    },
    {
      id: 'bookstore-drf-2026',
      title: 'Bookstore — API REST & Infra',
      year: '2026',
      category: 'product',
      featured: true,
      visual: 'code',
      status: 'code',
      description: {
        pt: 'Back-end em Django REST Framework com autenticação, CRUD, PostgreSQL, Docker, Pytest e validação automatizada com GitHub Actions.',
        en: 'Django REST Framework backend with authentication, CRUD, PostgreSQL, Docker, Pytest and automated validation through GitHub Actions.'
      },
      stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'Pytest', 'GitHub Actions'],
      repo: 'https://github.com/labyrt/ebac-bookstore-serializers',
      source: 'repository'
    }
  ];

  function currentLanguage() {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; }
    catch { return 'pt'; }
  }

  function ensureExameCard() {
    const grid = document.querySelector('.study-grid');
    if (!grid) return;

    if (!grid.querySelector('[data-exame-course]')) {
      grid.insertAdjacentHTML('afterbegin', `
        <article class="study-card" data-exame-course>
          <div class="study-card-top"><span>FACULDADE EXAME</span><span data-exame-i18n="status"></span></div>
          <div class="study-period" data-exame-i18n="period"></div>
          <h3 data-exame-i18n="title"></h3>
          <p data-exame-i18n="summary"></p>
          <div class="study-learning">
            <span data-exame-i18n="learning"></span>
            <ul>
              <li data-exame-i18n="one"></li>
              <li data-exame-i18n="two"></li>
              <li data-exame-i18n="three"></li>
            </ul>
          </div>
          <div class="study-tags"><span>DATA SCIENCE</span><span>IA</span><span>PYTHON</span><span>SQL</span></div>
        </article>`);
    }
  }

  function addFeaturedProjects() {
    const projects = window.PORTFOLIO_PROJECTS;
    if (!Array.isArray(projects)) return false;
    const anchor = projects.findIndex(project => project.id === 'atelie-aurora');
    if (anchor < 0) return false;

    let offset = 1;
    extraFeatured.forEach(project => {
      if (!projects.some(existing => existing.id === project.id)) {
        projects.splice(anchor + offset, 0, project);
        offset += 1;
      }
    });
    return offset > 1;
  }

  function rerenderProjects() {
    const button = document.querySelector('[data-language]');
    if (!button) return;
    button.click();
    button.click();
  }

  function updateEbacStatus(strings) {
    const cards = document.querySelectorAll('.study-grid .study-card');
    const ebacCard = Array.from(cards).find(card => {
      const institution = card.querySelector('.study-card-top span:first-child');
      return institution && institution.textContent.trim().toUpperCase() === 'EBAC';
    });
    if (!ebacCard) return;
    const status = ebacCard.querySelector('.study-card-top span:last-child');
    if (status) status.textContent = strings.ebacStatus;
  }

  function updatePortrait(strings) {
    const photo = document.querySelector('.portrait-frame img');
    if (photo) {
      photo.src = `data:image/webp;base64,${PHOTO_B64}`;
      photo.alt = 'Foto de Lucy Mazzini';
      photo.loading = 'eager';
    }
    const caption = document.querySelector('.portrait-caption');
    if (caption) caption.innerHTML = `<span>${strings.caption}</span><span>Full Stack Python · EBAC</span>`;
  }

  function injectReadabilityFixes() {
    if (document.getElementById('portfolio-readability-fixes')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-readability-fixes';
    style.textContent = `
      .project-card p,
      .archive-description { color: var(--ink) !important; opacity: 1 !important; }
      .archive-item:hover .archive-description { color: #0a0a0a !important; }
      .portrait-frame img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: 50% 38% !important;
        opacity: 1 !important;
        filter: none !important;
        image-rendering: auto !important;
      }
      [data-exame-course] { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);
  }

  function applyLanguage() {
    const strings = copy[currentLanguage()];
    document.querySelectorAll('[data-exame-i18n]').forEach(node => {
      const key = node.dataset.exameI18n;
      if (strings[key]) node.textContent = strings[key];
    });
    updateEbacStatus(strings);
    updatePortrait(strings);
  }

  function applyUpdates() {
    injectReadabilityFixes();
    ensureExameCard();
    applyLanguage();
    if (addFeaturedProjects()) rerenderProjects();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyUpdates, { once: true });
  } else {
    applyUpdates();
  }

  document.addEventListener('click', event => {
    if (event.target.closest('[data-language]')) setTimeout(applyLanguage, 0);
  });

  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-language') applyLanguage();
  });
})();
