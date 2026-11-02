# Banner

Faixa na largura toda da página, acima do cabeçalho, para um aviso do próprio portal que vale em todas as telas. Criado em 01/11/2026 (pedido da Paula) para o **ambiente de testes** (homologação).

**Props:** `tone` = `"warning"` (padrão) | `"info"`; `icon` (nome de ícone, ou `false` para tirar); `label` (nome para o leitor de tela, padrão "Aviso do portal"); `children` (o texto).

- Uma frase curta. O texto quebra linha; no celular, a faixa fica mais alta, sem rolagem horizontal.
- Não fecha: o aviso vale enquanto a situação durar (ex.: enquanto for o ambiente de testes).
- Use só para avisos do portal inteiro. Avisos de uma tela ou de uma ação são `Alert`.
- No site, a faixa do ambiente de testes aparece quando a API (`GET /ambiente`) diz que é a homologação; o texto fica nas configurações (`ambiente.faixa_texto`).
