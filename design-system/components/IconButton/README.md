# IconButton

Botão redondo só com ícone, para ações compactas em barras, cards e na coluna de ações das tabelas.

**Props:** `icon`, `label` (obrigatório: vira `aria-label` e a dica que aparece no mouseover e no foco pelo teclado), `variant` = `"standard"` | `"filled"` | `"tonal"` | `"outlined"` | `"danger"`, `selected`, `disabled`.

- Use quando o ícone é universal: menu, fechar, buscar, notificações.
- Coluna de ações das tabelas: um IconButton por ação, lado a lado. `edit` para editar, `swap_horiz` para passar o perfil principal, `person_remove` (variante `danger`) para remover uma pessoa, `check` (variante `tonal`) para aprovar e `close` para recusar.
- A dica usa `inverse-surface`, aparece acima do botão depois de 300 ms e não substitui o `label`, que é lido pelos leitores de tela.
- Para ações com texto, prefira `Button`.
