(() => {
  'use strict';

  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* Storage may be blocked in embedded previews. */ } }
  };
  const state = { language: storage.get('portfolio-language') || 'pt', filter: 'all', query: '', activeProject: null };

  const translations = {
    pt: {
      navProjects: 'Projetos', navArchive: 'Arquivo', navAbout: 'Sobre', navContact: 'Contato',
      availability: 'Disponível para oportunidades em tecnologia',
      heroIntro: 'Desenvolvo produtos digitais que aproximam código, design e experiência humana — de interfaces responsivas a aplicações com APIs, IA e hardware criativo.',
      seeProjects: 'Ver projetos', projectCount: 'projetos mapeados', branchCount: 'branches de estudo', practiceYears: 'prática em programação',
      selectedWork: 'Trabalhos selecionados', projectsHeading: 'Projetos que unem função, narrativa e execução.',
      completeArchive: 'Arquivo completo', archiveHeading: 'Todos os repositórios, branches e deploys — sem repetição.',
      filterAll: 'Todos', filterProduct: 'Produtos', filterFundamentals: 'Fundamentos', filterExperimental: 'Experimentos',
      visibleResults: 'resultados visíveis', courseRepo: 'Abrir repositório do curso ↗', emptyState: 'Nenhum projeto encontrado com esses filtros.',
      aboutLabel: 'Sobre', aboutHeading: 'Curiosidade como método. Tecnologia como linguagem.',
      aboutLead: 'Sou Lucy Mazzini, desenvolvedora júnior com trajetória entre programação, design, pesquisa e arte tecnológica.',
      aboutBodyOne: 'Minha prática combina construção de interfaces, lógica, APIs e experiência do usuário. Gosto de transformar ideias complexas em produtos claros, acessíveis e visualmente marcantes.',
      aboutBodyTwo: 'Desde 2020, desenvolvo projetos web acadêmicos e autorais. No Makers / STEAM Lab USP, também investigo prototipagem, eletrônica e sistemas interativos — uma ponte entre software, objeto e espaço.',
      artPortfolio: 'Portfólio artístico ↗', toolbox: 'Caixa de ferramentas', toolboxDescription: 'Tecnologias usadas em projetos reais, exercícios e protótipos.',
      trajectory: 'Trajetória', trajectoryHeading: 'Experiência multidisciplinar, execução técnica e repertório visual.',
      timelineMakers: 'Pesquisa e projetos interdisciplinares em tecnologia, prototipagem, eletrônica criativa e inovação.',
      timelineChucky: 'Pesquisa criativa publicitária, referências visuais, tendências e construção de narrativas para campanhas.',
      timelineGuma: 'Pesquisa, desenvolvimento conceitual e assistência criativa em coleção de moda.',
      timelineBain: 'Estágio temporário com suporte operacional, organização de informações e colaboração entre áreas.',
      timelineCartel: 'Design gráfico e assistência de direção de arte para peças, campanhas e identidades visuais.',
      contactLabel: 'Vamos construir algo relevante.', contactHeading: 'Disponível para vagas júnior, projetos e colaborações.',
      footerBuilt: 'Projetado e desenvolvido com HTML, CSS e JavaScript.', backTop: 'Voltar ao topo ↑',
      previewPrompt: 'Clique em “carregar preview” para abrir o projeto aqui.', loadPreview: 'Carregar preview',
      openCase: 'Abrir projeto', sourceCode: 'Código-fonte', liveDemo: 'Demo ao vivo', externalCase: 'Ver referência externa', noPreview: 'Este projeto não possui demo pública.',
      category_product: 'Produto', category_frontend: 'Front-end', category_fundamentals: 'Fundamentos', category_experimental: 'Experimental',
      source_repository: 'Repositório', source_branch: 'Branch', source_case: 'Estudo de caso', status_wip: 'Em desenvolvimento',
      searchPlaceholder: 'Buscar projeto, tecnologia ou tema'
    },
    en: {
      navProjects: 'Projects', navArchive: 'Archive', navAbout: 'About', navContact: 'Contact',
      availability: 'Open to technology opportunities',
      heroIntro: 'I build digital products at the intersection of code, design and human experience — from responsive interfaces to applications using APIs, AI and creative hardware.',
      seeProjects: 'View projects', projectCount: 'mapped projects', branchCount: 'study branches', practiceYears: 'coding practice',
      selectedWork: 'Selected work', projectsHeading: 'Projects combining function, narrative and execution.',
      completeArchive: 'Complete archive', archiveHeading: 'Every repository, branch and deployment — without duplicates.',
      filterAll: 'All', filterProduct: 'Products', filterFundamentals: 'Fundamentals', filterExperimental: 'Experiments',
      visibleResults: 'visible results', courseRepo: 'Open course repository ↗', emptyState: 'No projects match these filters.',
      aboutLabel: 'About', aboutHeading: 'Curiosity as a method. Technology as a language.',
      aboutLead: 'I am Lucy Mazzini, a junior developer working across programming, design, research and technological art.',
      aboutBodyOne: 'My practice combines interface construction, logic, APIs and user experience. I enjoy transforming complex ideas into clear, accessible and visually distinctive products.',
      aboutBodyTwo: 'Since 2020, I have developed academic and independent web projects. At Makers / STEAM Lab USP, I also explore prototyping, electronics and interactive systems — bridging software, objects and space.',
      artPortfolio: 'Art portfolio ↗', toolbox: 'Toolbox', toolboxDescription: 'Technologies used across real projects, exercises and prototypes.',
      trajectory: 'Trajectory', trajectoryHeading: 'Multidisciplinary experience, technical execution and visual repertoire.',
      timelineMakers: 'Research and interdisciplinary projects involving technology, prototyping, creative electronics and innovation.',
      timelineChucky: 'Creative advertising research, visual references, trends and narrative development for campaigns.',
      timelineGuma: 'Research, conceptual development and creative assistance for a fashion collection.',
      timelineBain: 'Temporary internship supporting operations, information organization and cross-team collaboration.',
      timelineCartel: 'Graphic design and art direction assistance for campaign assets and visual identities.',
      contactLabel: 'Let’s build something relevant.', contactHeading: 'Available for junior roles, projects and collaborations.',
      footerBuilt: 'Designed and developed with HTML, CSS and JavaScript.', backTop: 'Back to top ↑',
      previewPrompt: 'Click “load preview” to open the project here.', loadPreview: 'Load preview',
      openCase: 'Open project', sourceCode: 'Source code', liveDemo: 'Live demo', externalCase: 'View external reference', noPreview: 'This project does not have a public demo.',
      category_product: 'Product', category_frontend: 'Front-end', category_fundamentals: 'Fundamentals', category_experimental: 'Experimental',
      source_repository: 'Repository', source_branch: 'Branch', source_case: 'Case study', status_wip: 'Work in progress',
      searchPlaceholder: 'Search project, technology or topic'
    }
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const t = (key) => translations[state.language][key] || key;
  const descriptionFor = (project) => project.description?.[state.language] || project.description?.pt || '';
  const categoryLabel = (category) => t(`category_${category}`);

  const featuredContainer = $('[data-featured-projects]');
  const archiveContainer = $('[data-project-list]');
  const visibleCount = $('[data-visible-count]');
  const emptyState = $('[data-empty-state]');
  const dialog = $('[data-project-dialog]');

  function initials(title) {
    return title.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  }

  function visualMarkup(project) {
    const label = `<span class="visual-label">${project.stack.slice(0, 3).join(' · ')}</span>`;
    if (project.visual === 'zabaan') return `<div class="visual visual--zabaan"><span class="glyph">سلام</span><span class="translit">SALÂM / OLÁ</span>${label}</div>`;
    if (project.visual === 'birthday') return `<div class="visual visual--birthday"><span class="date">13·04</span><span class="window"></span>${label}</div>`;
    if (project.visual === 'avatar') return `<div class="visual visual--avatar"><div class="element-ring"><span>AR</span><span>FOGO</span><span>TERRA</span><span>ÁGUA</span></div>${label}</div>`;
    if (project.visual === 'tea') return `<div class="visual visual--tea"><div class="tea-box">EARL<br>GREY</div><div class="tea-box">MATCHA<br>01</div><div class="tea-box">HIBISCO<br>02</div>${label}</div>`;
    if (project.visual === 'sports') return `<div class="visual visual--sports"><div class="sport-card"></div><div class="sport-card"></div>${label}</div>`;
    if (project.visual === 'fashion') return `<div class="visual visual--fashion"><span class="editorial-a">A</span><span class="editorial-note">ATELIÊ AURORA / MODA FEMININA / EDITORIAL WEB</span>${label}</div>`;
    const palette = ['#c8d6ff','#ffd6e5','#d8efc1','#ffe5b4','#d9d4ff','#c6f1ec'];
    const color = palette[Math.abs(project.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % palette.length];
    return `<div class="visual visual--default" style="--visual-bg:${color}"><span class="visual-code"><b>${project.year}</b><b>${project.source}</b></span><span class="visual-monogram">${initials(project.title)}</span>${label}</div>`;
  }

  function featuredCard(project, index) {
    return `
      <article class="project-card reveal" data-tilt data-project-id="${project.id}">
        <div class="project-card-header"><span>${String(index + 1).padStart(2, '0')} / ${project.year}</span><span>${categoryLabel(project.category)}</span></div>
        <div class="project-card-visual">${visualMarkup(project)}</div>
        <div class="project-card-body">
          <h3>${project.title}</h3>
          <p>${descriptionFor(project)}</p>
          <div class="project-card-footer">
            <div class="stack-list">${project.stack.slice(0, 5).map((item) => `<span>${item}</span>`).join('')}</div>
            <div class="project-card-actions">
              ${project.demo ? `<a class="project-direct-link project-direct-link--demo" href="${project.demo}" target="_blank" rel="noopener noreferrer">${t('liveDemo')} <span>↗</span></a>` : ''}
              ${project.repo ? `<a class="project-direct-link" href="${project.repo}" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>` : ''}
              <button class="open-project" type="button" data-open-project="${project.id}">${t('openCase')} <span>＋</span></button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function archiveItem(project, index) {
    const sourceType = project.source.includes('branch') ? t('source_branch') : project.source.includes('case') ? t('source_case') : t('source_repository');
    return `
      <article class="archive-item" data-archive-item data-category="${project.category}" data-searchable="${[project.title, descriptionFor(project), ...project.stack, project.branch || '', project.deployment || ''].join(' ').toLowerCase()}">
        <span class="archive-number">${String(index + 1).padStart(2, '0')}</span>
        <div class="archive-title"><h3>${project.title}</h3><small>${sourceType}${project.branch ? ` / ${project.branch}` : ''}${project.status === 'wip' ? ` / ${t('status_wip')}` : ''}</small></div>
        <p class="archive-description">${descriptionFor(project)}</p>
        <div class="archive-stack">${project.stack.slice(0, 4).map((item) => `<span>${item}</span>`).join('')}</div>
        <div class="archive-actions">
          ${project.demo ? `<a class="archive-live-link" href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="${t('liveDemo')}">LIVE</a>` : ''}
          ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" aria-label="${t('sourceCode')}">GH</a>` : ''}
          <button type="button" data-open-project="${project.id}" aria-label="${t('openCase')}">＋</button>
        </div>
      </article>`;
  }

  function renderProjects() {
    const featured = projects.filter((project) => project.featured);
    if (featuredContainer) featuredContainer.innerHTML = featured.map(featuredCard).join('');
    if (archiveContainer) archiveContainer.innerHTML = projects.map(archiveItem).join('');
    $('[data-project-count]').textContent = projects.length;
    bindDynamicEvents();
    applyFilters();
    setupRevealObserver();
  }

  function applyFilters() {
    const query = state.query.trim().toLowerCase();
    let count = 0;
    $$('[data-archive-item]').forEach((item) => {
      const matchesFilter = state.filter === 'all' || item.dataset.category === state.filter;
      const matchesQuery = !query || item.dataset.searchable.includes(query);
      const visible = matchesFilter && matchesQuery;
      item.hidden = !visible;
      if (visible) count += 1;
    });
    if (visibleCount) visibleCount.textContent = count;
    if (emptyState) emptyState.hidden = count !== 0;
  }

  function bindDynamicEvents() {
    $$('[data-open-project]').forEach((button) => button.addEventListener('click', () => openProject(button.dataset.openProject)));
    $$('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        if (matchMedia('(hover: none)').matches) return;
        const rect = card.getBoundingClientRect();
        const rx = ((event.clientY - rect.top) / rect.height - .5) * -2.5;
        const ry = ((event.clientX - rect.left) / rect.width - .5) * 2.5;
        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  function openProject(id) {
    const project = projects.find((item) => item.id === id);
    if (!project || !dialog) return;
    state.activeProject = project;
    $('[data-dialog-number]').textContent = String(projects.indexOf(project) + 1).padStart(2, '0');
    $('[data-dialog-category]').textContent = categoryLabel(project.category);
    $('[data-dialog-year]').textContent = project.year;
    $('[data-dialog-title]').textContent = project.title;
    $('[data-dialog-description]').textContent = descriptionFor(project);
    $('[data-dialog-domain]').textContent = project.demo ? new URL(project.demo).host : 'github.com/labyrt';
    $('[data-dialog-stack]').innerHTML = project.stack.map((item) => `<span>${item}</span>`).join('');
    $('[data-dialog-links]').innerHTML = [
      project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer"><span>${t('liveDemo')}</span><b>↗</b></a>` : '',
      project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer"><span>${t('sourceCode')}</span><b>↗</b></a>` : '',
      project.external ? `<a href="${project.external}" target="_blank" rel="noopener noreferrer"><span>${t('externalCase')}</span><b>↗</b></a>` : ''
    ].join('');
    resetPreview();
    dialog.showModal();
    document.body.classList.add('is-locked');
  }

  function resetPreview() {
    const preview = $('[data-dialog-preview]');
    const existing = $('iframe', preview);
    if (existing) existing.remove();
    const placeholder = $('[data-dialog-placeholder]');
    placeholder.hidden = false;
    const loadButton = $('[data-load-preview]');
    loadButton.hidden = !state.activeProject?.demo;
    $('span', placeholder).textContent = state.activeProject?.demo ? t('previewPrompt') : t('noPreview');
  }

  function loadPreview() {
    const project = state.activeProject;
    if (!project?.demo) return;
    const preview = $('[data-dialog-preview]');
    const iframe = document.createElement('iframe');
    iframe.src = project.demo;
    iframe.title = `${project.title} — preview`;
    iframe.loading = 'eager';
    iframe.referrerPolicy = 'no-referrer';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    $('[data-dialog-placeholder]').hidden = true;
    preview.appendChild(iframe);
  }

  function closeDialog() {
    if (!dialog?.open) return;
    dialog.close();
    document.body.classList.remove('is-locked');
    state.activeProject = null;
    resetPreview();
  }

  function setLanguage(language) {
    state.language = language;
    storage.set('portfolio-language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    $('[data-language]').textContent = language === 'pt' ? 'PT' : 'EN';
    $$('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.textContent = translations[language][key];
    });
    const search = $('[data-search]');
    if (search) search.placeholder = t('searchPlaceholder');
    renderProjects();
  }

  function setupRevealObserver() {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); instance.unobserve(entry.target); }
      });
    }, { threshold: .1, rootMargin: '0px 0px -40px' });
    $$('.reveal:not(.is-visible)').forEach((element) => observer.observe(element));
  }

  function setupCanvas() {
    const canvas = $('.ambient-canvas');
    if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = canvas.getContext('2d');
    let width = 0, height = 0, raf = 0;
    const points = Array.from({ length: 28 }, (_, index) => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00018, vy: (Math.random() - .5) * .00018, r: index % 5 === 0 ? 2 : 1 }));
    const resize = () => { width = canvas.width = innerWidth * devicePixelRatio; height = canvas.height = innerHeight * devicePixelRatio; };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
      context.fillStyle = context.strokeStyle;
      context.lineWidth = devicePixelRatio * .5;
      points.forEach((point) => {
        point.x += point.vx; point.y += point.vy;
        if (point.x < 0 || point.x > 1) point.vx *= -1;
        if (point.y < 0 || point.y > 1) point.vy *= -1;
        context.beginPath(); context.arc(point.x * width, point.y * height, point.r * devicePixelRatio, 0, Math.PI * 2); context.fill();
      });
      for (let i = 0; i < points.length; i += 1) for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i], b = points[j]; const dx = (a.x - b.x) * width; const dy = (a.y - b.y) * height; const distance = Math.hypot(dx, dy);
        if (distance < 190 * devicePixelRatio) { context.globalAlpha = 1 - distance / (190 * devicePixelRatio); context.beginPath(); context.moveTo(a.x * width, a.y * height); context.lineTo(b.x * width, b.y * height); context.stroke(); }
      }
      context.globalAlpha = 1; raf = requestAnimationFrame(draw);
    };
    resize(); draw(); addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else draw(); });
  }

  function setupGlobalInteractions() {
    $('[data-search]')?.addEventListener('input', (event) => { state.query = event.target.value; applyFilters(); });
    $$('[data-filter]').forEach((button) => button.addEventListener('click', () => {
      state.filter = button.dataset.filter;
      $$('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
      applyFilters();
    }));
    $('[data-language]')?.addEventListener('click', () => setLanguage(state.language === 'pt' ? 'en' : 'pt'));
    $('[data-theme-toggle]')?.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'ink' ? 'paper' : 'ink';
      document.documentElement.dataset.theme = next; storage.set('portfolio-theme', next);
    });
    const savedTheme = storage.get('portfolio-theme'); if (savedTheme) document.documentElement.dataset.theme = savedTheme;

    const menuButton = $('[data-menu-button]'); const mobileMenu = $('[data-mobile-menu]');
    menuButton?.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open)); mobileMenu.hidden = open; document.body.classList.toggle('is-locked', !open);
    });
    $$('a', mobileMenu).forEach((link) => link.addEventListener('click', () => { mobileMenu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); document.body.classList.remove('is-locked'); }));

    $('[data-dialog-close]')?.addEventListener('click', closeDialog);
    $('[data-load-preview]')?.addEventListener('click', loadPreview);
    dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
    dialog?.addEventListener('close', () => document.body.classList.remove('is-locked'));

    document.addEventListener('keydown', (event) => {
      if (event.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { event.preventDefault(); $('[data-search]')?.focus(); }
      if (event.key === 'Escape') closeDialog();
    });

    const progress = $('.scroll-progress span');
    addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
      const heroOne = $('.hero-line--one'); const heroTwo = $('.hero-line--two');
      if (scrollY < innerHeight) { heroOne.style.transform = `translateX(${scrollY * .025}px)`; heroTwo.style.transform = `translateX(${-scrollY * .035}px)`; }
    }, { passive: true });

    const cursor = $('.cursor');
    addEventListener('pointermove', (event) => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; cursor.classList.add('is-visible'); }, { passive: true });
    document.addEventListener('pointerover', (event) => { if (event.target.closest('a, button, [data-tilt]')) cursor.classList.add('is-active'); });
    document.addEventListener('pointerout', (event) => { if (event.target.closest('a, button, [data-tilt]')) cursor.classList.remove('is-active'); });

    $$('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
  }

  setupGlobalInteractions();
  setupCanvas();
  setLanguage(state.language);
})();
