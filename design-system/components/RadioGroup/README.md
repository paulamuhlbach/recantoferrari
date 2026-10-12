# RadioGroup

Escolha única entre poucas opções, todas visíveis: tipo de demanda, identificação na ouvidoria, perfil do morador.

**Props:** `label` (legenda do grupo, em maiúsculas), `helper`, `options` (`[{ value, label, supporting, disabled }]`), `value` ou `defaultValue`, `onChange(value)`, `name`, `variant` = `"list"` (padrão) | `"cards"` (opções em caixas, para escolhas importantes), `orientation` = `"vertical"` (padrão) | `"horizontal"`, `disabled`.

- De 2 a 6 opções. Mais que isso, use uma lista com busca.
- Use `cards` quando cada opção precisa de explicação (`supporting`), como "Com meu nome" / "Sem identificação".
- Deixe uma opção marcada por padrão só quando ela for a escolha mais segura para o morador.
- Para ligar e desligar algo, use `Checkbox` ou `Switch`; para filtrar listas, `Chip` de filtro.
- É um `fieldset` com `legend`: leitores de tela anunciam o grupo e a opção.
