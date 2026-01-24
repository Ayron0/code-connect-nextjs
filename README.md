# Code Connect

Aplicação em Next.js focada em aprendizado prático de recursos do App Router (Next 13/14), consumo de API com paginação, rotas dinâmicas com `[slug]`, renderização de Markdown e otimização de imagens.

---

## Descrição Geral

Este projeto simula um feed de artigos de uma rede social para desenvolvedores. Os posts são buscados de uma API local, listados com paginação e exibidos em uma página de detalhes com o conteúdo (em Markdown) convertido para HTML.

O repositório foi desenvolvido com objetivos educacionais para exercitar recursos relevantes do Next.js e do ecossistema React, mantendo um código direto e fácil de entender.

---

## Principais Funcionalidades

- Listagem de posts com paginação (prev/next) baseada na resposta da API
- Página de detalhes do post via rota dinâmica `[slug]`
- Conversão de Markdown para HTML no servidor (remark + remark-html)
- Uso do componente `Image` do Next.js com imagens remotas e locais
- Layout base com fonte do Google via `next/font`
- Estilização com CSS Modules
- Log estruturado em arquivo com `winston`

---

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- React 18
- remark e remark-html (Markdown → HTML)
- next/image (otimização de imagens)
- next/font/google (fonts)
- CSS Modules
- Winston (logger)

---

## Estrutura do Projeto

```
src/
  app/
    globals.css
    layout.js
    page.js
    page.module.css
    posts/
      [slug]/
        page.js
        page.module.css
  components/
    Aside/
      aside.module.css
      index.jsx
      logo.svg
    Avatar/
      avatar.module.css
      index.jsx
    CardPost/
      cardpost.module.css
      index.jsx
  logger.js
next.config.mjs
package.json
public/
```

---

## Como Executar o Projeto

Pré-requisitos:
- Node.js 18+
- API local respondendo em `http://localhost:3042` com rota `/posts`
  - A rota deve aceitar query params `_page` e `_per_page`
  - A resposta deve seguir o formato `{ data: Post[], prev?: number, next?: number }`

Passos:
1. Instalar dependências
   - `npm install`
2. Rodar o ambiente de desenvolvimento
   - `npm run dev`
3. Acessar no navegador
   - `http://localhost:3000`

Observações:
- Certifique-se de iniciar a API antes do frontend, pois a aplicação faz `fetch` diretamente para `http://localhost:3042`.

---

## Destaques Técnicos

- App Router (Next 14) com server components async para data fetching direto na página
- Paginação desacoplada da UI: a interface consome `prev/next` definidos pela API, mantendo as regras no backend
- Otimização de imagens com domínio remoto whitelisted e uso de `fill` com container relativo (boa prática de layout)
- Conversão de Markdown no servidor, evitando bibliotecas no cliente e melhorando o TTFB
- Fontes do Google com `next/font`, evitando FOIT/FOUT e sem downloads em runtime
- CSS Modules para isolamento de estilos
- Logging estruturado em arquivo para análise de execução e troubleshooting

---

## Possíveis Melhorias Futuras

- Integração com banco de dados PostgreSQL, permitindo persistência real dos dados de posts e autores
- Utilização do Prisma ORM para modelagem do banco de dados e acesso aos dados de forma tipada e segura
- Possibilidade de evoluir o projeto para suportar operações completas de CRUD
- Melhor preparação da aplicação para cenários de crescimento, performance e escalabilidade.

