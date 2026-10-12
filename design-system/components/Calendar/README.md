# Calendar

Tabela de datas de um mês (date table / date picker do Material 3) para escolher um dia, com dias reservados, eventos e o dia de hoje.

**Props:** `value` (data ISO `"2026-10-17"`) e `onChange(data)`, ou `defaultValue`; `month` (`"2026-10"`, mês inicial); `today` (padrão: a data de hoje); `min`, `max` (ISO); `unavailable` (lista de datas ISO já reservadas); `marked` (`{ "2026-10-14": { tone: "tertiary", label: "assembleia" } }`, tons `primary` | `tertiary` | `warning` | `error` | `info`); `legend` (`[{ kind, label }]`, `kind` = `selected` | `today` | `booked` | um tom).

- Use nas reservas de salão de festas, churrasqueiras e quadra, e para mostrar a agenda do condomínio.
- A semana começa no domingo (padrão brasileiro). Nomes de mês e dia em português.
- Dias em `unavailable` ficam riscados e não podem ser escolhidos; sempre mostre a legenda "Reservado".
- Eventos aparecem como um ponto abaixo do número. Dê um `label` a cada um: ele é lido por leitores de tela.
- Teclado: setas movem um dia ou uma semana, Home e End vão ao início e fim da semana, e o mês muda sozinho nas bordas.
- Mostre a data escolhida por extenso ao lado ou abaixo ("Sábado, 17/10") e confirme com um `Button`.
