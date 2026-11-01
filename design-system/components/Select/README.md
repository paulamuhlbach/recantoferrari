# Select

Lista de escolha com a aparência dos campos (borda de 1px, cantos de 3px, rótulo em maiúsculas acima). Usa o `<select>` nativo: funciona bem com teclado, leitor de tela e no celular, que abre a lista do próprio sistema. Criado em 01/11/2026 (pedido da Paula) para as categorias da Ouvidoria.

**Props:** `label` (obrigatório), `options` (`[{ value, label, disabled }]`), `value`, `onChange`, `required`, `helper`, `status` = `"default"` | `"success"` | `"error"` | `"highlight"`, `disabled`, `placeholder` (primeira opção vazia).

- Use quando as opções são muitas ou crescem com o tempo (cadastradas pela gestão), como as categorias da Ouvidoria. Para 2 a 5 opções fixas, prefira `Chip` (filtro) ou `RadioGroup`.
- Mesma regra dos campos: **opcional com fundo branco, obrigatório (`required`) com fundo colorido**. Filtros são opcionais (branco).
- Em filtros, a primeira opção é "todas" (ex.: "Todas as categorias"); em formulários opcionais, uma opção como "Não sei" ou "Sem categoria".
- `helper` explica a escolha; com `status="error"`, diz como corrigir.
- Largura: em filtros, limite a largura (ex.: `max-width: 360px`); em formulários, ocupe a coluna.
