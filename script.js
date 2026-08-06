(() => {
  'use strict';

  // Dados incorporados neste arquivo para evitar falhas de carregamento entre arquivos.
  const projects = [
  {
    id: 'zabaan', title: 'Zabaan', year: '2026', category: 'product', featured: true, visual: 'zabaan', status: 'published',
    description: {
      pt: 'Plataforma open source para aprender persa em português, com 12 aulas, flashcards, quizzes, escrita, progresso local, síntese de voz e tutor de IA executado com Ollama.',
      en: 'Open-source Persian learning platform for Portuguese speakers with 12 lessons, flashcards, quizzes, writing practice, local progress, speech synthesis and an optional Ollama-powered AI tutor.'
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Web Speech API', 'Ollama', 'Qwen'],
    repo: 'https://github.com/labyrt/Zabaan', demo: 'https://zabaan.vercel.app', source: 'repository', deployment: 'zabaan'
  },
  {
    id: 'birthday', title: 'Aniversário Virtual', year: '2026', category: 'product', featured: false, visual: 'birthday', status: 'published',
    description: {
      pt: 'Landing page de evento para 13 de abril com contagem regressiva, humor brasileiro e uma direção visual inspirada em MSN, dreamcore e cultura digital dos anos 2000.',
      en: 'Event landing page for April 13 featuring a live countdown, Brazilian internet humor and a visual direction inspired by MSN, dreamcore and 2000s digital culture.'
    },
    stack: ['Next.js', 'JavaScript', 'CSS', 'Responsive Design'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/agenda_anicersario', branch: 'agenda_anicersario', demo: 'https://aniversario-virtual-lucy.vercel.app', source: 'branch', deployment: 'aniversario-virtual-lucy'
  },
  {
    id: 'avatar', title: 'Avatar: A Lenda de Aang', year: '2026', category: 'frontend', featured: false, visual: 'avatar', status: 'published',
    description: {
      pt: 'Landing page temática com navegação responsiva, hierarquia cinematográfica e composição visual baseada nos quatro elementos do universo de Avatar.',
      en: 'Themed landing page with responsive navigation, cinematic hierarchy and visual composition based on the four elements from the Avatar universe.'
    },
    stack: ['HTML5', 'CSS3', 'Less', 'JavaScript', 'Responsive Design'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/avatar_landingpage', branch: 'avatar_landingpage', demo: 'https://avatar-a-lenda-de-aang.vercel.app', source: 'branch', deployment: 'avatar-a-lenda-de-aang'
  },
  {
    id: 'casa-verde', title: 'Casa Verde — Loja de Chás', year: '2026', category: 'product', featured: true, visual: 'tea', status: 'published',
    description: {
      pt: 'Vitrine de e-commerce responsiva para uma marca de chás, com catálogo, identidade em tons naturais, componentes interativos e foco em navegação simples.',
      en: 'Responsive e-commerce storefront for a tea brand, featuring a product catalog, natural color system, interactive components and simple navigation.'
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    repo: 'https://github.com/labyrt/exercicio_loja', branch: 'exercicio_loja', demo: 'https://exercicio-loja-self.vercel.app', source: 'repository + branch', deployment: 'exercicio-loja'
  },
  {
    id: 'atelie-aurora', title: 'Ateliê Aurora', year: '2026', category: 'frontend', featured: true, visual: 'fashion', status: 'published',
    description: {
      pt: 'Landing page editorial para moda feminina premium, com hero fotográfico, carrossel, catálogo, descontos, depoimentos e newsletter.',
      en: 'Editorial landing page for a premium womenswear brand with a photographic hero, carousel, catalog, promotions, testimonials and newsletter.'
    },
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    repo: 'https://github.com/labyrt/projeto-3', demo: 'https://projeto-3-teal.vercel.app', source: 'repository', deployment: 'projeto-3'
  },
  {
    id: 'portfolio', title: 'Lucy Mazzini — Portfolio', year: '2026', category: 'product', featured: false, visual: 'portfolio', status: 'published',
    description: { pt: 'Sistema de portfólio brutalista e responsivo que reúne repositórios, branches e deploys em um arquivo interativo, com filtros, busca, gráficos, preview ao vivo e interface bilíngue.', en: 'Brutalist responsive portfolio system bringing repositories, branches and deployments into an interactive archive with filters, search, charts, live previews and a bilingual interface.' },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Vercel'],
    repo: 'https://github.com/labyrt/Portfolio_fullstack', demo: 'https://noky.vercel.app', source: 'repository', deployment: 'noky'
  },
  {
    id: 'styled-jobs', title: 'EBAC Jobs — Styled Components', year: '2026', category: 'frontend', featured: false, visual: 'jobs', status: 'code',
    description: { pt: 'Interface de vagas desenvolvida em React e TypeScript, convertendo formulário, cabeçalho, hero, cards e lista para Styled Components.', en: 'Job board interface built with React and TypeScript, converting the form, header, hero, cards and list to Styled Components.' },
    stack: ['React', 'TypeScript', 'Styled Components'],
    repo: 'https://github.com/labyrt/base_exercicio_css_in_js', source: 'repository'
  },
  {
    id: 'react-redux', title: 'Vagas com React Redux', year: '2026', category: 'frontend', featured: false, visual: 'redux', status: 'code',
    description: { pt: 'Exercício de arquitetura de estado para uma interface de vagas, aplicando React, Redux e separação entre componentes e dados.', en: 'State architecture exercise for a job listing interface using React, Redux and separation between components and data.' },
    stack: ['React', 'Redux', 'JavaScript'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_react_redux', branch: 'exercicio_react_redux', source: 'branch'
  },
  {
    id: 'react-imc', title: 'Calculadora de IMC', year: '2026', category: 'frontend', featured: false, visual: 'calculator', status: 'published',
    description: { pt: 'Aplicação React com formulário de altura e peso, cálculo instantâneo do IMC e classificação do resultado.', en: 'React application with height and weight fields, instant BMI calculation and result classification.' },
    stack: ['React', 'JavaScript', 'CSS'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/reactjs', branch: 'reactjs', demo: 'https://ebac-react-imc.vercel.app', source: 'branch', deployment: 'ebac-react-imc'
  },
  {
    id: 'vue-calculator', title: 'Calculadora Aritmética Vue', year: '2026', category: 'frontend', featured: false, visual: 'calculator', status: 'published',
    description: { pt: 'Calculadora reativa com dois valores e seleção de operação; o resultado é recalculado automaticamente a cada alteração.', en: 'Reactive calculator with two values and an operation selector; the result updates automatically whenever inputs change.' },
    stack: ['Vue.js', 'Vite', 'JavaScript', 'CSS'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/Vue_js', branch: 'Vue_js', demo: 'https://ebac-vue-calculadora.vercel.app', source: 'branch', deployment: 'ebac-vue-calculadora'
  },
  {
    id: 'grade-calculator', title: 'Calculadora de Médias', year: '2026', category: 'frontend', featured: false, visual: 'grades', status: 'published',
    description: { pt: 'Aplicação para registrar atividades e notas, calcular médias e comunicar aprovação ou reprovação com feedback visual.', en: 'Application for registering assignments and grades, calculating averages and communicating pass or fail results with visual feedback.' },
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/labyrt/projeto_calculadora_medias', demo: 'https://projeto-calculadora-medias-lemon-eta.vercel.app', source: 'repository', deployment: 'projeto-calculadora-medias'
  },
  {
    id: 'contacts', title: 'Agenda de Contatos', year: '2026', category: 'frontend', featured: false, visual: 'contacts', status: 'published',
    description: { pt: 'Agenda web com formulário para nome e telefone, validação simples e inserção dinâmica dos contatos em tabela.', en: 'Web contact book with name and phone form, simple validation and dynamic insertion into a table.' },
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/labyrt/agenda_de_contatos', demo: 'https://agenda-de-contatos-ten-bice.vercel.app', source: 'repository', deployment: 'agenda-de-contatos'
  },
  {
    id: 'games-shop', title: 'Games Shop', year: '2026', category: 'frontend', featured: false, visual: 'games', status: 'published',
    description: { pt: 'Site institucional de uma loja de games com apresentação da marca, logos de plataformas, formulário e seção de contato.', en: 'Institutional website for a game store with brand presentation, platform logos, contact form and location section.' },
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
    repo: 'https://github.com/labyrt/sites_gamesshop', demo: 'https://sites-gamesshop-sigma.vercel.app', source: 'repository', deployment: 'sites-gamesshop'
  },
  {
    id: 'tech-vision', title: 'Tech Vision', year: '2026', category: 'frontend', featured: false, visual: 'tech', status: 'published',
    description: { pt: 'Página responsiva em Bootstrap com menu, carrossel, grid, cards e seções sobre tendências de tecnologia.', en: 'Responsive Bootstrap page with navigation, carousel, grid, cards and sections covering technology trends.' },
    stack: ['Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_bootstrap2', branch: 'exercicio_bootstrap2', demo: 'https://ebac-bootstrap-tech-vision.vercel.app', source: 'branch', deployment: 'ebac-bootstrap-tech-vision'
  },
  {
    id: 'bootstrap-form', title: 'Formulário Bootstrap', year: '2026', category: 'frontend', featured: false, visual: 'form', status: 'published',
    description: { pt: 'Exercício de formulário responsivo com componentes, grid e validação visual do Bootstrap.', en: 'Responsive form exercise using Bootstrap components, grid and visual validation.' },
    stack: ['Bootstrap', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_bootstrap', branch: 'exercicio_bootstrap', demo: 'https://ebac-bootstrap-form-labyrts-projects.vercel.app', source: 'branch', deployment: 'ebac-bootstrap-form'
  },
  {
    id: 'ajax-github', title: 'Perfil GitHub via AJAX', year: '2026', category: 'frontend', featured: false, visual: 'github', status: 'published',
    description: { pt: 'Interface que consulta a API do GitHub com Fetch, trata erros e preenche dinamicamente dados de perfil e repositórios.', en: 'Interface that queries the GitHub API with Fetch, handles errors and dynamically fills profile and repository data.' },
    stack: ['JavaScript', 'Fetch API', 'REST API', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_ajax', branch: 'exercicio_ajax', demo: 'https://ebac-ajax-github.vercel.app', source: 'branch', deployment: 'ebac-ajax-github'
  },
  {
    id: 'jquery-plugins', title: 'Cadastro com Plugins jQuery', year: '2026', category: 'frontend', featured: false, visual: 'form', status: 'published',
    description: { pt: 'Página com carrossel Slick, máscaras de entrada, validação de formulário e mensagens em português.', en: 'Page combining a Slick carousel, input masks, form validation and Portuguese validation messages.' },
    stack: ['jQuery', 'Slick', 'jQuery Mask', 'jQuery Validate', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/plugins_jquery_exercicio', branch: 'plugins_jquery_exercicio', demo: 'https://ebac-jquery-plugins.vercel.app', source: 'branch', deployment: 'ebac-jquery-plugins'
  },
  {
    id: 'jquery-tasks', title: 'Lista de Tarefas jQuery', year: '2026', category: 'frontend', featured: false, visual: 'tasks', status: 'published',
    description: { pt: 'Lista de tarefas com inclusão dinâmica, interação por clique e indicação visual de itens concluídos.', en: 'Task list with dynamic insertion, click interactions and visual indication of completed items.' },
    stack: ['jQuery', 'JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_jquery', branch: 'exercicio_jquery', demo: 'https://ebac-jquery-tarefas.vercel.app', source: 'branch', deployment: 'ebac-jquery-tarefas'
  },
  {
    id: 'sass-store', title: 'Loja com Sass', year: '2026', category: 'frontend', featured: false, visual: 'store', status: 'published',
    description: { pt: 'Interface de loja organizada com variáveis, módulos, nesting e compilação Sass para CSS.', en: 'Store interface organized with variables, modules, nesting and Sass-to-CSS compilation.' },
    stack: ['Sass', 'SCSS', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_sass', branch: 'exercicio_sass', demo: 'https://ebac-sass-loja.vercel.app', source: 'branch', deployment: 'ebac-sass-loja'
  },
  {
    id: 'less-store', title: 'Loja com Less', year: '2026', category: 'frontend', featured: false, visual: 'store', status: 'published',
    description: { pt: 'Projeto de estilização modular usando variáveis, mixins e organização de código com Less.', en: 'Modular styling project using variables, mixins and code organization with Less.' },
    stack: ['Less', 'HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio-less', branch: 'exercicio-less', demo: 'https://ebac-less-loja.vercel.app', source: 'branch', deployment: 'ebac-less-loja'
  },
  {
    id: 'gulp-gallery', title: 'Galeria com Gulp', year: '2026', category: 'fundamentals', featured: false, visual: 'gallery', status: 'published',
    description: { pt: 'Galeria de imagens com pipeline Gulp para automatizar tarefas, processar assets e organizar a entrega front-end.', en: 'Image gallery with a Gulp pipeline to automate tasks, process assets and organize front-end delivery.' },
    stack: ['Gulp', 'JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_gulp', branch: 'exercicio_gulp', demo: 'https://ebac-gulp-galeria.vercel.app', source: 'branch', deployment: 'ebac-gulp-galeria'
  },
  {
    id: 'grunt-focusboard', title: 'Focusboard com Grunt', year: '2026', category: 'fundamentals', featured: false, visual: 'board', status: 'published',
    description: { pt: 'Painel de produtividade usado para praticar automação de tarefas, minificação e build com Grunt.', en: 'Productivity board used to practice task automation, minification and build workflows with Grunt.' },
    stack: ['Grunt', 'JavaScript', 'HTML5', 'CSS3'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_grunt', branch: 'exercicio_grunt', demo: 'https://ebac-grunt-focusboard.vercel.app', source: 'branch', deployment: 'ebac-grunt-focusboard'
  },
  {
    id: 'css-practices', title: 'Boas Práticas CSS', year: '2026', category: 'fundamentals', featured: false, visual: 'css', status: 'published',
    description: { pt: 'Refatoração de uma página aplicando organização semântica, metodologia BEM e separação clara de responsabilidades no CSS.', en: 'Page refactor applying semantic organization, BEM methodology and clearer separation of CSS responsibilities.' },
    stack: ['CSS3', 'BEM', 'HTML5'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/boas_praticas_css', branch: 'boas_praticas_css', demo: 'https://ebac-css-boas-praticas.vercel.app', source: 'branch', deployment: 'ebac-css-boas-praticas'
  },
  {
    id: 'news-portal', title: 'Portal de Notícias', year: '2026', category: 'frontend', featured: false, visual: 'news', status: 'published',
    description: { pt: 'Layout editorial de notícias com seções temáticas, cards, imagens e estrutura responsiva em HTML e CSS.', en: 'Editorial news layout with themed sections, cards, imagery and a responsive HTML/CSS structure.' },
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_css', branch: 'exercicio_css', demo: 'https://ebac-css-portal-noticias.vercel.app', source: 'branch', deployment: 'ebac-css-portal-noticias'
  },
  {
    id: 'html-register', title: 'Formulário de Cadastro', year: '2026', category: 'fundamentals', featured: false, visual: 'form', status: 'published',
    description: { pt: 'Página de cadastro construída para praticar HTML semântico, tipos de input, labels e estrutura de formulários.', en: 'Registration page built to practice semantic HTML, input types, labels and form structure.' },
    stack: ['HTML5', 'Forms', 'Accessibility'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_html', branch: 'exercicio_html', demo: 'https://ebac-html-cadastro.vercel.app', source: 'branch', deployment: 'ebac-html-cadastro'
  },
  {
    id: 'html-js-validation', title: 'Validação HTML + JavaScript', year: '2026', category: 'fundamentals', featured: false, visual: 'validation', status: 'published',
    description: { pt: 'Formulário que compara valores numéricos, valida a condição definida e exibe mensagens de sucesso ou erro.', en: 'Form that compares numeric values, validates a defined condition and displays success or error messages.' },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'DOM'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_html_js', branch: 'exercicio_html_js', demo: 'https://ebac-html-js-validacao.vercel.app', source: 'branch', deployment: 'ebac-html-js-validacao'
  },
  {
    id: 'typescript-functions', title: 'Funções em TypeScript', year: '2026', category: 'fundamentals', featured: false, visual: 'code', status: 'published',
    description: { pt: 'Exercício de tipagem com funções de multiplicação e saudação, compilação pelo TypeScript e projeto Vite.', en: 'Typing exercise with multiplication and greeting functions, TypeScript compilation and a Vite project setup.' },
    stack: ['TypeScript', 'Vite', 'JavaScript'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_ts', branch: 'exercicio_ts', demo: 'https://ebac-typescript-funcoes.vercel.app', source: 'branch', deployment: 'ebac-typescript-funcoes'
  },
  {
    id: 'es6-students', title: 'Alunos e Notas — ES6+', year: '2026', category: 'fundamentals', featured: false, visual: 'grades', status: 'published',
    description: { pt: 'Manipulação de um array de alunos e notas usando objetos, arrow functions e recursos modernos do JavaScript.', en: 'Manipulation of a student-and-grades array using objects, arrow functions and modern JavaScript features.' },
    stack: ['JavaScript ES6+', 'Arrays', 'Objects'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_es6', branch: 'exercicio_es6', demo: 'https://ebac-es6-alunos.vercel.app', source: 'branch', deployment: 'ebac-es6-alunos'
  },
  {
    id: 'oop-js', title: 'Orientação a Objetos em JavaScript', year: '2026', category: 'fundamentals', featured: false, visual: 'code', status: 'published',
    description: { pt: 'Modelagem com classe abstrata, herança, especializações e instâncias para praticar os fundamentos de orientação a objetos.', en: 'Modeling exercise with an abstract class, inheritance, specializations and instances to practice object-oriented fundamentals.' },
    stack: ['JavaScript', 'OOP', 'Classes', 'Inheritance'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/oo_js', branch: 'oo_js', demo: 'https://ebac-oop-javascript.vercel.app', source: 'branch', deployment: 'ebac-oop-javascript'
  },
  {
    id: 'git-exercise', title: 'Fluxo Git e GitHub', year: '2026', category: 'fundamentals', featured: false, visual: 'git', status: 'code',
    description: { pt: 'Exercício de versionamento cobrindo criação de branch, commits, push, organização de histórico e publicação no GitHub.', en: 'Version-control exercise covering branch creation, commits, push, history organization and GitHub publishing.' },
    stack: ['Git', 'GitHub', 'Version Control'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/exercicio_git', branch: 'exercicio_git', source: 'branch'
  },
  {
    id: 'course-repository', title: 'Curso EBAC Front-end — Arquivo', year: '2026', category: 'fundamentals', featured: false, visual: 'archive', status: 'code',
    description: { pt: 'Repositório central que reúne exercícios de HTML, CSS, JavaScript, jQuery, Bootstrap, preprocessadores, automação e frameworks.', en: 'Central repository collecting exercises in HTML, CSS, JavaScript, jQuery, Bootstrap, preprocessors, automation and frameworks.' },
    stack: ['Git', 'HTML', 'CSS', 'JavaScript', 'React', 'Vue'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend', branch: 'main', source: 'repository'
  },
  {
    id: 'glitch-magazine', title: 'Glitch Magazine', year: '2025', category: 'experimental', featured: false, visual: 'glitch', status: 'wip',
    description: { pt: 'Repositório experimental iniciado com React e Vite para explorar uma publicação digital. Atualmente permanece como protótipo inicial.', en: 'Experimental repository started with React and Vite to explore a digital publication. It currently remains an early-stage prototype.' },
    stack: ['React', 'Vite', 'JavaScript'],
    repo: 'https://github.com/labyrt/glitchmagazine', source: 'repository'
  },
  {
    id: 'inova-usp', title: 'Escultura Interativa — INOVA USP', year: '2025', category: 'experimental', featured: false, visual: 'arduino', status: 'case-study',
    description: { pt: 'Escultura programada em Arduino/C++ com temporizador, display Nokia 5110, motor DC e lâmpada acionados em uma sequência performática.', en: 'Interactive sculpture programmed in Arduino/C++ with a timer, Nokia 5110 display, DC motor and lamp triggered in a performative sequence.' },
    stack: ['Arduino', 'C++', 'Electronics', 'Nokia 5110', 'DC Motor'],
    repo: 'https://github.com/labyrt', source: 'case study'
  }
];
  window.PORTFOLIO_PROJECTS = projects;
  const storage = {
    get(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { window.localStorage.setItem(key, value); } catch { /* Storage may be blocked in embedded previews. */ } }
  };
  const state = { language: storage.get('portfolio-language') || 'pt', filter: 'all', query: '', sort: 'curated', activeProject: null };

  const translations = {
    pt: {
      navProjects: 'Projetos', navArchive: 'Arquivo', navAbout: 'Sobre', navStudies: 'Estudos', navExperience: 'Experiências', navContact: 'Contato',
      availability: 'Disponível para oportunidades em tecnologia',
      heroIntro: 'Desenvolvo produtos digitais que aproximam código, design e experiência humana — de interfaces responsivas a aplicações com APIs, IA e hardware criativo.',
      seeProjects: 'Ver projetos', projectCount: 'projetos mapeados', branchCount: 'branches de estudo', practiceYears: 'prática em programação',
      selectedWork: 'Trabalhos selecionados', projectsHeading: 'Projetos que unem função, narrativa e execução.',
      completeArchive: 'Arquivo completo', archiveHeading: 'Todos os repositórios, branches e deploys.',
      filterAll: 'Todos', filterProduct: 'Produtos', filterFundamentals: 'Fundamentos', filterExperimental: 'Experimentos',
      visibleResults: 'resultados visíveis', courseRepo: 'Abrir repositório do curso ↗', emptyState: 'Nenhum projeto encontrado com esses filtros.',
      sortLabel: 'Ordenar', sortCurated: 'Curadoria', sortTitle: 'A—Z', sortNewest: 'Mais recentes', clearSearch: 'Limpar pesquisa',
      statsVisible: 'projetos', statsLive: 'demos ao vivo', statsTech: 'tecnologias', quickSearch: 'Pesquisas rápidas', queryFor: 'para',
      aboutLabel: 'Sobre', aboutHeading: 'Curiosidade como método. Tecnologia como linguagem.',
      aboutLead: 'Sou Lucy Mazzini, desenvolvedora júnior com trajetória entre programação, design, pesquisa e arte tecnológica.',
      aboutBodyOne: 'Minha prática combina construção de interfaces, lógica, APIs e experiência do usuário. Gosto de transformar ideias complexas em produtos claros, acessíveis e visualmente marcantes.',
      aboutBodyTwo: 'Desde 2020, desenvolvo projetos web acadêmicos e autorais. No Makers / STEAM Lab USP, também investigo prototipagem, eletrônica e sistemas interativos — uma ponte entre software, objeto e espaço.',
      artPortfolio: 'Portfólio artístico ↗', toolbox: 'Caixa de ferramentas', toolboxDescription: 'Tecnologias usadas em projetos reais, exercícios e protótipos.',
      studiesLabel: 'Estudos', studiesHeading: 'Formação técnica e pensamento interdisciplinar.', studyOngoing: 'Em andamento', studyPaused: 'Curso trancado', studyLearningLabel: 'Aprendizados',
      studyEbacTitle: 'Desenvolvedora Full Stack Python — Profissionalizante', studyEbacSummary: 'Formação profissionalizante de dois anos voltada à construção de aplicações web completas, da interface ao back-end, com prática contínua por projetos.',
      studyEbacOne: 'HTML, CSS, JavaScript e TypeScript com interfaces responsivas.', studyEbacTwo: 'React, Vue, Node.js, APIs, lógica de programação e organização de aplicações.', studyEbacThree: 'Git, GitHub, automação de build, testes, publicação e boas práticas de desenvolvimento.',
      studyUspTitle: 'Engenharia Ambiental — Bacharelado', studyUspSummary: 'Percurso universitário interdisciplinar que fortaleceu pensamento sistêmico, pesquisa e análise de problemas complexos ligados a ambiente, sociedade e tecnologia.',
      studyUspOne: 'Raciocínio quantitativo, investigação científica e leitura crítica de dados.', studyUspTwo: 'Compreensão de sistemas ambientais e relações entre processos naturais e humanos.', studyUspThree: 'Trabalho interdisciplinar, documentação e desenvolvimento de soluções orientadas a impacto.',
      experienceLabel: 'Experiências', experienceHeading: 'Experiência multidisciplinar, execução técnica e repertório visual.',
      timelineMakers: 'Pesquisa e projetos interdisciplinares em tecnologia, prototipagem, eletrônica criativa e inovação.',
      timelineChucky: 'Pesquisa criativa publicitária, referências visuais, tendências e construção de narrativas para campanhas.',
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
      navProjects: 'Projects', navArchive: 'Archive', navAbout: 'About', navStudies: 'Studies', navExperience: 'Experience', navContact: 'Contact',
      availability: 'Open to technology opportunities',
      heroIntro: 'I build digital products at the intersection of code, design and human experience — from responsive interfaces to applications using APIs, AI and creative hardware.',
      seeProjects: 'View projects', projectCount: 'mapped projects', branchCount: 'study branches', practiceYears: 'coding practice',
      selectedWork: 'Selected work', projectsHeading: 'Projects combining function, narrative and execution.',
      completeArchive: 'Complete archive', archiveHeading: 'Every repository, branch and deployment.',
      filterAll: 'All', filterProduct: 'Products', filterFundamentals: 'Fundamentals', filterExperimental: 'Experiments',
      visibleResults: 'visible results', courseRepo: 'Open course repository ↗', emptyState: 'No projects match these filters.',
      sortLabel: 'Sort', sortCurated: 'Curated', sortTitle: 'A—Z', sortNewest: 'Newest', clearSearch: 'Clear search',
      statsVisible: 'projects', statsLive: 'live demos', statsTech: 'technologies', quickSearch: 'Quick searches', queryFor: 'for',
      aboutLabel: 'About', aboutHeading: 'Curiosity as a method. Technology as a language.',
      aboutLead: 'I am Lucy Mazzini, a junior developer working across programming, design, research and technological art.',
      aboutBodyOne: 'My practice combines interface construction, logic, APIs and user experience. I enjoy transforming complex ideas into clear, accessible and visually distinctive products.',
      aboutBodyTwo: 'Since 2020, I have developed academic and independent web projects. At Makers / STEAM Lab USP, I also explore prototyping, electronics and interactive systems — bridging software, objects and space.',
      artPortfolio: 'Art portfolio ↗', toolbox: 'Toolbox', toolboxDescription: 'Technologies used across real projects, exercises and prototypes.',
      studiesLabel: 'Studies', studiesHeading: 'Technical training and interdisciplinary thinking.', studyOngoing: 'In progress', studyPaused: 'Paused degree', studyLearningLabel: 'Learning',
      studyEbacTitle: 'Full Stack Python Developer — Professional Program', studyEbacSummary: 'Two-year professional program focused on building complete web applications, from interface to back end, through continuous project-based practice.',
      studyEbacOne: 'HTML, CSS, JavaScript and TypeScript for responsive interfaces.', studyEbacTwo: 'React, Vue, Node.js, APIs, programming logic and application organization.', studyEbacThree: 'Git, GitHub, build automation, testing, publishing and development practices.',
      studyUspTitle: 'Environmental Engineering — Bachelor Program', studyUspSummary: 'An interdisciplinary university path that strengthened systems thinking, research and analysis of complex problems connecting environment, society and technology.',
      studyUspOne: 'Quantitative reasoning, scientific inquiry and critical data reading.', studyUspTwo: 'Understanding environmental systems and relationships between natural and human processes.', studyUspThree: 'Interdisciplinary work, documentation and impact-oriented solution development.',
      experienceLabel: 'Experience', experienceHeading: 'Multidisciplinary experience, technical execution and visual repertoire.',
      timelineMakers: 'Research and interdisciplinary projects involving technology, prototyping, creative electronics and innovation.',
      timelineChucky: 'Creative advertising research, visual references, trends and narrative development for campaigns.',
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
  const categories = ['product', 'frontend', 'fundamentals', 'experimental'];
  const normalizeText = (value = '') => String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9+#./\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const searchTextFor = (project) => normalizeText([
    project.title,
    project.description?.pt,
    project.description?.en,
    ...project.stack,
    project.branch,
    project.deployment,
    project.category,
    project.source
  ].filter(Boolean).join(' '));
  const matchesQuery = (project, query) => {
    const tokens = normalizeText(query).split(' ').filter(Boolean);
    if (!tokens.length) return true;
    const haystack = searchTextFor(project);
    return tokens.every((token) => haystack.includes(token));
  };

  const featuredContainer = $('[data-featured-projects]');
  const archiveContainer = $('[data-project-list]');
  const visibleCount = $('[data-visible-count]');
  const emptyState = $('[data-empty-state]');
  const dialog = $('[data-project-dialog]');
  const resultsChart = $('[data-results-chart]');
  const searchInput = $('[data-search]');
  const clearSearchButton = $('[data-clear-search]');
  const searchSuggestions = $('[data-search-suggestions]');

  function initials(title) {
    return title.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join('').toUpperCase();
  }

  function visualMarkup(project) {
    const label = `<span class="visual-label">${project.stack.slice(0, 3).join(' · ')}</span>`;
    if (project.visual === 'zabaan') return `<div class="visual visual--zabaan"><span class="glyph">سلام</span><span class="translit">SALÂM / OLÁ</span>${label}</div>`;
    if (project.visual === 'birthday') return `<div class="visual visual--birthday"><span class="date">13·04</span><span class="window"></span>${label}</div>`;
    if (project.visual === 'avatar') return `<div class="visual visual--avatar"><div class="element-ring"><span>AR</span><span>FOGO</span><span>TERRA</span><span>ÁGUA</span></div>${label}</div>`;
    if (project.visual === 'tea') return `<div class="visual visual--tea"><div class="tea-box">EARL<br>GREY</div><div class="tea-box">MATCHA<br>01</div><div class="tea-box">HIBISCO<br>02</div>${label}</div>`;
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
      <article class="archive-item" data-archive-item data-project-id="${project.id}" data-category="${project.category}">
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

  function sortedProjects() {
    const list = [...projects];
    if (state.sort === 'title') return list.sort((a, b) => a.title.localeCompare(b.title, state.language));
    if (state.sort === 'newest') return list.sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title, state.language));
    return list;
  }

  function renderSearchSuggestions() {
    if (!searchSuggestions) return;
    const frequency = new Map();
    projects.forEach((project) => project.stack.forEach((tech) => frequency.set(tech, (frequency.get(tech) || 0) + 1)));
    const suggestions = [...frequency.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8);
    searchSuggestions.innerHTML = `<span>${t('quickSearch')}</span>${suggestions.map(([tech, count]) => `<button type="button" data-search-suggestion="${tech}">${tech}<b>${count}</b></button>`).join('')}`;
  }

  function renderArchive() {
    applyFilters();
  }

  function renderProjects() {
    const projectCount = $('[data-project-count]');
    if (projectCount) projectCount.textContent = projects.length;

    if (!projects.length) {
      const message = state.language === 'pt'
        ? 'Os projetos não puderam ser exibidos. Recarregue a página; se o problema continuar, verifique o deployment mais recente.'
        : 'Projects could not be loaded. Check that projects.js was uploaded completely and without accidental changes.';
      if (featuredContainer) featuredContainer.innerHTML = `<p class="project-load-error" role="alert">${message}</p>`;
      if (archiveContainer) archiveContainer.innerHTML = '';
      if (visibleCount) visibleCount.textContent = '0';
      if (emptyState) emptyState.hidden = false;
      return;
    }

    const featured = projects.filter((project) => project.featured);
    if (featuredContainer) featuredContainer.innerHTML = featured.map(featuredCard).join('');
    renderSearchSuggestions();
    renderArchive();
    setupRevealObserver();
  }

  function setFilter(filter) {
    state.filter = categories.includes(filter) ? filter : 'all';
    $$('[data-filter]').forEach((button) => button.classList.toggle('is-active', button.dataset.filter === state.filter));
    applyFilters();
  }

  function updateDashboard(queryMatches, visibleProjects) {
    const techCount = new Set(visibleProjects.flatMap((project) => project.stack)).size;
    const liveCount = visibleProjects.filter((project) => project.demo).length;
    $('[data-stat-visible]').textContent = visibleProjects.length;
    $('[data-stat-live]').textContent = liveCount;
    $('[data-stat-tech]').textContent = techCount;

    const counts = Object.fromEntries(categories.map((category) => [category, queryMatches.filter((project) => project.category === category).length]));
    $$('[data-filter-count]').forEach((element) => {
      element.textContent = element.dataset.filterCount === 'all' ? queryMatches.length : counts[element.dataset.filterCount] || 0;
    });

    if (resultsChart) {
      const max = Math.max(1, ...Object.values(counts));
      resultsChart.innerHTML = categories.map((category) => {
        const count = counts[category];
        const width = count ? Math.max(8, Math.round((count / max) * 100)) : 0;
        return `<button class="chart-row${state.filter === category ? ' is-active' : ''}" type="button" data-chart-filter="${category}" aria-label="${categoryLabel(category)}: ${count}">
          <span>${categoryLabel(category)}</span><i><b style="width:${width}%"></b></i><strong>${count}</strong>
        </button>`;
      }).join('');
    }

    if (clearSearchButton) clearSearchButton.hidden = !state.query;
    const queryStatus = $('[data-query-status]');
    if (queryStatus) queryStatus.textContent = state.query ? `· ${t('queryFor')} “${state.query}”` : '';
  }

  function applyFilters() {
    const orderedProjects = sortedProjects();
    const queryMatches = orderedProjects.filter((project) => matchesQuery(project, state.query));
    const visibleProjects = queryMatches.filter((project) => state.filter === 'all' || project.category === state.filter);

    // Renderiza somente os projetos que correspondem à pesquisa e ao filtro ativos.
    // Assim, nenhum item fora do resultado permanece visível por interferência do CSS.
    if (archiveContainer) {
      archiveContainer.innerHTML = visibleProjects.map(archiveItem).join('');
    }
    bindDynamicEvents();

    if (visibleCount) visibleCount.textContent = visibleProjects.length;
    if (emptyState) emptyState.hidden = visibleProjects.length !== 0;
    updateDashboard(queryMatches, visibleProjects);
  }

  function bindDynamicEvents() {
    $$('[data-open-project]').forEach((button) => {
      if (button.dataset.bound === 'true') return;
      button.dataset.bound = 'true';
      button.addEventListener('click', () => openProject(button.dataset.openProject));
    });
    $$('[data-tilt]').forEach((card) => {
      if (card.dataset.tiltBound === 'true') return;
      card.dataset.tiltBound = 'true';
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
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((element) => element.classList.add('is-visible'));
      return;
    }
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
    if (!context) return;
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
    searchInput?.addEventListener('input', (event) => { state.query = event.target.value; applyFilters(); });
    clearSearchButton?.addEventListener('click', () => {
      state.query = '';
      searchInput.value = '';
      searchInput.focus();
      applyFilters();
    });
    $$('[data-filter]').forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));
    searchSuggestions?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-search-suggestion]');
      if (!button) return;
      state.query = button.dataset.searchSuggestion;
      searchInput.value = state.query;
      setFilter('all');
      searchInput.focus();
    });
    resultsChart?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-chart-filter]');
      if (button) setFilter(button.dataset.chartFilter);
    });
    $('[data-sort]')?.addEventListener('change', (event) => {
      state.sort = event.target.value;
      renderArchive();
      setupRevealObserver();
    });
    $('[data-language]')?.addEventListener('click', () => setLanguage(state.language === 'pt' ? 'en' : 'pt'));
    $('[data-theme-toggle]')?.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'ink' ? 'paper' : 'ink';
      document.documentElement.dataset.theme = next; storage.set('portfolio-theme', next);
    });
    const savedTheme = storage.get('portfolio-theme'); if (savedTheme) document.documentElement.dataset.theme = savedTheme;

    const menuButton = $('[data-menu-button]');
    const mobileMenu = $('[data-mobile-menu]');
    const isMenuOpen = () => Boolean(mobileMenu && !mobileMenu.hidden);
    const syncBodyLock = () => {
      const dialogOpen = Boolean(dialog?.open);
      document.body.classList.toggle('is-locked', isMenuOpen() || dialogOpen);
    };
    const setMobileMenu = (open) => {
      if (!menuButton || !mobileMenu) return;
      mobileMenu.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      syncBodyLock();
    };

    if (menuButton && mobileMenu) {
      setMobileMenu(false);
      menuButton.addEventListener('click', () => setMobileMenu(!isMenuOpen()));
      $$('a', mobileMenu).forEach((link) => link.addEventListener('click', () => setMobileMenu(false)));
      addEventListener('resize', () => { if (innerWidth > 1100 && isMenuOpen()) setMobileMenu(false); }, { passive: true });
    }

    $('[data-dialog-close]')?.addEventListener('click', closeDialog);
    $('[data-load-preview]')?.addEventListener('click', loadPreview);
    dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
    dialog?.addEventListener('close', () => document.body.classList.remove('is-locked'));

    document.addEventListener('keydown', (event) => {
      const activeTag = document.activeElement?.tagName || '';
      if (event.key === '/' && !/input|textarea|select/i.test(activeTag)) {
        event.preventDefault();
        searchInput?.focus();
      }
      if (event.key !== 'Escape') return;
      if (isMenuOpen()) {
        setMobileMenu(false);
        menuButton?.focus();
      } else if (document.activeElement === searchInput && state.query) {
        state.query = '';
        if (searchInput) searchInput.value = '';
        applyFilters();
      } else {
        closeDialog();
      }
    });

    const progress = $('.scroll-progress span');
    addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      if (progress) progress.style.transform = `scaleX(${total > 0 ? scrollY / total : 0})`;
      const heroOne = $('.hero-line--one');
      const heroTwo = $('.hero-line--two');
      if (scrollY < innerHeight) {
        if (heroOne) heroOne.style.transform = `translateX(${scrollY * .025}px)`;
        if (heroTwo) heroTwo.style.transform = `translateX(${-scrollY * .035}px)`;
      }
    }, { passive: true });

    const cursor = $('.cursor');
    if (cursor) {
      addEventListener('pointermove', (event) => {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add('is-visible');
      }, { passive: true });
      document.addEventListener('pointerover', (event) => {
        if (event.target.closest('a, button, [data-tilt]')) cursor.classList.add('is-active');
      });
      document.addEventListener('pointerout', (event) => {
        if (event.target.closest('a, button, [data-tilt]')) cursor.classList.remove('is-active');
      });
    }

    $$('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
  }

  setupGlobalInteractions();
  setupCanvas();
  setLanguage(state.language);
})();
