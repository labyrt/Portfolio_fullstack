window.PORTFOLIO_PROJECTS = [
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
    id: 'birthday', title: 'Aniversário Virtual', year: '2026', category: 'product', featured: true, visual: 'birthday', status: 'published',
    description: {
      pt: 'Landing page de evento para 13 de abril com contagem regressiva, humor brasileiro e uma direção visual inspirada em MSN, dreamcore e cultura digital dos anos 2000.',
      en: 'Event landing page for April 13 featuring a live countdown, Brazilian internet humor and a visual direction inspired by MSN, dreamcore and 2000s digital culture.'
    },
    stack: ['Next.js', 'JavaScript', 'CSS', 'Responsive Design'],
    repo: 'https://github.com/labyrt/curso_ebac_frontend/tree/agenda_anicersario', branch: 'agenda_anicersario', demo: 'https://aniversario-virtual-lucy.vercel.app', source: 'branch', deployment: 'aniversario-virtual-lucy'
  },
  {
    id: 'avatar', title: 'Avatar: A Lenda de Aang', year: '2026', category: 'frontend', featured: true, visual: 'avatar', status: 'published',
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
    id: 'ebac-sports', title: 'EBAC Sports', year: '2026', category: 'product', featured: true, visual: 'sports', status: 'code',
    description: {
      pt: 'Loja de artigos esportivos em React e TypeScript, consumindo uma API externa e implementando catálogo, favoritos e carrinho com estado local.',
      en: 'Sports store built with React and TypeScript, consuming an external API and implementing a catalog, favorites and local-state shopping cart.'
    },
    stack: ['React', 'TypeScript', 'Styled Components', 'REST API'],
    repo: 'https://github.com/labyrt/ebac_sports', source: 'repository'
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
    description: { pt: 'Sistema de portfólio brutalista e responsivo que organiza repositórios, branches e deploys sem duplicação, com filtros, busca, preview ao vivo e interface bilíngue.', en: 'Brutalist responsive portfolio system organizing repositories, branches and deployments without duplication, with filters, search, live previews and bilingual UI.' },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Vercel'],
    repo: 'https://github.com/labyrt/labyrt-portfolio', demo: 'https://labyrt-portfolio.vercel.app', source: 'repository', deployment: 'labyrt-portfolio'
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
