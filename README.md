# Lucy Mazzini — Portfolio

Portfólio profissional de **Lucy Mazzini**, desenvolvedora full stack Python. Reúne produtos em produção, arquitetura backend, APIs, segurança, dados e experiências digitais responsivas em uma apresentação interativa e organizada.

## O que este projeto entrega

- curadoria de projetos autorais, exercícios e experimentos;
- busca tolerante a acentos por título, tema, branch e tecnologia;
- filtros com contadores por produto, front-end, fundamentos e experimentos;
- gráficos interativos e indicadores atualizados conforme a pesquisa;
- pesquisas rápidas por tecnologia e ordenação por curadoria, nome ou data;
- PULSO em primeiro destaque: uma rede social full stack para criadores, publicada no Render;
- sequência curada de produtos e interfaces: PULSO, Zabaan, Casa Verde e Ateliê Aurora;
- visualização detalhada em modal;
- preview sob demanda de demos publicadas;
- interface bilíngue em português e inglês;
- tema claro/escuro;
- animações de scroll, tipografia cinética, cursor e canvas;
- suporte a `prefers-reduced-motion`;
- layout responsivo e navegação por teclado;
- deploy estático compatível com GitHub Pages e Vercel.

## Projeto em destaque — PULSO

A **PULSO — Rede Criativa** é o projeto full stack central deste portfólio. Foi construída com Python, Django, Django REST Framework, PostgreSQL e Redis, com feed social, perfis, conexões, mensagens em tempo real, chamadas WebRTC, uploads no Cloudinary, apoio via Pix direto, OAuth configurável, integração assistiva com IA, rate limit, testes automatizados, CI/CodeQL e deploy no Render.

- Produto: https://pulso-rede-criativa.onrender.com
- Código: https://github.com/labyrt/pulso-rede-criativa

## Competências demonstradas

- modelagem de domínio e arquitetura Django modular;
- APIs REST, autenticação, autorização e proteção de dados;
- PostgreSQL, Redis, WebSocket e comunicação em tempo real;
- uploads assinados, validação de mídia e integração Cloudinary;
- OAuth 2.0, Pix sem custódia e integrações externas por variáveis de ambiente;
- testes automatizados, CI, análise CodeQL, deploy e documentação operacional;
- experiência responsiva, acessibilidade e direção visual orientada a produto.

## Design

A direção visual combina brutalismo digital, tipografia editorial, grid assimétrico e microinterações. Foram estudadas referências contemporâneas de portfólios e galerias como Awwwards, SiteInspire e Godly, além do trabalho interativo de Bruno Simon e de portfólios reconhecidos por uso de motion, tipografia e navegação experimental. As referências foram usadas para definir princípios — não para copiar layouts.

Princípios adotados:

1. **O trabalho vem antes do efeito.** Animações reforçam hierarquia e navegação.
2. **Clareza para recrutadores.** Cada projeto mostra função, tecnologias, código e demo.
3. **Arquivo navegável.** Cada projeto apresenta seus acessos para GitHub, branch e Vercel em um único registro.
4. **Performance progressiva.** Previews externos só carregam após interação.
5. **Acessibilidade.** Semântica, foco visível, teclado e redução de movimento.

## Estrutura

```text
.
├── assets/
│   ├── favicon.svg
│   └── og-cover.svg
├── index.html
├── main.css
├── projects.js
├── script.js
├── 404.html
├── robots.txt
└── site.webmanifest
```

## Atualizando os projetos

Os projetos usados pela interface estão incorporados em `script.js`; `projects.js` mantém apenas um snapshot de compatibilidade. Cada item possui:

- `title`, `year`, `category` e `status`;
- descrições `pt` e `en`;
- tecnologias em `stack`;
- `repo`, `branch`, `demo` e/ou `external`;
- `featured` para controlar os destaques;
- `visual` para o tratamento gráfico do cartão.

## Executar localmente

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicar

### GitHub Pages

Como o `index.html` está na raiz, o site pode ser publicado pelo GitHub Pages escolhendo **Deploy from a branch**, branch `main` e pasta `/root`.

### Vercel

O projeto também funciona sem configuração de build: importe o repositório e mantenha o diretório raiz como saída estática.

## Contato

- Repositório do portfólio: https://github.com/labyrt/Portfolio_fullstack
- Site publicado: https://noky.vercel.app

- GitHub: https://github.com/labyrt
- LinkedIn: https://www.linkedin.com/in/lucy-mazzini-0b1034323
- E-mail: lucymazzini666@gmail.com


## Links externos

O portfólio inclui links diretos e visíveis para:

- LinkedIn: https://www.linkedin.com/in/lucy-mazzini-0b1034323
- GitHub: https://github.com/labyrt
- demonstrações públicas dos projetos na Vercel;
- repositórios e branches correspondentes no GitHub.

Nos projetos em destaque, os botões **Demo ao vivo**, **GitHub** e **Abrir projeto** ficam visíveis no cartão. No arquivo completo, os atalhos **LIVE** e **GH** permitem abrir diretamente a publicação ou o código-fonte.

## Formação e experiência

O portfólio inclui uma seção de estudos com o profissionalizante Full Stack Python da EBAC e o percurso em Engenharia Ambiental na USP, além de um atalho direto para experiências profissionais.
