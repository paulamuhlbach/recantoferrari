# Logo

Logotipo do condomínio com as três casas, o nome e a tagline, desenhado em SVG e texto real.

**Props:** `variant` = `"horizontal"` (padrão) | `"vertical"` | `"simbolo"`; `size` = `"sm"` | `"md"` (padrão) | `"lg"`; `tagline` (padrão `true`); `tone` = `"default"` (padrão, fundo claro) | `"deep"` (fundo azul profundo).

- Cabeçalho do site: `horizontal`, `sm`, sem tagline (o `TopAppBar` já faz isso).
- Rodapé, página de login e capa: `vertical`, `lg`.
- Favicon e espaços menores que 48px: `simbolo`.
- **Sobre azul profundo** (`surface-deep`, `blue-1`, lateral do login, rodapé): `tone="deep"`. O nome fica em `on-surface-deep` (papel, 17:1 no `blue-1`, 8,6:1 no `blue-2`) e a tagline em `primary-container` (terracota clara, 12:1 no `blue-1`, 6:1 no `blue-2`); a tagline em `accent` não passa de 2,4:1 no `blue-2`. O `Footer` já usa essa versão.
- O nome troca de cor sozinho no tema escuro. Os telhados e a base usam as primitivas `terracotta-1/2/3` e não mudam.
- Para arquivos (e-mail, PDF, redes sociais), use os SVGs em `assets/Logos`.
