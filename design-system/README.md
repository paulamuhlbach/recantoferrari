# Design System Recanto Ferrari

Cópia, no repositório, do Design System do portal do Condomínio Recanto Ferrari: cores, fontes, logotipo, ícones e componentes React usados em todas as telas.

- **Fonte oficial:** o Design System publicado em https://claude.ai/artifact/XVqFUtTaue7JzAr29zQtnN (cards dos componentes, guia da marca e tokens editáveis). As mudanças são feitas lá e copiadas para esta pasta.
- **Protótipo navegável das telas:** https://claude.ai/artifact/Kk5D5SEBTTDLgKp9c2DhVr
- **Versão copiada:** 11/10/2026 (Logo com `tone="deep"` para fundo azul e SVG `vertical-dark` com CONDOMÍNIO em terracota clara).

## O que tem aqui

| Pasta ou arquivo | Conteúdo |
| --- | --- |
| `tokens.json` | Todos os tokens: cores (tema claro e escuro), tipografia, espaço, cantos, elevação. É a referência para o código do site. |
| `tokens.css` | Variáveis CSS do tema claro geradas do `tokens.json` (`--primary`, `--surface`, `--space-4`…). |
| `components/bundle.js` | Componentes React 18 em `window.RecantoFerrari` (Logo, Button, TextField, Card, DataTable, Dialog, TopAppBar, Footer, FileUpload…). |
| `components/bundle.css` | Estilos dos componentes; só lê as variáveis de `tokens.css`. Classes começam com `rf-`. |
| `components/index.d.ts` | Tipos e props de cada componente (documentação). |
| `components/<Componente>/README.md` | Quando e como usar cada componente. |
| `components/<Componente>/preview.html` | Exemplo de uso de cada componente (roda dentro do Design System publicado). |
| `assets/Logos/` | Logotipo em SVG, com texto em curvas: vertical, horizontal, símbolo e versões para fundo escuro. |
| `assets/Icons/` | Ícones do Material Icons (Apache 2.0) usados no portal, em SVG na cor `ink`. |
| `assets/Fotos/` | Foto do condomínio usada no `Hero` da página inicial. |
| `fonts/` | Radio Canada Big, Outfit e Raleway em woff2 (licença SIL Open Font License). |

## Como usar no site

1. Carregue as fontes (`fonts/`) com `@font-face`, depois `tokens.css` e `components/bundle.css`.
2. Carregue React 18 e `components/bundle.js`; os componentes ficam em `window.RecantoFerrari`.
3. Nas telas, use os papéis de cor (`--primary`, `--surface`, `--on-surface-deep`…), não as primitivas (`--terracotta-1`, `--blue-2`…).
4. Para o tema escuro, gere as variáveis a partir dos valores `dark` do `tokens.json`.

## Como atualizar

Toda mudança no Design System (componente novo, cor, ícone, logo) é feita no Design System publicado e reinstalada no protótipo. Depois, esta pasta é atualizada com a versão nova e entra num commit junto com a documentação (`arquitetura-mvp.md`). Design System, telas e documentação ficam sempre alinhados.

---

# Guia da marca

Sistema visual do site do **Condomínio Recanto Ferrari**. As cores, as fontes e o logotipo vêm do arquivo de identidade (Figma). A estrutura de papéis de cor, a escala tipográfica, os estados e os componentes seguem o **Material Design 3**, adaptados à marca: cantos quase retos (como as casas do logo), tons terrosos e texto maior para leitura confortável de moradores de todas as idades.

## Voz e conteúdo

O site fala com vizinhos. O tom é cordial, direto e prático.

- Escreva em português do Brasil, na segunda pessoa informal ("você"), sem gírias.
- Use frase comum (sentence case) em títulos e botões: "Reservar horário", nunca "Reservar Horário".
- Botões começam com verbo e dizem o que acontece: "Baixar boleto", "Confirmar presença", "Cancelar reserva".
- Avisos trazem o essencial primeiro: o que, quando, onde. Exemplo: "Limpeza da caixa d'água · Sábado, 3 de outubro · 8h às 12h".
- Datas no formato brasileiro: `14/11/2026`, ou por extenso em títulos ("14 de novembro"). Horas como `19h30`. Valores como `R$ 1.284,50`.
- Mensagens de erro dizem o que houve e como resolver: "Falta o domínio. Exemplo: maria@email.com". Sem "Ops!" e sem pedidos de desculpa.
- Sem emoji e sem pontos de exclamação em comunicados oficiais.
- Maiúsculas espaçadas só em sobretítulos (`eyebrow`, `overline`) e rótulos de campo. Nunca em frases inteiras.

## Cor

A paleta Terracota é a identidade. Azul, verde, amarelo, vermelho e roxo têm funções.

- Fundo da página: `surface` (papel `#FAF7F2`). Texto: `on-surface`; texto secundário: `on-surface-variant`.
- Ação principal: `primary` (terracota escura) com `on-primary`. Use um único botão `filled` por área da tela.
- `accent` (terracota média) é a cor da palavra CONDOMÍNIO e dos telhados laterais. Use em sobretítulos, ícones e detalhes. Não use em texto corrido (contraste 3.3:1).
- Areia (`surface-container`, `#EBE7E3`) é o fundo dos cards; `surface-container-high` para faixas de seção e menus.
- `secondary` (azul) para links, informação e ações secundárias. Links em texto corrido usam `link` com sublinhado.
- `tertiary` (roxo) para eventos, assembleias, campos destacados pela administração e a situação "Adiado" de serviços.
- **Azul profundo como acento de apoio.** A Terracota continua sendo a identidade (ação principal, item ativo, logo); os azuis escuros equilibram os tons quentes em poucas áreas por tela: o `Hero` (foto com véu `hero-overlay`, azul `blue-1`), o rodapé (`surface-deep`, `blue-2`), os ícones de listas informativas (`ListItem` com `tone="secondary"`), o círculo do ícone de serviço (`Card` com `icon`), o item aberto em listas (`ListItem` com `selected`), a resposta do síndico e links. Sobre `surface-deep` use `on-surface-deep` e `on-surface-deep-variant`. Um fio `accent` de 4px separa o azul do resto da página.
- Não pinte cards, botões principais ou o cabeçalho de azul: o azul é fundo de faixa ou detalhe, nunca a cor dominante.
- Estados: `success` (verde), `warning` (amarelo, também para condições que podem mudar, como "Se chover, remarcamos"), `error` (vermelho). Cada um tem `-container` e `on-…-container`. Sempre acompanhe a cor com ícone ou palavra ("Pago", "Pendente", "Atrasado"): nunca comunique só pela cor.
- As primitivas `terracotta-1…5`, `blue-1…5` etc. repetem os swatches do arquivo (1 = mais escuro). Componentes usam os papéis, não as primitivas.
- Tema escuro: todos os papéis têm valor escuro. Os valores escuros de `surface`, `warning-container` e dos `field-*` foram derivados (não estão no arquivo) e estão marcados nas notas.

## Tipografia

Três famílias do arquivo, cada uma com um papel:

- **Radio Canada Big** (`display`): o nome da marca, títulos de página, seção e card. SemiBold (600) em títulos.
- **Outfit** (`body`): todo o texto de interface e leitura: parágrafos, botões, campos, listas, rótulos.
- **Raleway** (`accent`): só a tagline CONDOMÍNIO e sobretítulos (`eyebrow`), em maiúsculas SemiBold espaçadas.

Escala (Material 3): `display-*` para hero; `headline-large` para o título da página (h1), `headline-medium` para seções (h2), `headline-small` para blocos e diálogos (h3); `title-*` para cards e listas; `body-large` (18px) para avisos e páginas de leitura; `body-medium` (16px) para interface; `label-*` para botões e badges. Limite texto corrido a `reading-max` (720px). Use `text-wrap: balance` em títulos.

## Espaço, forma e elevação

- Grade de 4px: `space-1` (4) até `space-9` (96). Padding de card `space-5`; gap entre cards `space-5`; entre seções `space-7` no celular e `space-8` no desktop. Margem lateral mínima `space-4`.
- Cantos: `radius-xs` (3px, do arquivo) em campos e cards; `radius-md` em diálogos; `radius-full` em botões, chips, badges e switches (pílula do Material).
- Elevação: `elevation-1` é a sombra do card do arquivo. Use `elevation-2` para hover e menus e `elevation-3` para diálogos. Cards `filled` e `outlined` não têm sombra.
- Estados de interação: uma camada na cor do conteúdo com `state-hover` (8%), `state-focus` (10%) e `state-pressed` (12%). Desabilitado: conteúdo a `opacity-disabled` (38%).
- Foco do teclado: contorno sólido de 2px em `focus-ring`, afastado 2px. Nunca remova.
- Alvos de toque têm no mínimo `control-height` (44px).
- Layout: conteúdo até `content-max` (1200px). Uma coluna abaixo de `bp-medium` (600px), duas até `bp-expanded` (840px), três acima. O cabeçalho mostra os links a partir de `bp-expanded`; abaixo disso, botão de menu.

## Logotipo

- Três casas (telhado terracota, base clara) mais o nome em Radio Canada Big e a tagline CONDOMÍNIO em Raleway.
- Versões: `vertical` (padrão, capas e rodapé), `horizontal` (cabeçalho do site) e `simbolo` (favicon, avatar, espaços pequenos).
- Sobre fundo escuro use os arquivos `-dark` ou o componente `Logo`, que troca a cor do nome sozinho no tema escuro.
- Sobre azul profundo (`surface-deep`, `blue-1`: lateral do login, rodapé) use `Logo` com `tone="deep"`: nome em `on-surface-deep` e CONDOMÍNIO em `primary-container`, porque o `accent` não tem contraste no azul. Os telhados e a base não mudam.
- Deixe ao redor do logo um respiro mínimo igual à altura de uma casa. Não recolora os telhados, não gire, não aplique sombra e não coloque sobre fotos sem uma faixa de `surface` por trás.
- A casa central é sempre a mais escura (`terracotta-1`); as laterais usam `terracotta-2`.

## Iconografia

- Ícones do **Material Icons** (preenchidos, grade de 24px), pelo componente `Icon`. Os SVGs em `assets/Icons` são os mesmos desenhos, na cor `ink`.
- Tamanhos: 24px em listas e barras, 20px dentro de botões e campos, 18px em chips, 14px em badges.
- Ícones herdam a cor do texto ao lado. Ícone sozinho precisa de rótulo (`label` no `IconButton`).
- Sempre os desenhos oficiais (pacote `@material-design-icons/svg`, estilo filled). Nunca redesenhe um ícone à mão.
- Água: `water_drop` (leitura do hidrômetro, conta de água), `photo_camera` (foto), `calculate` (cálculo da gestão).
- Ícones de serviço (`Icon.servicos`): `grass`, `pest_control`, `plumbing`, `cleaning_services` e `event` (genérico). Quem cadastra o serviço escolhe o ícone numa lista; nada fica fixo no código.

## Dados pessoais nas telas

- Nome, casa, contato, moradores, valores e serviços contratados só aparecem para quem tem permissão (a gestão, e o próprio morador para a sua casa). O administrador do site sem cargo vê só a situação de cada item.
- Quando a tela precisa mostrar um contato para quem não tem essa permissão, o e-mail aparece mascarado: `pa•••@gmail.com`.
- Explique a restrição com um `Alert` `info` no topo da tela ("Você vê só a situação de cada casa"), em vez de esconder colunas sem aviso.
- Status de cadastro: `Badge` `success` "Cadastrada", `info` "Convite enviado", `error` "Convite vencido", `neutral` "Sem convite", `warning` "Aguardando aprovação". O perfil principal da casa leva o `Badge` `primary` "Principal".

## Navegação e links externos

- Cabeçalho (`TopAppBar`) com até 6 destinos. No portal do morador: Início, Ouvidoria, Avisos, Serviços, Documentos. No celular, o botão de menu abre a gaveta (`NavigationDrawer`) com os mesmos destinos.
- A conta da pessoa logada fica à direita do cabeçalho: o nome abre um `Menu` com os itens do perfil (ex.: "Configurações", só para o síndico) e "Sair do portal".
- Apps contratados pelo condomínio, como o **Condfy** (`https://web.condfy.com.br/login`) e a **Auxiliadora Predial** (`https://portal.auxiliadorapredial.com.br/Login.aspx`), ficam num botão "Apps" à direita do cabeçalho, que abre um `Menu`. Os itens usam `external`: abrem em nova aba, mostram o ícone `open_in_new` e avisam leitores de tela "(abre em outra aba)".
- Rodapé (`Footer`) em todas as páginas, com termos de uso e política de privacidade. Por padrão em azul profundo.
- Página inicial pós-login: `Hero` com a foto do condomínio (`assets/Fotos`) e a saudação ("Olá, Ana"), logo abaixo do cabeçalho.

## Serviços com adesão

- Cada serviço aparece num card com o ícone do tipo em círculo azul, a situação da casa (`Badge`: "Adesão aberta", "Casa inscrita", "Encerrado") e, quando for o caso, as condições:
  - depende do tempo: `Badge` `warning` com `icon="cloud"`, "Se chover, remarcamos";
  - adiado: `Badge` `tertiary` com `icon="event"`, "Adiado", mais um `Alert` `warning` com a nova data.
- Dados do serviço em quadros curtos: data, prazo para responder, valor por casa e mês do boleto.
- Uma ação por card: "Quero … na Casa 14" (`filled`, depois de marcar a autorização) ou "Cancelar adesão" (`outlined`, com `Dialog`).
- Quem não quer o serviço não precisa responder; diga isso no card.

## Leitura do hidrômetro

- Todo mês, cada casa envia uma foto do hidrômetro e o número da leitura até o dia definido pela gestão (padrão sugerido: dia 10, nas configurações). O valor da água entra no boleto do mês seguinte.
- Foto com `FileUpload` (`capture="environment"`, abre a câmera no celular). Leitura com `TextField` `suffix="m³"` e `inputMode="decimal"`.
- Mostre ao lado a leitura do mês anterior e o consumo calculado em quadros curtos (como os dados de serviço). Leitura menor que a anterior: `TextField` `error` com o motivo e como corrigir.
- Situação do mês em `Badge`: `info` "Envie até 10/10", `success` "Leitura enviada", `warning` "Prazo encerrado" (ou "Enviada com atraso"), `neutral` "Conferida" (na visão da gestão), `error` "Consumo fora do padrão".
- Depois de enviar: `Alert` `success` dizendo que o síndico foi avisado e que um e-mail de confirmação foi para a pessoa.
- Leituras, fotos e valores são dados da casa: o administrador do site sem cargo vê só quantas casas enviaram.

## Componentes

Os componentes estão em `components/bundle.js` como `window.RecantoFerrari` (React 18) e usam `components/bundle.css`, que só lê tokens. Classes começam com `rf-`.
