# MapEmbed

Mapa do Google Maps incorporado na página, a partir de um endereço. Usa o iframe de busca do Google Maps, sem chave de API.

**Props:** `address` (rua, número, bairro e cidade; sem endereço, não mostra nada), `title` (para o leitor de tela; padrão "Mapa: endereço"), `height` (padrão 240 px), `zoom` (padrão 16, nível de rua).

- Primeiro uso: ecoponto no bloco "Não pode ir para a lixeira" da coleta de lixo, no Início. Fica abaixo do endereço e do botão "Ver no mapa" (que abre o Google Maps em outra aba, onde dá para traçar a rota).
- Ocupa a largura toda do contêiner e não causa rolagem horizontal; no celular (390 px), mantenha a altura entre 200 e 240 px.
- Quem edita o conteúdo escolhe se o mapa aparece (ex.: "Mostrar o mapa no Início" na coleta de lixo). Nunca fixo no código.
- O endereço vem do conteúdo salvo pela gestão. Confira se ele aponta o lugar certo antes de publicar.
- O mapa carrega só quando aparece na tela (`loading="lazy"`).
