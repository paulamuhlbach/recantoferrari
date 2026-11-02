# Select

Lista de escolha com a aparência dos campos (borda de 1px, cantos de 3px, rótulo em maiúsculas acima). Criado em 01/11/2026 (pedido da Paula) para as categorias da Ouvidoria. **A lista é do DS, não do navegador** (revisto em 01/11/2026, pedido da Paula: a lista do `<select>` nativo não aceita estilo e saía com o azul do sistema e os itens colados à esquerda). A lista abre sob o campo, na largura dele (ou acima, se não houver espaço), com a borda, a sombra e a fonte do DS; itens com 16 px de espaço dos lados e 44 px de altura; o escolhido em terracota claro com o ícone `check`; o item em foco com o fundo de hover. Até 8 itens visíveis; o resto rola dentro da lista. No celular (até 599 px), abre embaixo da tela, com o rótulo no alto, como os campos de data.

**Props:** `label` (obrigatório), `options` (`[{ value, label, disabled }]`), `value`, `onChange`, `required`, `helper`, `status` = `"default"` | `"success"` | `"error"` | `"highlight"`, `disabled`, `placeholder` (primeira opção vazia).

- Use quando as opções são muitas ou crescem com o tempo (cadastradas pela gestão), como as categorias da Ouvidoria. Para 2 a 5 opções fixas, prefira `Chip` (filtro) ou `RadioGroup`.
- Mesma regra dos campos: **opcional com fundo branco, obrigatório (`required`) com fundo colorido**. Filtros são opcionais (branco).
- Em filtros, a primeira opção é "todas" (ex.: "Todas as categorias"); em formulários opcionais, uma opção como "Não sei" ou "Sem categoria".
- `helper` explica a escolha; com `status="error"`, diz como corrigir.
- Teclado e leitor de tela: o campo é um `combobox` com uma `listbox`. Enter, Espaço ou as setas abrem; setas, Home e End andam; a primeira letra pula para o item; Enter escolhe; Esc fecha e volta o foco ao campo. Com a lista fechada, a primeira letra já escolhe.
- `onChange` recebe `e.target.value` em texto, como o `<select>` (valores numéricos chegam como texto).
- Largura: em filtros, limite a largura (ex.: `max-width: 360px`); em formulários, ocupe a coluna.
