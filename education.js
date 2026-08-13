(() => {
  'use strict';

  const copy = {
    pt: {
      status: 'MATRÍCULA EM AGO/2026',
      period: 'AGO/2026 · 4 SEMESTRES',
      title: 'Análise de Dados de Alta Performance — Tecnólogo',
      summary: 'Nova graduação tecnológica na Universidade Cruzeiro do Sul, com duração de quatro semestres, voltada ao aprofundamento em análise de dados e ao uso de raciocínio orientado por dados em tecnologia.',
      learning: 'Objetivos',
      one: 'Aprofundar análise, interpretação e comunicação de dados.',
      two: 'Fortalecer raciocínio quantitativo e decisões orientadas por evidências.',
      three: 'Conectar competências de dados ao desenvolvimento de produtos e aplicações full stack.',
      caption: 'Data Analytics · Cruzeiro do Sul'
    },
    en: {
      status: 'ENROLLED AUG/2026',
      period: 'AUG/2026 · 4 SEMESTERS',
      title: 'High-Performance Data Analysis — Technology Degree',
      summary: 'A new four-semester technology degree at Universidade Cruzeiro do Sul, focused on deepening data analysis skills and applying data-informed reasoning to technology.',
      learning: 'Goals',
      one: 'Deepen data analysis, interpretation and communication skills.',
      two: 'Strengthen quantitative reasoning and evidence-informed decision making.',
      three: 'Connect data skills to full-stack products and application development.',
      caption: 'Data Analytics · Cruzeiro do Sul'
    }
  };

  function currentLanguage() {
    try { return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; }
    catch { return 'pt'; }
  }

  function ensureCourseCard() {
    const grid = document.querySelector('.study-grid');
    if (!grid) return;

    if (!grid.querySelector('[data-cruzeiro-course]')) {
      grid.insertAdjacentHTML('afterbegin', `
        <article class="study-card study-card--data" data-cruzeiro-course style="grid-column:1/-1;min-height:500px">
          <div class="study-card-top"><span>UNIVERSIDADE CRUZEIRO DO SUL</span><span data-course-i18n="status"></span></div>
          <div class="study-period" data-course-i18n="period"></div>
          <h3 data-course-i18n="title" style="max-width:980px"></h3>
          <p data-course-i18n="summary" style="max-width:900px"></p>
          <div class="study-learning" style="max-width:980px">
            <span data-course-i18n="learning"></span>
            <ul>
              <li data-course-i18n="one"></li>
              <li data-course-i18n="two"></li>
              <li data-course-i18n="three"></li>
            </ul>
          </div>
          <div class="study-tags"><span>DATA ANALYSIS</span><span>ANALYTICS</span><span>PERFORMANCE</span><span>4 SEMESTRES</span></div>
        </article>`);
    }

    const caption = document.querySelector('.portrait-caption');
    if (caption && !caption.querySelector('[data-course-caption]')) {
      const item = document.createElement('span');
      item.dataset.courseCaption = '';
      caption.append(item);
    }

    applyLanguage();
  }

  function applyLanguage() {
    const language = currentLanguage();
    const strings = copy[language];
    document.querySelectorAll('[data-course-i18n]').forEach(node => {
      const key = node.dataset.courseI18n;
      if (strings[key]) node.textContent = strings[key];
    });
    const caption = document.querySelector('[data-course-caption]');
    if (caption) caption.textContent = strings.caption;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureCourseCard);
  else ensureCourseCard();

  document.addEventListener('click', event => {
    if (event.target.closest('[data-language]')) setTimeout(applyLanguage, 0);
  });
  window.addEventListener('storage', event => {
    if (event.key === 'portfolio-language') applyLanguage();
  });
})();
