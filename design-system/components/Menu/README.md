# Menu

Menu suspenso que abre a partir de um botão, como o menu da conta ao clicar no nome da pessoa no cabeçalho.

**Props:** `open`, `onClose` (clique fora, Esc ou escolha de um item), `items` (`[{ value, label, supporting, icon, href, onClick, external, danger, divider }]`), `title` e `subtitle` (cabeçalho, ex.: nome e casa), `align` = `"end"` (padrão, alinha à direita do botão) | `"start"`, `label`, `children`.

- O consumidor fornece o botão que abre o menu (um `Chip` com o nome, ou um `IconButton` `person` no celular), com `aria-expanded` e `aria-haspopup`.
- Coloque o botão e o `Menu` no mesmo contêiner com `position: relative`. O `actions` do `TopAppBar` já é.
- Menu da conta: `title` = nome, `subtitle` = "Casa 07 · Síndico"; "Minha casa" (ícone `group`) para todos; itens que dependem do perfil (ex.: "Unidades" e "Configurações", só para gestão e administrador) e, por último, "Sair do portal".
- Até 6 itens, rótulos curtos com verbo ou nome da página. Use `divider` para separar grupos e `danger` só para ações destrutivas.
- Item com `external` abre outro site ou app em nova aba e mostra o ícone `open_in_new`.
- Para escolher um valor num formulário, não use `Menu`: use `RadioGroup` (escolha única) ou um campo.
- Menu "Apps" do cabeçalho: botão `text` "Apps" com `trailingIcon="expand_more"`, itens `external` (Condfy, Auxiliadora Predial). Cada botão com seu `Menu` fica num contêiner próprio com `position: relative`.
