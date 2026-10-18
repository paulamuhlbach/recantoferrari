# Icon

Ícone do Material Icons (preenchido, 24px) desenhado em SVG com a cor do texto.

**Props:** `name` (um de `Icon.names`), `size` (padrão 24), `label` (só quando o ícone aparece sozinho e tem significado).

- Nomes disponíveis: home, notifications, event, description, person, check, close, menu, add, info, warning, error, check_circle, arrow_forward, chevron_left, chevron_right, arrow_upward, arrow_downward, remove, search, download, local_parking, payments, settings, logout, edit, block, lock, visibility, visibility_off, mail, open_in_new, expand_more, cloud, grass, pest_control, plumbing, cleaning_services, link, person_add, person_remove, history, swap_horiz, group, water_drop, photo_camera, calculate, pets.
- Cadastro das casas: `group` (Minha casa, moradores da unidade), `person_add` (indicar morador), `person_remove` (remover morador ou cancelar a indicação), `swap_horiz` (passar o perfil principal), `link` (copiar link de convite), `mail` (enviar ou reenviar convite).
- Leitura do hidrômetro (10/10/2026): `water_drop` (conta de água, leitura do hidrômetro), `photo_camera` (tirar ou trocar a foto, padrão do `FileUpload`), `calculate` (cálculo da água pela gestão).
- Pets da casa (12/10/2026): `pets` (cadastro de pets em Minha casa).
- Histórico (18/10/2026): `history` (abrir o registro de atividades de uma pessoa, "Meu registro" no menu da conta e a tela Registro de atividades).
- `cloud` marca o que depende do tempo, como o badge "Se chover, remarcamos" dos serviços ao ar livre.
- `open_in_new` marca links que abrem outro site ou app em nova aba; `TopAppBar`, `ListItem`, `Menu` e `NavigationDrawer` já o colocam sozinhos com `external`.
- **Ícones de serviço** (`Icon.servicos`): `grass` (corte de grama), `pest_control` (desinsetização), `plumbing` (desentupimento), `cleaning_services` (limpeza em geral) e `event` (genérico). O síndico **escolhe** o ícone de cada serviço numa lista ao cadastrar o tipo de serviço ou abrir a chamada; o ícone nunca fica fixo no código. Para um serviço novo sem ícone adequado, use `event` e proponha um ícone novo ao DS.
- Sem `label`, o ícone é decorativo (`aria-hidden`).
- Para um ícone novo, copie o caminho oficial do Material Icons (pacote `@material-design-icons/svg`, estilo filled) em `PATHS` no bundle e um SVG em `assets/Icons`. Nunca redesenhe à mão.
