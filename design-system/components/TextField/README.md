# TextField

Campo de texto no estilo dos inputs do arquivo: borda de 1px e cantos de 3px, com rótulo em maiúsculas acima. **Obrigatório tem fundo colorido; opcional, fundo branco** (pedido da Paula, 24/10/2026).

**Props:** `label` (obrigatório), `required`, `helper`, `status` = `"default"` | `"success"` | `"error"` | `"highlight"`, `disabled`, `leadingIcon`, `multiline`, `rows`, `suffix` (unidade depois do valor, ex.: `m³`), e as props normais de `input`/`textarea` (`value`, `onChange`, `placeholder`, `type`, `name`…).

- `required`: campo obrigatório, fundo azul do arquivo (`field-fill`). Sem `required`, o campo é opcional e o fundo é branco (`field-optional-fill`), com a mesma borda. Use `required` em todo campo que o formulário exige, e escreva "(opcional)" no rótulo dos demais quando a tela tiver os dois tipos.
- `default` para os campos editáveis (fundo conforme `required`).
- `success` (verde) depois de validar um dado ("Unidade encontrada").
- `error` (vermelho) com `helper` explicando como corrigir. O campo recebe `aria-invalid`.
- `highlight` (roxo) para valores definidos pela administração ou pré-preenchidos.
- `disabled` (cinza) para dados que o morador não pode mudar; diga no `helper` com quem falar.
- O rótulo é sempre visível; o placeholder é só exemplo.
- Números com unidade: `suffix="m³"` e `inputMode="decimal"` (abre o teclado numérico no celular). Ex.: leitura do hidrômetro.
