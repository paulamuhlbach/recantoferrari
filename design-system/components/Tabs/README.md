# Tabs

Abas para alternar entre visões da mesma página.

**Props:** `items` (`[{ value, label, icon, count, tone }]`), `value`, `onChange`, `label` (nome do grupo para leitores de tela), `variant` = `"primary"` (padrão) | `"secondary"`.

- Ex.: Reservas → Próximas · Histórico · Espaços.
- De 2 a 5 abas, rótulos curtos. Em telas estreitas as abas quebram linha (sem rolagem horizontal, 24/10/2026).
- Início de quem tem cargo (01/11/2026): abas "Para você" e "Para gestão"; a aba que abre primeiro vem da configuração `inicio.aba_inicial_gestao`.
- `variant="secondary"` (01/11/2026): abas **dentro** de uma aba principal, menores, sem ícone e com sublinhado fino. Ex.: na Ouvidoria da gestão, as situações (Todas · Novas · Em andamento · Respondidas · Concluídas, com a contagem) dentro de Demandas e de Denúncias. Não use duas fileiras de abas principais na mesma página.
- `count` mostra um número em pílula (itens pendentes).
- `tone` no item (01/11/2026, pedido da Paula): a pílula da contagem usa a cor do `Badge` do mesmo tom. Nas abas de situação da Ouvidoria, cada contagem tem a cor do selo da situação na lista (Novas `info`, Em andamento `warning`, Avaliação jurídica `tertiary`, Respondidas `success`, Concluídas e Todas `neutral`).
