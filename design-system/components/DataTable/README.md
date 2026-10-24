# DataTable

Tabela de dados do Material 3 para listas com várias colunas: boletos por unidade, reservas, moradores, prestação de contas.

**Props:** `columns` (`[{ key, label, sortable, numeric, align, primary, width, render(row), sortValue(row) }]`), `rows` (lista de objetos), `rowKey` (padrão `"id"`); `title`, `subtitle`, `actions` (barra superior); `selectable`, `selected`/`defaultSelected`, `onSelectionChange`, `bulkActions` (aparecem no lugar de `actions` quando há linhas marcadas), `rowLabel(row)` (nome da linha para leitores de tela); `defaultSort` (`{ key, dir: "asc" | "desc" }`); `pageSize` (liga a paginação); `dense`; `onRowClick(row)`; `caption` (descrição da tabela para leitores de tela); `empty` (texto quando não há linhas).

- Use quando o morador ou a administração precisa comparar itens por mais de dois atributos. Para listas simples (documentos, avisos), prefira `ListItem`.
- Números e valores em `numeric`: alinhados à direita, com algarismos de mesma largura. Formate dinheiro como `R$ 685,40` e datas como `10/10/2026`.
- A primeira coluna identifica a linha (`primary`, em negrito): unidade, nome do espaço ou mês.
- Situação sempre como `Badge` com palavra (Pago, Pendente, Atrasado, Acordo), nunca só a cor.
- Clique no cabeçalho ordena: crescente, decrescente e volta à ordem original.
- Com `selectable`, a barra superior vira contador ("2 selecionados") com as ações em lote.
- **Sem rolagem horizontal por causa de texto (24/10/2026, pedido da Paula):** cabeçalhos e células quebram linha (inclusive e-mails longos). Coloque os botões de uma célula de ações dentro de `<div className="rf-dt-cell-actions">` (flex com quebra), nunca lado a lado sem quebra. Não use `white-space: nowrap` em textos das células, só em números curtos (`numeric`).
- **No celular** (abaixo de 600px) cada linha vira um bloco empilhado: o rótulo da coluna (`label` em texto) à esquerda e o valor à direita; a coluna `primary` aparece como título do bloco. A rolagem horizontal do contêiner fica só como último recurso.
- Use `dense` em telas administrativas com muitas linhas (44px, espaço vertical `space-2`); mantenha o padrão (56px, espaço vertical `space-3`) nas telas dos moradores. As células têm espaço em cima e embaixo, então conteúdo em duas linhas (nome e e-mail, badge e data) não encosta nas bordas (12/10/2026).
