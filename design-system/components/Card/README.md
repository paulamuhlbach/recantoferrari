# Card

Bloco de conteúdo do site: aviso, evento, documento ou espaço de lazer. A versão `elevated` reproduz o card do arquivo (areia, borda terracota, 3px, sombra).

**Props:** `variant` = `"elevated"` (padrão) | `"filled"` | `"outlined"`; `eyebrow` (categoria), `badge` (um `Badge`), `title`, `meta` (data, local, tamanho), `media` (imagem), `children` (resumo), `actions` (botões), `href` (card inteiro clicável), `icon` (ícone em círculo ao lado do título) e `iconTone` = `"secondary"` (azul, padrão) | `"primary"` (terracota).

- `elevated` para o destaque da página (o aviso mais recente); no máximo um ou dois por tela.
- `filled` para listas de eventos e avisos; `outlined` para documentos e itens de consulta.
- Use `eyebrow` com a categoria ("Aviso", "Evento", "Documento") e `meta` no formato "Sábado, 3 de outubro · 8h às 12h".
- Com `href`, não coloque botões dentro.
- Em grade: 1 coluna no celular, 2 a partir de 600px, 3 a partir de 840px, com gap `space-5`.
- Cards de serviço mostram o ícone escolhido pelo síndico (`icon`, de `Icon.servicos`), em círculo azul.
