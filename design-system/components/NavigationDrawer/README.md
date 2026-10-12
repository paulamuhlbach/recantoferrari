# NavigationDrawer

Gaveta de navegação do celular: abre pela esquerda quando se toca no botão de menu do `TopAppBar`, com os mesmos destinos do cabeçalho.

**Props:** `open`, `onClose` (botão fechar, clique no véu ou Esc), `items` (`[{ value, label, href, icon, supporting, external, divider }]`), `value` (item ativo), `onChange`, `user` (`{ name, detail }`, ex.: "Ana Ribeiro" / "Casa 14 · Moradora"), `footer` (ex.: `Button` `outlined` "Sair do portal"), `label`, `inline` (só para documentação e protótipos: fica dentro do contêiner em vez de cobrir a tela).

- Use os mesmos itens e a mesma ordem do `TopAppBar`, cada um com ícone. Links para apps externos (ex.: Condfy) vão no fim, com `external`.
- O item ativo recebe `aria-current="page"` e fundo `primary-container`.
- Itens que dependem do perfil (ex.: "Configurações" do síndico) entram aqui também, porque no celular não há o menu da conta aberto.
- Largura de até 320px (85% da tela em celulares estreitos); alvos de 56px.
- Não use no desktop: a partir de 840px o cabeçalho mostra os links.
