# Button

Botão em pílula do Material 3 para ações.

**Props:** `variant` = `"filled"` (padrão) | `"tonal"` | `"outlined"` | `"text"` | `"secondary"` | `"danger"`; `size` = `"sm"` | `"md"` | `"lg"`; `icon`, `trailingIcon` (nome de ícone); `fullWidth`; `href` (vira link); `disabled`; `children` (o rótulo).

- `filled` (terracota) só para a ação principal da área: "Reservar horário", "Entrar".
- `tonal` para ações importantes que não são a principal; `outlined` para alternativas ("Cancelar", "Pauta"); `text` para links de ação ("Todos os avisos →").
- `secondary` (azul) para ações utilitárias como "Baixar boleto". `danger` só para ações destrutivas, e sempre com confirmação em `Dialog`.
- Rótulo com verbo, em frase comum, até 3 palavras.
- Altura mínima de 44px; `sm` (36px) só dentro de cards e alertas.
