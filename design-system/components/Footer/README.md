# Footer

Rodapé do site, com o nome do condomínio e os links fixos (termos de uso e política de privacidade).

**Props:** `tone` = `"deep"` (azul profundo com fio terracota, padrão) | `"surface"` (areia, para páginas públicas simples), `text` (padrão "Condomínio Recanto Ferrari"), `links` (`[{ label, href, external }]`), `logo` (mostra o logo horizontal pequeno; no `deep`, com `tone="deep"`), `children`.

- Em todas as páginas, inclusive as públicas (termos e política).
- Links curtos em `link` com sublinhado; alvo mínimo de 44px de altura.
- `deep`: fundo `surface-deep`, texto `on-surface-deep-variant`, links `on-surface-deep`, fio `accent` de 4px no topo. `surface`: fundo `surface-container` com borda `outline-variant`. Conteúdo até `content-max`.
- Não repita a navegação principal aqui.
