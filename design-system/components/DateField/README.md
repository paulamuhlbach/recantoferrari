# DateField

Campo de data no padrão do DS (01/11/2026, pedido da Paula): a aparência dos campos e o `Calendar` do DS num painel, no lugar do seletor do navegador, que não dá para estilizar e muda de um navegador para outro.

**Props:** `label` (obrigatório), `value` (`"aaaa-mm-dd"` ou vazio), `onChange` (recebe um evento com `target.value`, como o campo nativo), `required`, `min`, `max`, `helper`, `status`, `disabled`, `name`, `placeholder` (padrão "dd/mm/aaaa").

- A pessoa digita dd/mm/aaaa (as barras entram sozinhas) ou abre o calendário pelo ícone `calendar_month`. Data fora de `min`/`max` não é aceita.
- No painel: o `Calendar`, "Hoje" e, quando o campo é opcional, "Limpar". No celular (até 599 px), o painel abre embaixo, como diálogo.
- Mesma regra dos campos: obrigatório com fundo colorido, opcional com fundo branco; erro com `status="error"` e o `helper` dizendo como corrigir.
- Use em todo campo de data do portal (avisos, serviços, troca de hidrômetro, contrato). Não use `TextField type="date"`.
