# Lucy Mazzini — Portfolio

Portfólio profissional de tecnologia de **Lucy Mazzini**, criado para reunir repositórios, branches e deploys da Vercel em uma única experiência, sem duplicar o mesmo projeto em cartões diferentes.

## O que este projeto entrega

- curadoria de projetos autorais, exercícios e experimentos;
- busca por título, tema, branch e tecnologia;
- filtros por produto, front-end, fundamentos e experimentos;
- visualização detalhada em modal;
- preview sob demanda de demos publicadas;
- interface bilíngue em português e inglês;
- tema claro/escuro;
- animações de scroll, tipografia cinética, cursor e canvas;
- suporte a `prefers-reduced-motion`;
- layout responsivo e navegação por teclado;
- deploy estático compatível com GitHub Pages e Vercel.

## Design

A direção visual combina brutalismo digital, tipografia editorial, grid assimétrico e microinterações. Foram estudadas referências contemporâneas de portfólios e galerias como Awwwards, SiteInspire e Godly, além do trabalho interativo de Bruno Simon e de portfólios reconhecidos por uso de motion, tipografia e navegação experimental. As referências foram usadas para definir princípios — não para copiar layouts.

Princípios adotados:

1. **O trabalho vem antes do efeito.** Animações reforçam hierarquia e navegação.
2. **Clareza para recrutadores.** Cada projeto mostra função, tecnologias, código e demo.
3. **Arquivo completo sem repetição.** Um mesmo projeto pode apontar para GitHub, branch e Vercel em um único registro.
4. **Performance progressiva.** Previews externos só carregam após interação.
5. **Acessibilidade.** Semântica, foco visível, teclado e redução de movimento.

## Estrutura

```text
.
├── .github/workflows/pages.yml
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

Os projetos estão centralizados em `projects.js`. Cada item possui:

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

O workflow em `.github/workflows/pages.yml` publica o conteúdo da branch `main`. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como fonte.

### Vercel

O projeto também funciona sem configuração de build: importe o repositório e mantenha o diretório raiz como saída estática.

## Contato

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
