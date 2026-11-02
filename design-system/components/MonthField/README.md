# MonthField

Campo de mês no padrão do DS (01/11/2026): mostra "novembro de 2026" e abre uma grade com os 12 meses e o ano, no estilo do `Calendar`.

**Props:** `label` (obrigatório), `value` (`"aaaa-mm"` ou vazio), `onChange` (evento com `target.value`), `required`, `min`, `max` (`"aaaa-mm"`), `helper`, `status`, `disabled`, `name`, `placeholder` (padrão "Escolha o mês").

- O mês atual aparece com o contorno terracota; o escolhido, preenchido. Setas trocam o ano. "Este mês" e, se opcional, "Limpar".
- Use para competência e mês do boleto (leituras do hidrômetro, cálculo da água, serviços). Não use `TextField type="month"`.
