# TopAppBar

Cabeçalho do site com logotipo, navegação principal e ações.

**Props:** `items` (`[{ value, label, href, external }]`), `value` (item ativo), `onChange`, `actions` (ex.: botão "Entrar"), `onMenu`, `homeHref`.

- Até 6 itens. No portal do morador: Início, Ouvidoria, Avisos, Serviços, Documentos.
- A partir de 840px mostra os links; abaixo mostra o botão de menu, que abre um `NavigationDrawer` com os mesmos itens.
- Apps externos contratados pelo condomínio (Condfy, Auxiliadora Predial) não ocupam a navegação: ficam num botão "Apps" (`Button` `text` com `trailingIcon="expand_more"`) em `actions`, que abre um `Menu` com itens `external`. No celular, entram no fim do `NavigationDrawer`, depois de um divisor. Um item isolado com `external` continua possível quando só houver um app.
- Em `actions`, a conta da pessoa logada: um `Chip` com o nome (no celular, `IconButton` `person`) que abre um `Menu` com "Sair do portal" e os itens do perfil, como "Configurações". Não coloque "Configurações" nem "Sair" na navegação principal.
- O item ativo recebe `aria-current="page"` e fundo `primary-container`.
