# Dialog

Janela modal para confirmar decisões importantes.

**Props:** `open`, `title` (pergunta clara), `icon`, `children` (consequência), `actions` (botões), `onClose` (clique no véu), `inline` (só para documentação).

- Use para ações destrutivas ou sem volta: cancelar reserva, excluir morador.
- Título em forma de pergunta; texto diz o que acontece. Botões nomeiam as duas saídas ("Manter reserva" / "Cancelar reserva"), a destrutiva à direita como `danger`.
- Não use para avisos informativos: prefira `Alert`.
- Também serve para formulários curtos (indicar morador, cadastrar pet). Quando o conteúdo é mais alto que a tela, só o meio do diálogo rola: o título e os botões ficam sempre visíveis (12/10/2026).
