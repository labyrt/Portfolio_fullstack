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

  function currentLanguage() {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt';
    } catch {
      return 'pt';
    }
  }

  function ensureExameCard() {
    const grid = document.querySelector('.study-grid');
    if (!grid) return;

    if (!grid.querySelector('[data-exame-course]')) {
      grid.insertAdjacentHTML('afterbegin', `
        <article class="study-card reveal" data-exame-course>
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
      photo.src = './assets/profile-lucy-2026.svg';
      photo.alt = 'Foto de perfil de Lucy Mazzini';
    }

    const caption = document.querySelector('.portrait-caption');
    if (caption) {
      caption.innerHTML = `<span>${strings.caption}</span><span>Full Stack Python · EBAC</span>`;
    }
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
    ensureExameCard();
    applyLanguage();
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
