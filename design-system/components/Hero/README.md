# Hero

Faixa de boas-vindas com a foto do condomínio sob um véu azul-escuro, para o topo da página inicial depois do login.

**Props:** `title` (ex.: "Olá, Ana"), `eyebrow` (ex.: "Casa 14 · Moradora"), `children` (uma frase de apoio), `actions` (até 2 botões), `image` (url da foto), `imageAlt` (vazio se a foto é só ambiente), `imagePosition` (ex.: `"center 40%"`), `as` (`"h1"` padrão), `label`, `size` = `"compact"` (padrão) | `"large"`.

- Uma por página, logo abaixo do `TopAppBar`. Nas demais páginas, use título comum.
- **Compacto por padrão** (pedido da Paula, 28/10/2026): a faixa do Início é espaço nobre e tem pouca informação, então fica baixa (184 px no computador, 160 px no celular), com título de 36 px, para os avisos e atalhos aparecerem sem rolar. `size="large"` (340 px) só para uma página de apresentação, se um dia houver.
- Use as fotos de `assets/Fotos`. O véu (`hero-overlay` → `hero-overlay-fade`) fica do lado do texto: da esquerda no desktop, de baixo no celular. Não tire o véu nem troque por outra cor.
- Texto sempre em `on-surface-deep`; sobretítulo em `on-surface-deep-variant`. Título curto, uma linha no desktop.
- Botões: no máximo um `filled` (terracota) e um `outlined`.
- O fio `accent` de 4px embaixo liga a faixa azul à paleta Terracota.
- Botões `outlined` e `text` dentro do Hero ficam claros sozinhos.
