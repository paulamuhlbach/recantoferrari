# TextField

Campo de texto no estilo dos inputs do arquivo: fundo tingido, borda de 1px e cantos de 3px, com rótulo em maiúsculas acima.

**Props:** `label` (obrigatório), `helper`, `status` = `"default"` | `"success"` | `"error"` | `"highlight"`, `disabled`, `leadingIcon`, `multiline`, `rows`, `suffix` (unidade depois do valor, ex.: `m³`), e as props normais de `input`/`textarea` (`value`, `onChange`, `placeholder`, `type`, `name`…).

- `default` (azul do arquivo) para todos os campos editáveis.
- `success` (verde) depois de validar um dado ("Unidade encontrada").
- `error` (vermelho) com `helper` explicando como corrigir. O campo recebe `aria-invalid`.
- `highlight` (roxo) para valores definidos pela administração ou pré-preenchidos.
- `disabled` (cinza) para dados que o morador não pode mudar; diga no `helper` com quem falar.
- O rótulo é sempre visível; o placeholder é só exemplo.
- Números com unidade: `suffix="m³"` e `inputMode="decimal"` (abre o teclado numérico no celular). Ex.: leitura do hidrômetro.
