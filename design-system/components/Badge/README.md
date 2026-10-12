# Badge

Etiqueta curta de status ou categoria, com ícone automático nos tons de estado.

**Props:** `tone` = `"neutral"` | `"primary"` | `"info"` | `"success"` | `"warning"` | `"error"` | `"tertiary"`; `icon` (nome, ou `false` para tirar); `children`.

- Uma ou duas palavras: "Pago", "Pendente", "Atrasado", "Novo", "Evento".
- `success`, `warning`, `error` e `info` já trazem ícone, para não depender só da cor.
- Badge de condição: avisa algo que pode mudar, sem ser um problema. Ex.: serviço ao ar livre com `tone="warning"` (amarelo, lembra um alerta) e `icon="cloud"`: "Se chover, remarcamos". Frase curta, amigável, sem ponto final.
- Situação "Adiado" (serviço com data remarcada): `tone="tertiary"` (roxo) com `icon="event"`, para não se confundir com o amarelo da condição do tempo.
- No máximo dois badges juntos: a situação (ex.: "Adesão aberta") primeiro, a condição depois.
