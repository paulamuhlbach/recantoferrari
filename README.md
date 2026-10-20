# recantoferrari.com.br
Intranet do condomínio Recanto Ferrari


## Objetivo:
Disponibilizar site intranet, gerenciável pela administração do condomínio, que possibilite centralização da comunicação, gestão de espaços e integração com as ferramentas digitais já contratadas (Casa do Síndico, Condfy…) e de acesso exclusivo aos moradores do condomínio Recanto Ferrari, via autenticação.

## Premissas:
Uso de tecnologias de código aberto, proporcionando o uso e consumo de webservices de serviços de terceiros.
Ter interface amigável, tendo em vista a amplitude de faixas etárias dos moradores, com diferentes níveis de experiências em sistemas digitais.
Ter custo baixo, ou nulo, primando pela fácil manutenção da plataforma.
O sistema deve ser escalável e aderente a adaptação para novas tecnologias.
Ser responsivo, visando a utilização tanto em telas maiores (computadores), quanto em dispositivos móveis (celulares e tablets).

## Módulos do MVP:
Autenticação e perfis que se somam (morador; gestão: síndico, subsíndico e conselho; administrador do site, sem acesso a dados sensíveis; administradora condominial — Auxiliadora Predial —, não moradora, com acesso aos dados e às denúncias, vinculado ao contrato e com prazo prorrogável); cadastro por unidade com convite, perfil principal de cada casa e aprovação dos moradores pelo síndico; ouvidoria (demandas identificadas e sem identificação, Minhas demandas); avisos e coleta de lixo; serviços com adesão (ex.: corte de grama da área privativa, uma adesão por casa, cobrança no boleto); leitura mensal do hidrômetro (foto e número de cada casa até o dia 10, e-mails ao síndico e ao morador, cálculo da água para o boleto do mês seguinte); documentos institucionais; links para os apps já contratados (Condfy, Auxiliadora Predial).
Detalhes em [arquitetura-mvp.md](arquitetura-mvp.md).

## Publicação:
O que fazer quando o portal for para o ar (domínio, hospedagem, banco, e-mail, login com Google, LGPD): [para-publicar.md](para-publicar.md).

## Interface:
Design System Recanto Ferrari: https://claude.ai/artifact/XVqFUtTaue7JzAr29zQtnN (cópia no repositório em [design-system/](design-system/README.md): tokens, componentes, logos, ícones e fontes)
Protótipo navegável das telas: https://claude.ai/artifact/Kk5D5SEBTTDLgKp9c2DhVr
Personas do portal: [personas.md](personas.md)
Apresentação das personas e perfis de acesso (para o conselho): [apresentacoes/Personas-e-perfis-de-acesso.pptx](apresentacoes/Personas-e-perfis-de-acesso.pptx)
