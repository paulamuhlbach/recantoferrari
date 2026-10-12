# Chip

Pílula compacta para filtrar listas ou sugerir uma ação rápida.

**Props:** `variant` = `"assist"` (padrão) | `"filter"`; `selected` (filtros); `icon`; `onClick`; `children`.

- `filter` em grupos acima de listas de avisos, eventos e documentos. O selecionado ganha `primary-container` e um ✓.
- `assist` para ações de atalho ligadas ao conteúdo ("Adicionar à agenda").
- Rótulos de uma ou duas palavras.
