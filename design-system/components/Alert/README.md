# Alert

Faixa de mensagem para avisos na página e retorno de ações.

**Props:** `tone` = `"info"` (padrão) | `"success"` | `"warning"` | `"error"`; `title`; `children`; `action` (um `Button` `sm`); `onClose`.

- `info` para comunicados gerais; `success` para confirmar uma ação ("Reserva confirmada"); `warning` para prazos ("Boleto vence em 3 dias"); `error` quando algo falhou, sempre dizendo como resolver.
- Título curto com o fato; texto com o detalhe.
- `warning` e `error` são anunciados a leitores de tela (`role="alert"`).
