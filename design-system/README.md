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
- **Sem rolagem horizontal por causa de texto ou de elementos pequenos (24/10/2026, pedido da Paula).** As abas (`Tabs`) quebram linha quando não cabem. Textos quebram linha e grupos de botões, chips e badges ficam em flex com `flex-wrap: wrap` e `gap`. Rolagem horizontal só dentro de cards, e só quando não houver outro jeito. Sempre pense primeiro no celular: tabelas viram blocos empilhados abaixo de 600px (`DataTable`).

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
- Pets: `pets` (cadastro de pets da casa, em Minha casa).
- Histórico: `history` (registro de atividades de uma pessoa e a tela Registro de atividades).
- Senha: `key` ("Trocar a senha" no menu da conta). `lock` fica para sigilo (termo de confidencialidade, denúncias).
- Ícones de serviço (`Icon.servicos`): `grass`, `pest_control`, `plumbing`, `cleaning_services` e `event` (genérico). Quem cadastra o serviço escolhe o ícone numa lista; nada fica fixo no código.

## Formulários: obrigatório e opcional

- **Campo obrigatório tem fundo colorido; campo opcional, fundo branco** (pedido da Paula, 24/10/2026). Vale para `TextField` e `FileUpload`: passe `required` nos obrigatórios (fundo `field-fill`); sem `required`, o fundo é `field-optional-fill` (branco), com a mesma borda.
- Quando a tela tem os dois tipos, o rótulo do opcional termina em "(opcional)", para não depender só da cor.
- `status` continua mandando no fundo: `error` (vermelho), `success` (verde), `highlight` (roxo, valor pré-preenchido que pode mudar) e `disabled` (cinza).
- Os formulários usam `noValidate` e mostram os próprios erros no campo; o `required` também avisa o leitor de tela.

## Lista e detalhe (uma coluna)

- Telas de lista com detalhe (ex.: Ouvidoria da gestão, Denúncias, Minhas demandas) ficam **em uma coluna** (pedido da Paula, 24/10/2026): filtros (`Chip` `filter`) em cima, a lista (`ListItem`) na largura toda e, ao abrir um item, o detalhe no lugar da lista, com `Button` `text` `icon="chevron_left"` "Voltar para …" acima. Os filtros escolhidos continuam ao voltar.
- Nada de painel lateral vazio esperando a escolha. O `selected` do `ListItem` fica para listas em diálogos ou menus.

## Coleta de lixo

- Cada tipo de coleta tem ícone e cor próprios, para não confundir: **orgânico** `compost` em círculo verde (`ListItem` `tone="success"`), **reciclável** `recycling` em azul (`secondary`). O dia aparece em destaque (`headline`) e o horário abaixo.
- Ao lado de cada tipo, `IconButton` `help` ("O que é orgânico?") abre um `Dialog` com a lista do que vai naquele tipo.
- Abaixo, o bloco **"Não pode ir para a lixeira"** (`block` em círculo vermelho, `tone="error"`): a lista dos itens (óleo de cozinha, eletrodomésticos, pilhas…) e onde levar, com o endereço do ecoponto (`location_on`) e um link "Ver no mapa" (abre em outra aba). Logo abaixo do endereço, os horários e avisos do próprio ecoponto (ex.: o que ele não recebe), em texto, separados da orientação da lista; depois, o mapa do Google Maps incorporado (`MapEmbed`, 220 px de altura), que quem edita pode tirar ("Mostrar o mapa no Início").
- Em telas largas, a coleta ocupa duas colunas: à esquerda, os tipos de coleta e, logo abaixo, o "Não pode ir para a lixeira" (lista e orientação); à direita, só o ecoponto, num cartão próprio (endereço, horários e avisos, "Ver no mapa" e o mapa). No celular, uma coluna, na mesma ordem.
- Tudo editável por quem edita conteúdo ("Editar dias"). Até a primeira edição, aparece o conteúdo sugerido.

## Dados pessoais nas telas

- Nome, casa, contato, moradores, valores e serviços contratados só aparecem para quem tem permissão (a gestão, e o próprio morador para a sua casa). O administrador do site sem o termo de confidencialidade assinado vê só a situação de cada item; com o termo, vê tudo, como o síndico.
- Quando a tela precisa mostrar um contato para quem não tem essa permissão, o e-mail aparece mascarado: `pa•••@gmail.com`.
- Explique a restrição com um `Alert` `info` no topo da tela ("Você vê só a situação de cada casa"), em vez de esconder colunas sem aviso. Se a restrição sai com o termo de confidencialidade, o `Alert` leva à tela do termo (`Button` `text` com `icon="lock"`).
- **Termo de confidencialidade** (administrador do site e administradora do condomínio; o síndico e, desde 28/10/2026, o presidente do conselho não assinam): página de leitura com o texto num quadro (`reading-max`, `surface-container-lowest`), `Checkbox` "Li o termo e aceito as condições", `TextField` "Assinatura: seu nome completo" e `Button` `filled` "Assinar termo". Enquanto não assina, um `Alert` `warning` no Início pede a assinatura; depois, `Alert` `success` com a data. Item "Termo de confidencialidade" (`lock`) no menu da conta. Na tela do contrato de administração, cada pessoa da administradora mostra "termo assinado" ou "falta assinar o termo" abaixo do `Badge` de acesso. O nome digitado precisa ser igual ao do cadastro (sem diferença de acento ou maiúsculas); se não for, o `TextField` fica em `status="error"` com o nome esperado no `helper`. Se o texto do termo mudar, um `Alert` `warning` "O texto do termo mudou" pede nova assinatura.
- Status de cadastro: `Badge` `success` "Cadastrada", `info` "Convite enviado", `error` "Convite vencido", `neutral` "Sem convite", `warning` "Aguardando aprovação". O perfil principal da casa leva o `Badge` `primary` "Principal".

## Navegação e links externos

- Cabeçalho (`TopAppBar`) com até 6 destinos. No portal do morador: Início, Ouvidoria, Avisos, Serviços, Documentos. No celular, o botão de menu abre a gaveta (`NavigationDrawer`) com os mesmos destinos.
- A conta da pessoa logada fica à direita do cabeçalho: o nome abre um `Menu` com os itens do perfil (ex.: "Configurações", só para o síndico) e "Sair do portal".
- Apps contratados pelo condomínio, como o **Condfy** (`https://web.condfy.com.br/login`) e a **Auxiliadora Predial** (`https://portal.auxiliadorapredial.com.br/Login.aspx`), ficam num botão "Apps" à direita do cabeçalho, que abre um `Menu`. Os itens usam `external`: abrem em nova aba, mostram o ícone `open_in_new` e avisam leitores de tela "(abre em outra aba)".
- Rodapé (`Footer`) em todas as páginas, com termos de uso e política de privacidade. Por padrão em azul profundo.
- Itens de todos no menu da conta, depois dos itens do perfil: "Meu registro" (`history`), "Trocar a senha" (`key`) e "Sair do portal" (`logout`).
- Página inicial pós-login: `Hero` com a foto do condomínio (`assets/Fotos`) e a saudação ("Olá, Ana"), logo abaixo do cabeçalho.

## E-mails automáticos

- Mesmo desenho do portal: fundo `surface-container`, cartão branco com cantos `radius-xs`, cabeçalho com o logo horizontal e fio `accent` de 4px, corpo em `body-medium` (a saudação em `body-large`), botão em pílula `primary` "Abrir no portal" e rodapé em `surface-deep` com `on-surface-deep-variant`. Máximo de 600px de largura; no celular, o texto quebra linha (nunca rolagem horizontal; links longos com `overflow-wrap: anywhere`).
- O logo vai como **imagem PNG dentro do e-mail** (2x, exibida com 280px), gerada do `recanto-ferrari-horizontal.svg`, com `alt="Condomínio Recanto Ferrari"`. Assim aparece em qualquer leitor de e-mail, sem depender da fonte da marca nem do site publicado.
- Fontes: Outfit e Radio Canada Big pelo Google Fonts. Leitores que não carregam fontes externas (Gmail, Outlook no Windows) mostram Arial, a alternativa mais próxima; por isso nada importante depende da fonte (o nome da marca está no logo em imagem).
- Os textos vêm das configurações; a última linha curta (a assinatura) vai para o rodapé.

## Trocar a senha (Minha conta)

- Abre num `Dialog` com o ícone `key`, a partir do item "Trocar a senha" do menu da conta (e da gaveta no celular).
- Campos `TextField` `type="password"`: "Senha atual", "Senha nova" (helper "Pelo menos 8 caracteres.") e "Repita a senha nova". Erros no próprio campo (`status="error"`): senha atual em branco, senha nova curta ou igual à atual, as duas senhas diferentes. Senha atual errada: `Alert` `error` no topo do diálogo.
- Abaixo dos campos, `Button` `text` com `icon="mail"` "Esqueci a senha atual": manda o link de senha nova para o e-mail da pessoa.
- `Alert` `info` "Este aparelho continua conectado" quando a troca encerra as outras sessões (configuração). Ações: `outlined` "Cancelar" e `filled` com `icon="check"` "Trocar a senha".
- Depois: `Alert` `success` "Senha trocada" (com o e-mail de login e o aviso enviado por e-mail) e `filled` "Fechar".
- Quem entra só com a conta Google não tem senha atual: o diálogo explica e oferece `filled` com `icon="mail"` "Mandar o link"; `Alert` `info` com o e-mail e a validade do link.

## Reenviar ou cancelar um convite não aceito

- Enquanto o convite não foi aceito, "Reenviar convite" (Unidades) e o `IconButton` `mail` "Reenviar o link" (Contrato de administração) abrem um `Dialog` com o e-mail do convite num `TextField` editável, para corrigir um e-mail cadastrado errado.
- Texto curto acima do campo: o convite ainda não foi aceito; confira o e-mail. O `helper` diz que o link anterior deixa de valer.
- E-mail alterado: o campo fica em `status="highlight"` (roxo, campo destacado) e o `helper` diz para onde vai o link e que o enviado ao e-mail anterior deixa de valer.
- O administrador do site sem o termo de confidencialidade não vê o e-mail: o campo vem vazio, com o e-mail mascarado no `placeholder` e no `helper` ("Em branco, vai de novo para pa•••@gmail.com").
- **Cancelar convite** (24/10/2026): ao lado de "Reenviar convite", `Button` `text` com `icon="close"` "Cancelar convite" (no Contrato de administração, `IconButton` `close` `danger` "Cancelar o convite de …", no lugar do `block` de encerrar o acesso). Confirma num `Dialog` com ícone `close`: o texto diz para qual e-mail foi o link e que ele deixa de valer; ações `outlined` "Voltar" e `danger` "Cancelar convite". Depois, `Alert` `success` "Convite da Casa 43 cancelado".

## Minha casa

- Moradores da casa num `DataTable` no tamanho padrão: nome e e-mail, vínculo com o `Badge` `primary` "Principal", parentesco com o perfil principal e situação (`Badge` `success` "Ativo", `warning` "Aguardando aprovação", `info` "Aguardando criar o acesso").
- O parentesco tem uma lista de sugestões vinda das configurações e aceita texto livre: use `TextField` com `list` (datalist) até o sistema ter um Select.
- Pets em cartões com foto (miniatura 96px, `radius-xs`; sem foto, o ícone `pets` sobre `surface-container-high`), nome, espécie · raça · porte, cor, sinais e observações. Cadastro e edição num `Dialog` com `FileUpload`.

## Ex-moradores e registro de atividades

- Quem sai da casa fica **inativo**: não entra mais no portal, mas o cadastro e o histórico ficam guardados. Na casa vista pela gestão, abaixo dos moradores, um `DataTable` "Ex-moradores": nome e e-mail, vínculo (com `Badge` `neutral` "Foi principal"), período (entrada a saída), motivo da saída com quem registrou, e a situação hoje (`Badge` `neutral` "Inativo", ou "Ativo" com a casa onde mora hoje, se voltou).
- O registro de atividades de uma pessoa abre num `Dialog` com o ícone `history`: a situação (`Badge`), as moradias (`ListItem` com `home`, período no `overline`) e as atividades (`ListItem` com data e hora no `overline`, a descrição no `headline` e "Feito por …" · IP no `supporting`), com "Carregar mais antigas" (`Button` `text`).
- Quem abre: a pessoa (item "Meu registro" no menu da conta), o perfil principal para os moradores da casa (ação `history` na tabela de Minha casa) e, na tela "Registro de atividades" e nas tabelas da casa, o síndico, o subsíndico, o presidente do conselho, a administradora e o administrador do site com o termo assinado.
- Os demais membros do conselho (e o administrador do site antes de assinar o termo) veem o registro sem identificar as pessoas: no lugar do nome, um código (`Pessoa 3fa2c1d0`), sem casa, e-mail ou IP. Explique com um `Alert` `info` no topo da tela.

## Pessoas

- Tela "Pessoas" (menu da conta da gestão e do administrador do site, ícone `person`): todos que têm ou já tiveram cadastro, inclusive quem saiu. `TextField` "Buscar" com `leadingIcon="search"` (nome, e-mail ou casa), dois grupos de `Chip` `filter` (situação, com a contagem entre parênteses; papel) e um `DataTable` no tamanho padrão.
- Colunas: pessoa (nome e e-mail), casa (`Badge` `primary` "Principal"; vínculo · parentesco abaixo; sem casa, o vínculo, ex.: "Administradora do condomínio"), papel (`Badge` `primary` para o síndico, `info` para os outros cargos e para "Administrador do site", com "Termo assinado em …" ou "Termo de confidencialidade não assinado" abaixo) e situação (`Badge` `success` "Ativo", `warning` "Aguardando aprovação", `info` "Aguardando criar o acesso", `error` "Bloqueado", `neutral` "Inativo", com a data e "Entra com Google" abaixo).
- Ações só com ícone: `history` (ver o registro), `edit` (mudar os papéis: `Dialog` com `RadioGroup` dos cargos e `Checkbox` "Administrador do site"; `Alert` `info` quando a pessoa precisa assinar o termo ou quando o presidente do conselho anterior volta a ser membro), `block` `danger` (bloquear, com `Dialog` de confirmação) e `check_circle` (desbloquear).
- Administrador do site sem o termo: código no lugar do nome (`Pessoa a4e1b9c7`) e e-mail mascarado, com o `Alert` `info` que leva ao termo.

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
- Situação do mês em `Badge`: `info` "Envie até 10/10", `success` "Leitura enviada", `warning` "Prazo encerrado" (ou "Enviada com atraso"), `warning` com `icon="photo_camera"` "Nova foto pedida" (31/10/2026), `neutral` "Conferida" (na visão da gestão), `error` "Consumo fora do padrão". Na gestão, "Falta enviar" em `neutral`.
- Depois de enviar: `Alert` `success` dizendo que o síndico foi avisado e que um e-mail de confirmação foi para a pessoa.
- Leituras, fotos e valores são dados da casa: o administrador do site sem o termo de confidencialidade vê só quantas casas enviaram.

## Início por perfil

- O Início é feito de blocos: **avisos** (o último aviso do mural), **gestão** ("Para a gestão": Ouvidoria da gestão, Denúncias ou Números das denúncias, Publicar aviso), **para você** (Enviar demanda, Minhas demandas, Regras do condomínio) e **coleta de lixo**.
- Os avisos vêm primeiro para todos, menos para o síndico, que vê "Para a gestão" no alto, acima dos avisos (pedido da Paula, 30/10/2026). A gestão e a administradora do condomínio veem "Para a gestão" antes dos atalhos de morador; quem é só morador não vê o bloco da gestão.
- A ordem de cada perfil (morador, gestão, administradora) fica nas configurações; nada fixo no código.
- A faixa com a foto (`Hero`) é compacta (pedido da Paula, 28/10/2026): 184 px no computador e 160 px no celular, para os avisos aparecerem logo.
- Atalhos são `Card` `outlined` com `href`. Na gestão, o card leva ícone (`description`, `lock`, `info`, `notifications`) e, quando há algo esperando, um `Badge` `warning` sem ícone ("3 novas", "1 não lida").

## Componentes

Os componentes estão em `components/bundle.js` como `window.RecantoFerrari` (React 18) e usam `components/bundle.css`, que só lê tokens. Classes começam com `rf-`.
