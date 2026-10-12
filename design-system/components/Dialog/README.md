# Dialog

Janela modal para confirmar decisões importantes.

**Props:** `open`, `title` (pergunta clara), `icon`, `children` (consequência), `actions` (botões), `onClose` (clique no véu), `inline` (só para documentação).

- Use para ações destrutivas ou sem volta: cancelar reserva, excluir morador.
- Título em forma de pergunta; texto diz o que acontece. Botões nomeiam as duas saídas ("Manter reserva" / "Cancelar reserva"), a destrutiva à direita como `danger`.
- Não use para avisos informativos: prefira `Alert`.
