# TimeField

Campo de hora no padrão do DS (01/11/2026): digita hh:mm ou escolhe numa lista de horários (ícone `schedule`).

**Props:** `label` (obrigatório), `value` (`"hh:mm"` ou vazio), `onChange` (evento com `target.value`), `step` (minutos entre os horários da lista, padrão 30), `inicio` (horário mostrado ao abrir quando não há valor, padrão "08:00"), `required`, `helper`, `status`, `disabled`, `name`.

- Horário fora da lista pode ser digitado (ex.: 19:45).
- Use nos horários do aviso ("Das", "Até"). Não use `TextField type="time"`.
