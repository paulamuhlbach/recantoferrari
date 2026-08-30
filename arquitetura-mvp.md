# Arquitetura inicial — MVP do Portal do Condomínio Recanto Ferrari

## 1. Objetivo

Disponibilizar um site intranet, gerenciável pela administração do condomínio, que centralize a comunicação com os moradores, apoie a gestão de espaços comuns e permita integração com ferramentas digitais já contratadas pelo condomínio (Auxiliadora Predial, Condify, entre outras). O acesso é exclusivo aos moradores do condomínio Recanto Ferrari, mediante autenticação.

## 2. Premissas

- **Código aberto**: priorizar tecnologias open source, tanto para reduzir custo de licenciamento quanto para facilitar o consumo e a integração com webservices de terceiros (Auxiliadora Predial, Condify e outros que venham a ser contratados).
- **Interface amigável**: considerar a ampla faixa etária dos moradores e os diferentes níveis de familiaridade com sistemas digitais — navegação simples, poucos cliques, textos claros, evitar jargão técnico.
- **Baixo custo**: buscar custo de operação baixo ou nulo, com manutenção simples (evitar infraestrutura complexa que exija equipe dedicada).
- **Escalabilidade e aderência tecnológica**: arquitetura modular, que permita evoluir ou trocar componentes (ex.: trocar provedor de storage, adicionar novos módulos) sem reescrever o sistema.
- **Responsividade**: interface adaptável a computadores, celulares e tablets, já que grande parte dos moradores deve acessar pelo celular.

Essas premissas orientam as escolhas técnicas da seção 5 (stack) e reforçam o modelo de integração via webservices descrito na seção 5.1.

## 3. Visão geral

Portal web restrito a moradores, com autenticação, três perfis de acesso e módulos de ouvidoria, conteúdo informativo e documentos institucionais. O foco do MVP é entregar o núcleo funcional com o menor custo de operação e manutenção possível, mantendo espaço para evolução (app mobile, notificações push, integrações com portaria, novas ferramentas de gestão, etc.).

## 4. Perfis de usuário e permissões

| Perfil | Acesso |
|---|---|
| **Morador** | Login, visualização de conteúdos (regimento, convenção, avisos, coleta de lixo), envio de demandas (identificadas e não identificadas), formulário de opt-in WhatsApp, acompanhamento das próprias demandas enviadas |
| **Síndico** | Tudo do morador + consulta e gestão de todas as demandas da ouvidoria (filtros por categoria, status, tipo), atribuição de categoria interna (manutenção predial, limpeza, quadra de esportes, salão de festas, etc.), **resposta às demandas diretamente pelo portal**, publicação de avisos |
| **Administrador do site** | Tudo do síndico + gestão de usuários (cadastro/bloqueio de moradores), gestão de conteúdo institucional (regimento, convenção, termos, política de privacidade), gestão de categorias da ouvidoria, configurações gerais |

Recomenda-se RBAC (Role-Based Access Control) simples com 3 papéis fixos no MVP — sem necessidade de sistema de permissões granular nesta fase.

## 5. Módulos funcionais

1. **Autenticação e área restrita** — login por e-mail/CPF + senha (nº da unidade) **ou por conta Google (OAuth 2.0 / OpenID Connect)**, sessão via JWT, recuperação de senha (para quem usa login por senha), cadastro do morador feito pelo administrador (evita autocadastro indevido — a conta Google apenas simplifica o login de um morador já cadastrado, não substitui a validação de quem pode acessar).
2. **Ouvidoria**
   - Formulário identificado (nome, unidade, telefone, categoria, texto, anexos).
   - Formulário não identificado/anônimo (tipo de chamado, texto, anexos) — sem login obrigatório, mas acessível só de dentro do portal para evitar spam externo.
   - Painel do síndico: listagem, filtros por categoria interna e tipo de demanda, status (novo/em andamento/respondido/concluído), categorização (manutenção predial, limpeza, quadra, salão de festas, etc. — cadastráveis pelo administrador).
   - **Resposta à demanda**: síndico registra uma resposta textual vinculada à demanda; se a demanda for identificada, o morador autor visualiza a resposta em "minhas demandas" (o WhatsApp não é usado aqui — ver seção 5, item 3, sobre o escopo do canal); em demandas não identificadas, a resposta fica registrada apenas no histórico interno da ouvidoria (visível a síndico/admin), sem destinatário e sem publicação automática como aviso.
3. **Conteúdo informativo**
   - Coleta de lixo (texto/tabela de dias e horários, editável pelo síndico/admin).
   - Avisos diversos (mural de avisos, CRUD simples).
   - Opt-in de WhatsApp (texto explicativo + formulário de consentimento, com registro de data/hora — importante para LGPD). **Escopo do canal**: uso exclusivo para o síndico/administrador enviar avisos gerais (mural de avisos) — não é utilizado pela ouvidoria (nem para notificar demandas, nem para respostas do síndico às demandas).
4. **Documentos institucionais** — regimento interno, convenção, termos de uso e política de privacidade, publicados como PDF ou página HTML, versionáveis pelo administrador.

## 6. Modelo de dados (entidades principais)

- **usuarios**: id, nome, unidade (nº da casa), telefone, e-mail, senha_hash (nulo se o acesso for só via Google), provedor_auth (local/google), google_id (nulo se não vinculado), perfil (morador/síndico/admin), status (ativo/bloqueado)
- **demandas**: id, tipo (identificada/não identificada), usuario_id (nulo se anônima), nome_demandante, unidade, telefone, categoria (queixa/sugestão/informação/denúncia), categoria_interna (manutenção/limpeza/quadra/salão/...), texto, status, criado_em
- **anexos**: id, demanda_id, url_arquivo, nome_original, tipo_mime, tamanho
- **respostas_demandas**: id, demanda_id, autor_id (síndico), texto, criado_em — permite, no futuro, múltiplas trocas (histórico tipo "ticket") sem alterar o modelo
- **categorias_internas**: id, nome, ativo (gerenciadas pelo síndico/admin)
- **avisos**: id, titulo, texto, autor_id, publicado_em
- **conteudos_institucionais**: id, tipo (regimento/convencao/termos/politica/coleta_lixo), versao, arquivo_ou_html, atualizado_em
- **consentimentos_whatsapp**: id, usuario_id, aceite (bool), ip, data_hora

## 7. Arquitetura técnica sugerida

Todas as escolhas abaixo priorizam software livre/open source e baixo custo operacional, conforme as premissas do projeto.

| Camada | Sugestão MVP | Observações |
|---|---|---|
| Frontend | React (ou Next.js) — open source | SPA simples, responsiva (mobile-first, já que grande parte dos moradores acessará pelo celular); interface enxuta, priorizando clareza sobre densidade de informação |
| Backend | API REST — **Java (Spring Boot)** ou Python/FastAPI, ambos open source | Regras de autenticação, autorização por perfil, upload de arquivos, orquestração de chamadas a webservices externos. Ver observações sobre Java abaixo |
| Autenticação | JWT + hash de senha (bcrypt) para login local; **login social via Google (OAuth 2.0 / OpenID Connect)** como alternativa | Sem SSO corporativo no MVP; considerar 2FA em fase futura. Google reduz atrito de cadastro de senha, alinhado à premissa de interface amigável para públicos com menor familiaridade digital |
| Banco de dados | PostgreSQL — open source | Relacional, adequado ao volume esperado (centenas de unidades); zero custo de licença |
| Armazenamento de anexos | Object storage compatível S3 (ex.: MinIO self-hosted, ou camada gratuita de provedor cloud) | Aceitar qualquer tipo de arquivo; validar tamanho máximo e escanear vírus se possível |
| Hospedagem | PaaS com camada gratuita/baixo custo (Render, Railway) ou VPS simples | Minimizar operação de infraestrutura; evitar arquitetura que exija equipe de DevOps dedicada |
| Integração WhatsApp | API oficial (Meta Cloud API, tem camada gratuita) ou provedor homologado | Uso restrito a avisos gerais enviados pelo síndico/admin (substitui push notifications); não é usado pela ouvidoria; volume inicial baixo — ver nota abaixo |

**Volume esperado e custo estimado**: a previsão inicial é de **1 disparo por mês** (aviso geral para os moradores, publicado pelo síndico/admin). Mesmo multiplicando pelo número de unidades do condomínio, o custo mensal fica marginal (mensagens de categoria "utilidade" giram em torno de R$0,04–R$0,05 cada, em tarifação de mercado de 2026). Nesse volume, não há necessidade de negociar tier de desconto por volume com o provedor nem de otimizar categoria de mensagem — o foco deve ser garantir que o disparo seja simples de operar pelo síndico/administrador. Caso o uso cresça (avisos mais frequentes, por exemplo), reavaliar custo e formato antes de expandir a frequência. Ampliar o uso do WhatsApp para o fluxo de ouvidoria não está previsto neste MVP (ver seção 5, item 3).

**Sobre a opção de Java para o backend**: Spring Boot é open source, maduro e com grande ecossistema de bibliotecas para autenticação (Spring Security, incluindo suporte pronto a OAuth2/Google), upload de arquivos e integração com webservices — atende bem às premissas de código aberto e escalabilidade. Os pontos de atenção frente às demais premissas do projeto:

- **Custo/hospedagem**: aplicações Java costumam exigir mais memória (JVM) que Python para uma carga equivalente, o que pode elevar o custo em planos gratuitos/baixo custo de PaaS (ex.: tier gratuito do Render costuma ser mais apertado para JVM). Vale validar o consumo de memória da instância mínima antes de decidir a hospedagem.
- **Velocidade de desenvolvimento do MVP**: Spring Boot tende a ter mais boilerplate e configuração inicial que FastAPI, o que pode impactar o prazo de entrega do MVP — mas isso se equilibra se a equipe já tiver mais familiaridade com Java.
- **Manutenção**: se a equipe responsável pela manutenção futura do portal já domina Java, isso reduz o risco de manutenção a longo prazo — um fator relevante dada a premissa de "fácil manutenção".

Em resumo, Java/Spring Boot é uma opção tecnicamente viável e alinhada às premissas de código aberto e escalabilidade; a escolha entre Java e Python deve considerar principalmente a experiência da equipe disponível e o custo de hospedagem no provedor escolhido. Node.js foi descartado como opção, por preferência explícita do time.

### 7.1 Integração com ferramentas já contratadas (Auxiliadora Predial, Condify, etc.)

O backend atua como camada de orquestração: ao invés de duplicar dados que já existem nessas plataformas (ex.: cadastro de moradores, financeiro, reservas), o MVP deve prever pontos de integração via webservice/API sempre que a ferramenta contratada oferecer essa opção. Nesta fase inicial, recomenda-se:

- Mapear quais dessas ferramentas expõem API pública ou webhooks (isso deve ser validado com o fornecedor antes da implementação).
- Iniciar com integrações de leitura (ex.: importar lista de moradores/unidades para não recadastrar manualmente), deixando integrações de escrita (ex.: replicar avisos, sincronizar reservas) para fases seguintes.
- Isolar cada integração em um módulo próprio no backend, para que a troca ou adição de um novo fornecedor não impacte o restante do sistema — alinhado à premissa de escalabilidade e aderência a novas tecnologias.

## 8. Fluxos principais

- **Login e roteamento por perfil**: usuário autentica (e-mail/senha **ou botão "Entrar com Google"**) → se via Google, sistema verifica se o e-mail retornado pertence a um morador já cadastrado pelo administrador (login recusado caso contrário, para manter o acesso exclusivo aos moradores) → sistema identifica perfil → libera menu correspondente (morador, síndico ou admin).
- **Envio de demanda identificada**: morador logado preenche formulário → upload de anexos para storage → registro salvo com status "novo" → síndico visualiza no painel.
- **Envio de demanda não identificada**: acessível dentro do portal (sem exigir dados pessoais) → mesmo fluxo de armazenamento, sem vínculo a usuário.
- **Consulta e categorização (síndico)**: lista de demandas com filtros → síndico associa categoria interna e atualiza status.
- **Resposta à demanda (síndico)**: síndico abre a demanda → registra resposta em texto → status muda para "respondido" → se demanda identificada, resposta aparece para o morador em "minhas demandas".
- **Opt-in WhatsApp**: morador aceita termos → consentimento registrado com data/hora e IP → backend passa a permitir o envio de avisos gerais publicados pelo síndico/admin para aquele contato (o fluxo de ouvidoria — envio e resposta de demandas — não aciona o WhatsApp em nenhuma etapa).

## 9. Segurança e privacidade (LGPD)

- Toda a área é restrita a moradores autenticados, exceto talvez as páginas de termos/política (que podem ficar públicas por transparência).
- Consentimento explícito e registrado para envio de WhatsApp (base legal LGPD).
- Anexos armazenados em bucket privado, com URLs assinadas/temporárias.
- Dados sensíveis (telefone, unidade) visíveis apenas a síndico/admin, nunca expostos publicamente.
- Denúncias podem exigir tratamento de confidencialidade reforçada (acesso restrito ao síndico, log de quem visualizou).

## 10. Roadmap sugerido (fases do MVP)

1. **Fase 1**: autenticação + perfis + cadastro de moradores pelo admin.
2. **Fase 2**: ouvidoria (formulários identificado e não identificado + painel do síndico com categorias e resposta às demandas).
3. **Fase 3**: conteúdo institucional (regimento, convenção, termos, política) + avisos + coleta de lixo.
4. **Fase 4**: opt-in e envio de avisos gerais via WhatsApp (síndico/admin) — não abrange a ouvidoria.
5. **Fase 5**: primeiras integrações de leitura com ferramentas já contratadas (Auxiliadora Predial, Condify), conforme disponibilidade de API do fornecedor.

## 11. Fora do escopo do MVP (considerar depois)

- Aplicativo mobile nativo.
- **Notificações push (avaliadas e descartadas)** — optou-se por manter o WhatsApp como canal único de aviso automático, priorizando alcance garantido (inclusive iPhones sem instalação de PWA) em vez do custo zero do push, dado o baixo volume previsto (1 disparo/mês).
- Enquetes/votações digitais.
- Reserva de áreas comuns (salão de festas, quadra) — hoje é só uma categoria de demanda, não um sistema de reserva.
- Chat em tempo real com a administração.
- Integrações de escrita (sincronização bidirecional) com Auxiliadora Predial/Condify — ficam para depois de validar as APIs disponíveis com o fornecedor.
