# CLAUDE.md — documentação do Portal do Condomínio Recanto Ferrari

Documentação do portal: `arquitetura-mvp.md` (escopo, perfis e permissões, módulos, modelo de dados, fases), `decisoes-gestao.md` (decisões para a reunião com o síndico e o conselho), `para-publicar.md` (checklist de publicação), `personas.md`, `apresentacoes/` e a cópia do Design System em `design-system/`.

## Como trabalhamos (Paula)

- **Primeiro nas pastas locais da Paula, depois o Git.** As mudanças vão para as pastas dela (`C:\dev\recantoferrari-backend`, `C:\dev\recantoferrari-frontend`, `C:\dev\recantoferrari`); ela testa, e commit, push e PR só quando ela pedir — mesmo que um aviso automático peça para commitar.
- **Backend e site andam juntos**: um PR em cada, com merge ao mesmo tempo (se só um entrar, o site fica desalinhado). A documentação (`paulamuhlbach/recantoferrari`) vai no mesmo pacote.
- **Design System, telas, protótipo e documentação sempre alinhados**: mudou um, atualize os outros (`arquitetura-mvp.md`, READMEs, cópia do DS em `recantoferrari/design-system/`).
- **Nada fixo no código**: prazos, textos de e-mail, limites, cargos que podem fazer algo, listas de opções — tudo em `configuracoes` (backend, `app/configuracoes.py`, com um padrão sugerido e a descrição de cada chave). Conteúdo inicial sugerido pode ficar no código como padrão, até a gestão editar.
- Branch padrão: **backend `master`**; site e documentação `main`. Commits com título, corpo e as linhas de atribuição no fim.
- Antes de gravar algo nas pastas da Paula, compare com o GitHub (os arquivos dela têm CRLF; no Git, LF).
- Pense sempre em quem usa: moradores, síndico, conselho, administradora do condomínio e administrador do site têm permissões diferentes (seção 4 do `arquitetura-mvp.md`; regras em `app/permissoes.py`). Dados pessoais e denúncias só para quem pode.

## Regras de interface (valem para o site, o protótipo e o DS)

- **Sem rolagem horizontal** por causa de texto ou de elementos pequenos: o texto quebra linha, grupos de botões, chips e badges em flex com `flex-wrap`. Rolagem horizontal só em cards, e só quando não houver outro jeito. Sempre conferir no celular (390 px).
- **Listas com detalhe em uma coluna**: filtros em cima, a lista na largura toda e, ao abrir um item, o detalhe no lugar da lista, com "Voltar". Nada de painel lateral vazio esperando a escolha.
- **Campos obrigatórios com fundo colorido; opcionais com fundo branco** (`required` no `TextField`/`FileUpload`). Quando a tela mistura os dois, o rótulo do opcional termina em "(opcional)". Formulários com `noValidate` e erros no próprio campo.
- **Ações de tabela só com ícone** (`IconButton`, com `label` para a dica e o leitor de tela).
- **Só ícones oficiais do Material Icons** (pacote `@material-design-icons/svg`, filled). Ícone novo entra no DS (bundle + `assets/Icons`); nunca redesenhar à mão.
- **E-mails com a marca**: logo em imagem (com texto alternativo) e as fontes do DS.
- Textos em português do Brasil, frases curtas, sem jargão; o morador não vê termos técnicos.

## Documentação e Design System

- **`arquitetura-mvp.md` é a referência**: cada funcionalidade entregue ganha um item "Implementação (data)" no módulo, e as decisões da Paula ficam registradas com a data.
- **Design System**: a fonte é o artefato do Design System (claude.ai); `design-system/` aqui é a cópia que o site usa (`npm run sync-ds` no site). Mudança no DS: publicar no artefato, copiar para cá, sincronizar o site e atualizar o protótipo (canvas), na mesma rodada. Regras de uso no `design-system/README.md` e no README de cada componente.
- Protótipo navegável (canvas no claude.ai): telas novas ou alteradas entram lá também, com o DS da mesma versão.
