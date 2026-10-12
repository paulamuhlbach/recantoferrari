# ListItem

Linha de lista com ícone, texto em até três níveis e um elemento à direita.

**Props:** `icon`, `tone` = `"primary"` (círculo terracota, padrão) | `"secondary"` (círculo azul, para listas informativas: coleta de lixo, documentos, avisos), `overline`, `headline` (obrigatório), `supporting`, `trailing` (texto ou `Badge`), `href` ou `onClick` (vira link/botão, com seta), `external` (com `href`: abre em nova aba e mostra `open_in_new` no lugar da seta).

- Para boletos, documentos, vagas, moradores da unidade.
- Coloque os itens num contêiner `surface-container-lowest` com borda `outline-variant`; as divisórias entre itens são automáticas.
- Status à direita sempre como `Badge` com palavra ("Pago", "Pendente").
- Em listas mestre-detalhe (ex.: Minhas demandas), marque o item aberto com `selected`: fundo `secondary-container` e `aria-current`.
