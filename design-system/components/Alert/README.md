# Alert

Faixa de mensagem para avisos na página e retorno de ações.

**Props:** `tone` = `"info"` (padrão) | `"success"` | `"warning"` | `"error"`; `title`; `children`; `action` (um `Button` `sm`); `onClose`; `dismissible` (padrão verdadeiro).

- `info` para comunicados gerais; `success` para confirmar uma ação ("Reserva confirmada"); `warning` para prazos ("Boleto vence em 3 dias"); `error` quando algo falhou, sempre dizendo como resolver.
- Título curto com o fato; texto com o detalhe.
- `warning` e `error` são anunciados a leitores de tela (`role="alert"`).
- `onClose` mostra o botão de fechar (X). Use quando a pessoa pode dispensar o aviso, ex.: "Sua demanda foi respondida" no topo de Para você (01/11/2026), que só volta quando chega uma resposta nova.
- **Todo alerta tem o X** (pedido da Paula, 01/11/2026). Fechado, ele some até a pessoa abrir a tela de novo (o próprio componente guarda; `onClose` avisa a tela, se ela precisar lembrar, como o alerta de resposta da Ouvidoria). Exceções, com `dismissible={false}`: **erros de formulário** (somem quando a pessoa corrige) e **listas vazias** ("Nenhum aviso no mural"), que são o conteúdo da tela.
