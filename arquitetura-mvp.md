# Arquitetura inicial — MVP do Portal do Condomínio Recanto Ferrari

## 1. Objetivo

Disponibilizar um site intranet, gerenciável pela administração do condomínio, que centralize a comunicação com os moradores, apoie a gestão de espaços comuns e permita integração com ferramentas digitais já contratadas pelo condomínio (Auxiliadora Predial, Condfy, entre outras). O acesso é exclusivo aos moradores do condomínio Recanto Ferrari, mediante autenticação.

## 2. Premissas

- **Código aberto**: priorizar tecnologias open source, tanto para reduzir custo de licenciamento quanto para facilitar o consumo e a integração com webservices de terceiros (Auxiliadora Predial, Condfy e outros que venham a ser contratados).
- **Interface amigável**: considerar a ampla faixa etária dos moradores e os diferentes níveis de familiaridade com sistemas digitais — navegação simples, poucos cliques, textos claros, evitar jargão técnico.
- **Baixo custo**: buscar custo de operação baixo ou nulo, com manutenção simples (evitar infraestrutura complexa que exija equipe dedicada).
- **Escalabilidade e aderência tecnológica**: arquitetura modular, que permita evoluir ou trocar componentes (ex.: trocar provedor de storage, adicionar novos módulos) sem reescrever o sistema.
- **Regras configuráveis, nunca fixas no código**: prazos, valores, textos padrão e demais parâmetros de negócio (ex.: prazo de adesão depois de um adiamento) são definidos pelo síndico/administrador em cada operação ou nas configurações do portal. O sistema pode sugerir um valor padrão, que também é configurável. Sempre que houver escolha possível (ex.: ícone de um serviço), o síndico escolhe numa lista; nada é amarrado no código.
- **Responsividade**: interface adaptável a computadores, celulares e tablets, já que grande parte dos moradores deve acessar pelo celular.

Essas premissas orientam as escolhas técnicas da seção 7 (stack) e reforçam o modelo de integração via webservices descrito na seção 7.1.

## 3. Visão geral

Portal web restrito a moradores, com autenticação, três perfis de acesso e módulos de ouvidoria, conteúdo informativo, serviços com adesão (ex.: corte de grama da área privativa) e documentos institucionais. O foco do MVP é entregar o núcleo funcional com o menor custo de operação e manutenção possível, mantendo espaço para evolução (app mobile, notificações push, integrações com portaria, novas ferramentas de gestão, etc.).

## 4. Perfis de usuário e permissões

| Perfil | Acesso |
|---|---|
| **Morador** | Login, visualização de conteúdos (regimento, convenção, avisos, coleta de lixo), envio de demandas (identificadas e não identificadas), formulário de opt-in WhatsApp, acompanhamento das próprias demandas enviadas, **adesão da sua unidade a serviços opcionais** (ex.: corte de grama da área privativa) e cancelamento até o prazo, acesso por link aos apps externos (Condfy, Auxiliadora Predial), consulta dos moradores da própria casa em "Minha casa". O **perfil principal da unidade** (um por casa) também indica e remove moradores, passa a função para outro morador ativo e recebe os avisos de cobrança |
| **Gestão do condomínio** ("perfil síndico": síndico, subsíndico e membros do conselho) | Tudo do morador + consulta e gestão de todas as demandas da ouvidoria (filtros por categoria, status, tipo), atribuição de categoria interna (manutenção predial, limpeza, quadra de esportes, salão de festas, etc.), **resposta às demandas diretamente pelo portal**, publicação de avisos, **abertura e acompanhamento de chamadas de serviços com adesão** (data, prazo, valor por unidade, mês de cobrança) e exportação das adesões para cobrança e para o prestador, registro de adiamentos, cadastro de unidades e envio de convites, **aprovação dos moradores indicados pelo perfil principal** (cargo síndico), bloqueio de moradores, **atribuição de cargos e do papel de administrador do site** (cargo síndico), configurações das regras de gestão (prazos, textos padrão, tipos de serviço) |
| **Administrador do site** | Administra o **funcionamento** do portal: cadastro de unidades e envio de convites, conteúdo institucional (regimento, convenção, termos, política de privacidade), categorias da ouvidoria, configurações gerais, integrações e apps externos. **Sem cargo na gestão, não vê dados sensíveis** (ver abaixo) |

Recomenda-se RBAC (Role-Based Access Control) simples com 3 papéis no MVP — sem necessidade de sistema de permissões granular nesta fase. **Os papéis se somam** (decisão de 27/09/2026): todo usuário é morador; os papéis "gestão" e "administrador do site" são independentes e podem ser combinados. Nem toda pessoa da gestão é administradora do site, e o administrador do site não precisa ter cargo na gestão. O cargo na gestão (síndico, subsíndico, conselho) é informativo e aparece no nome da pessoa (ex.: "Casa 07 · Síndico"). **Denúncias** (decisão de 27/09/2026): só o síndico e o subsíndico leem e respondem; os demais membros do conselho veem apenas estatísticas por categoria e andamento, sem dados da unidade nem do morador; o administrador do site que não tem cargo de síndico ou subsíndico não lê denúncias nem vê dados de quem as fez (ver seção 5, item 2).

**Dados sensíveis e administrador do site (decisão de 27/09/2026)**: em todo o portal, o papel de administrador do site **não dá acesso** a dados sensíveis — nomes e contatos de moradores, composição das casas, valores e adesões de serviços, serviços contratados por cada casa, conteúdo e autoria de demandas. O administrador sem cargo vê só números, situações e o número da casa; quando precisa ver um contato (ex.: e-mail de um convite), ele aparece mascarado (`pa•••@gmail.com`). Como morador, ele continua vendo os dados da própria casa. Por isso **quem atribui cargos da gestão e o papel de administrador do site é o síndico**, não o administrador.

**Princípio de experiência (decisão de 27/09/2026)**: toda pessoa da gestão é também moradora. A gestão usa o mesmo portal do morador, sem trocar de contexto: vê o conteúdo de morador e, no mesmo lugar, as ferramentas de gestão (com uma diferenciação visual discreta). Por isso as telas são desenhadas primeiro para o perfil Morador, e as funções de gestão entram sobre essa base.

## 5. Módulos funcionais

1. **Autenticação e área restrita** — login por e-mail/CPF + senha (criada pela própria pessoa ao aceitar o convite ou a aprovação) **ou por conta Google (OAuth 2.0 / OpenID Connect)**, sessão via JWT, recuperação de senha (para quem usa login por senha), cadastro **por unidade, com convite** (decisão de 27/09/2026 — evita autocadastro indevido; a conta Google apenas simplifica o login de quem já foi aceito):
   - O síndico ou o administrador do site cadastra a unidade (número da casa) e informa o e-mail do proprietário ou do locatário. O sistema envia um **link de convite** com validade configurável (padrão sugerido: 7 dias), que pode ser reenviado.
   - Quem recebe o convite faz o próprio cadastro (nome, CPF, telefone, vínculo proprietário/locatário, senha ou Google, aceite da política de privacidade) e se torna o **perfil principal** da unidade.
   - O perfil principal **indica** os demais moradores (nome e e-mail), no próprio cadastro ou depois em "Minha casa". Cada indicação fica "Aguardando aprovação" até o **síndico aprovar** (ou recusar, com aviso ao principal). Aprovado, o morador recebe um e-mail para criar o próprio acesso.
   - Toda unidade cadastrada tem sempre **um** perfil principal. Ele pode passar a função para outro morador ativo da casa (a gestão é avisada); se o principal sair sem passar, o síndico define o novo principal.
   - O perfil principal remove moradores da casa (o morador removido perde o acesso; o histórico de demandas continua). A gestão é avisada.
   - Os avisos de cobrança das adesões e os avisos oficiais da unidade vão para o perfil principal.
2. **Ouvidoria**
   - Formulário identificado (nome, unidade, telefone, categoria, assunto, texto, anexos). Nome e unidade vêm do cadastro; o telefone vem preenchido e pode ser alterado.
   - Formulário não identificado/anônimo (tipo de chamado, assunto, texto, anexos) — sem login obrigatório, mas acessível só de dentro do portal para evitar spam externo. A tela deixa claro que não há resposta individual.
   - Os dois formulários ficam na mesma tela (escolha "Com meu nome" / "Sem identificação"). Ao escolher o tipo Denúncia, a tela informa que só o síndico e o subsíndico leem e respondem, que as leituras ficam registradas e que os demais membros do conselho veem apenas números.
   - **Denúncias**: conteúdo, anexos, unidade e morador visíveis só para os cargos síndico e subsíndico, que também são os únicos que respondem. Os demais membros do conselho veem um painel estatístico só com **categoria e andamento** (decisão de 27/09/2026): quantidade de denúncias por período e por categoria interna, quantas foram lidas, respondidas e concluídas, e o tempo até a primeira leitura e até a resposta — nunca o texto, os anexos, a unidade ou o nome de quem denunciou. O **administrador do site** que não tem cargo de síndico ou subsíndico também não lê o conteúdo das denúncias nem os dados do morador e da unidade que as fez. Cada leitura fica registrada (quem e quando). Quais cargos leem e quais veem só estatísticas fica nas configurações, com este padrão.
   - "Minhas demandas": lista das demandas identificadas do morador, com situação, resposta do síndico e histórico de andamento.
   - Painel do síndico: listagem, filtros por categoria interna e tipo de demanda, status (novo/em andamento/respondido/concluído), categorização (manutenção predial, limpeza, quadra, salão de festas, etc. — cadastráveis pelo administrador).
   - **Resposta à demanda**: síndico registra uma resposta textual vinculada à demanda; se a demanda for identificada, o morador autor visualiza a resposta em "minhas demandas" (o WhatsApp não é usado aqui — ver seção 5, item 3, sobre o escopo do canal); em demandas não identificadas, a resposta fica registrada apenas no histórico interno da ouvidoria (visível a síndico/admin), sem destinatário e sem publicação automática como aviso.
3. **Conteúdo informativo**
   - Coleta de lixo (texto/tabela de dias e horários, editável pelo síndico/admin).
   - Avisos diversos (mural de avisos, CRUD simples).
   - Opt-in de WhatsApp (texto explicativo + formulário de consentimento, com registro de data/hora — importante para LGPD). **Escopo do canal**: uso exclusivo para o síndico/administrador enviar avisos gerais (mural de avisos) — não é utilizado pela ouvidoria (nem para notificar demandas, nem para respostas do síndico às demandas).
4. **Documentos institucionais** — regimento interno, convenção, termos de uso e política de privacidade, publicados como PDF ou página HTML, versionáveis pelo administrador.
5. **Serviços com adesão** — serviços opcionais contratados pelo condomínio, que cada unidade pode incluir mediante adesão e cobrança no boleto mensal. Primeiros usos: **corte de grama da área privativa** e **desinsetização das casas**, que acontecem sem periodicidade fixa, junto com o serviço nas áreas comuns. **Pode haver mais de uma chamada aberta ao mesmo tempo** (ex.: corte de grama e desinsetização), cada uma com data, prazo, valor e adesões próprios.
   - **Tipos de serviço** (catálogo gerido pelo síndico): nome, descrição padrão, ícone escolhido numa lista (corte de grama, desinsetização, desentupimento, limpeza em geral, genérico) e se depende do tempo. Novos tipos podem ser cadastrados a qualquer momento, sem mudar o sistema.
   - **Chamada** (síndico): tipo de serviço (traz ícone, descrição e "depende do tempo" já preenchidos, e o síndico pode trocar), descrição, data prevista, prazo para aderir, valor fixo por unidade, mês de cobrança no boleto e a marcação **"depende do tempo"** (serviços ao ar livre, como o corte de grama). Serviços que dependem do tempo mostram ao morador o aviso "Se chover, remarcamos" em todos os cards. Ao publicar, o sistema cria automaticamente um aviso no mural (e, a partir da Fase 4, o aviso geral pode sair pelo WhatsApp).
   - **Adesão** (morador): a adesão é **da unidade**, não da pessoa — só uma adesão ativa por unidade e chamada. Se outro morador da unidade já marcou, a tela mostra quem marcou e quando, e não permite marcar de novo. O morador confirma a autorização da cobrança antes de aderir. Quem não quer não precisa responder (nem todas as unidades têm grama).
   - **Cancelamento**: qualquer morador da unidade pode cancelar até o prazo; depois do prazo, a adesão fica travada. Adesões e cancelamentos ficam registrados com autor e data/hora.
   - **Encerramento e exportação** (síndico): no prazo, as adesões se encerram; o síndico exporta a lista de unidades para a cobrança no boleto (Auxiliadora Predial) e a lista para o prestador.
   - **Adiamento** (ex.: chuva): o síndico registra o adiamento com o motivo e a nova data, ou "nova data a definir". O sistema publica um aviso no mural (e, a partir da Fase 4, o aviso geral pelo WhatsApp), mostra um alerta na página inicial dos moradores e marca o serviço como "Adiado", exibindo a data anterior. As adesões continuam valendo. Com a nova data, abre-se um novo prazo, **definido pelo síndico a cada adiamento** (o sistema sugere um valor padrão — hoje 2 dias antes da nova data —, que o síndico altera nas configurações; nada fixo no código): unidades que não aderiram ainda podem aderir, e as inscritas podem cancelar se a nova data não servir. Quando a data fica "a definir", o aviso da nova data é publicado assim que o síndico a informar. Todos os adiamentos ficam no histórico do serviço.
   - Enquanto houver chamadas abertas, a página inicial do morador mostra o destaque "Precisa da sua resposta" com um card por chamada (data, prazo e valor). A página "Serviços" lista todas as chamadas abertas lado a lado, cada uma com sua adesão, e o histórico de serviços anteriores da unidade.
6. **Apps externos** — links para os portais já contratados (Condfy: https://web.condfy.com.br/login; Auxiliadora Predial: https://portal.auxiliadorapredial.com.br/Login.aspx), agrupados num menu "Apps" do cabeçalho e abertos em outra aba. No Android, o link do Condfy pode tentar abrir o app instalado (pacote br.com.condfy), voltando ao login web.

## 6. Modelo de dados (entidades principais)

- **unidades**: id, numero (nº da casa), principal_usuario_id (nulo até o convite ser aceito), status_cadastro (sem_convite/convite_enviado/cadastrada), criado_por, criado_em
- **convites_unidade**: id, unidade_id, email, vinculo (proprietario/locatario), token_hash, enviado_por, enviado_em, expira_em (prazo vindo de `configuracoes`), aceito_em, cancelado_em — o e-mail só aparece completo para a gestão; para o administrador sem cargo, mascarado
- **usuarios**: id, nome, cpf, unidade_id, vinculo (proprietario/locatario/morador), telefone, e-mail, senha_hash (nulo se o acesso for só via Google), provedor_auth (local/google), google_id (nulo se não vinculado), status (aguardando_aprovacao/ativo/bloqueado/removido), indicado_por, indicado_em, aprovado_por, aprovado_em
- **historico_unidade**: id, unidade_id, acao (convite, cadastro, indicacao, aprovacao, recusa, remocao, troca_principal, bloqueio), usuario_alvo_id, feito_por, criado_em — trilha das mudanças de moradores e do perfil principal
- **usuario_papeis**: usuario_id, papel (gestao/admin), cargo (sindico/subsindico/conselho, só para gestao), atribuido_por (sempre um usuário com cargo síndico), atribuido_em — papéis somados ao de morador; uma pessoa pode ter os dois
- **demandas**: id, numero (protocolo exibido ao morador, ex.: 2026-0142), tipo (identificada/não identificada), usuario_id (nulo se anônima), nome_demandante, unidade, telefone, categoria (queixa/sugestão/informação/denúncia), categoria_interna (manutenção/limpeza/quadra/salão/...), assunto, texto, status (nova/em andamento/respondida/concluída), criado_em
- **leituras_demandas**: id, demanda_id, usuario_id, lida_em — registro de cada leitura (obrigatório para denúncias); alimenta os indicadores "lida" e "tempo até a primeira leitura"
- **historico_demandas**: id, demanda_id, status, autor_id, criado_em — alimenta o "Andamento" em Minhas demandas
- **anexos**: id, demanda_id, url_arquivo, nome_original, tipo_mime, tamanho
- **respostas_demandas**: id, demanda_id, autor_id (síndico), texto, criado_em — permite, no futuro, múltiplas trocas (histórico tipo "ticket") sem alterar o modelo
- **categorias_internas**: id, nome, ativo (gerenciadas pelo síndico/admin)
- **avisos**: id, titulo, texto, autor_id, publicado_em
- **conteudos_institucionais**: id, tipo (regimento/convencao/termos/politica/coleta_lixo), versao, arquivo_ou_html, atualizado_em
- **consentimentos_whatsapp**: id, usuario_id, aceite (bool), ip, data_hora
- **tipos_servico**: id, nome, descricao_padrao, icone (escolhido de uma lista), depende_clima_padrao (bool), ativo, criado_por, criado_em — catálogo de serviços que o condomínio costuma oferecer; o síndico cadastra novos
- **servicos_adesao** (chamadas): id, tipo_servico_id, icone (pode trocar o do tipo), titulo, descricao, data_servico, prazo_adesao, valor_unidade, competencia_cobranca (mês/ano do boleto), depende_clima (bool), status (rascunho/aberta/adiada/encerrada/concluída/cancelada), aviso_id (aviso gerado), criado_por, criado_em, atualizado_em
- (várias chamadas podem estar com status "aberta" ao mesmo tempo; não há restrição de uma chamada ativa)
- **configuracoes**: chave, valor, descricao, atualizado_por, atualizado_em — parâmetros editáveis pelo síndico/admin (ex.: `servicos.prazo_padrao_apos_adiamento_dias` = 2; textos padrão de avisos). Nenhuma regra de negócio fica fixa no código.
- **adiamentos_servico**: id, servico_id, data_anterior, nova_data (nulo = a definir), novo_prazo_adesao, motivo (chuva/outro), observacao, aviso_id (aviso publicado), criado_por, criado_em — histórico de adiamentos; data_servico e prazo_adesao da chamada são atualizados a cada adiamento
- **adesoes_servico**: id, servico_id, unidade, usuario_id (quem marcou), aceite_cobranca (bool), criado_em, cancelado_em (nulo se ativa), cancelado_por — **restrição única de adesão ativa por (servico_id, unidade)** (índice único parcial onde cancelado_em é nulo), garantida no banco para evitar dupla marcação simultânea

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

### 7.1 Integração com ferramentas já contratadas (Auxiliadora Predial, Condfy, etc.)

O backend atua como camada de orquestração: ao invés de duplicar dados que já existem nessas plataformas (ex.: cadastro de moradores, financeiro, reservas), o MVP deve prever pontos de integração via webservice/API sempre que a ferramenta contratada oferecer essa opção. Nesta fase inicial, recomenda-se:

- Mapear quais dessas ferramentas expõem API pública ou webhooks (isso deve ser validado com o fornecedor antes da implementação).
- Iniciar com integrações de leitura (ex.: importar lista de moradores/unidades para não recadastrar manualmente), deixando integrações de escrita (ex.: replicar avisos, sincronizar reservas) para fases seguintes.
- Enquanto não houver API, o módulo de serviços com adesão exporta a lista de unidades aderidas (CSV/planilha) para a Auxiliadora Predial lançar a cobrança no boleto. A integração de escrita (lançamento automático) fica para depois de validar a API.
- Isolar cada integração em um módulo próprio no backend, para que a troca ou adição de um novo fornecedor não impacte o restante do sistema — alinhado à premissa de escalabilidade e aderência a novas tecnologias.

## 8. Fluxos principais

- **Cadastro por convite**: síndico/admin cadastra a unidade e o e-mail → convite enviado (link com validade) → proprietário/locatário abre o link, preenche os dados e aceita a política → vira perfil principal (unidade "cadastrada") → indica os demais moradores → indicações aparecem para o síndico → síndico aprova ou recusa → aprovado recebe e-mail para criar o acesso; recusa gera aviso ao principal. Link vencido mostra a mensagem e orienta a pedir outro convite.
- **Troca do perfil principal**: principal escolhe outro morador ativo da casa → confirma → papel passa para o novo principal, registro em historico_unidade, aviso à gestão e ao novo principal.
- **Login e roteamento por perfil**: usuário autentica (e-mail/senha **ou botão "Entrar com Google"**) → se via Google, sistema verifica se o e-mail retornado pertence a um morador ativo (cadastrado por convite ou aprovado pelo síndico; login recusado caso contrário, para manter o acesso exclusivo aos moradores) → sistema identifica perfil → libera menu correspondente (morador, síndico ou admin).
- **Envio de demanda identificada**: morador logado preenche formulário → upload de anexos para storage → registro salvo com status "novo" → síndico visualiza no painel.
- **Envio de demanda não identificada**: acessível dentro do portal (sem exigir dados pessoais) → mesmo fluxo de armazenamento, sem vínculo a usuário.
- **Consulta e categorização (síndico)**: lista de demandas com filtros → síndico associa categoria interna e atualiza status.
- **Resposta à demanda (síndico)**: síndico abre a demanda → registra resposta em texto → status muda para "respondido" → se demanda identificada, resposta aparece para o morador em "minhas demandas".
- **Abertura de serviço com adesão (síndico)**: síndico cria a chamada (serviço, data, prazo, valor por unidade, mês de cobrança) → publica → sistema gera aviso no mural → chamada aparece em "Serviços" e no destaque da página inicial dos moradores.
- **Adesão (morador)**: morador abre o serviço → se a unidade ainda não aderiu, marca a autorização de cobrança e confirma → sistema grava a adesão da unidade (a restrição única impede uma segunda adesão ativa) → tela mostra "Casa inscrita". Se a unidade já tiver adesão, a tela mostra quem marcou e quando.
- **Cancelamento (morador)**: qualquer morador da unidade, até o prazo → confirmação → adesão marcada como cancelada (com autor e data) → unidade pode aderir de novo até o prazo.
- **Encerramento (síndico/sistema)**: no prazo, a chamada passa a encerrada → síndico exporta as listas para cobrança e para o prestador → após o serviço, marca como concluída.
- **Adiamento (síndico)**: síndico registra adiamento (motivo + nova data ou "a definir") → status "adiada", registro em adiamentos_servico → aviso no mural (e WhatsApp a partir da Fase 4) + alerta no início dos moradores → adesões mantidas → novo prazo de adesão/cancelamento definido pelo síndico (sugestão vinda das configurações) → quando a data "a definir" é informada, novo aviso e o serviço volta a "aberta".
- **Opt-in WhatsApp**: morador aceita termos → consentimento registrado com data/hora e IP → backend passa a permitir o envio de avisos gerais publicados pelo síndico/admin para aquele contato (o fluxo de ouvidoria — envio e resposta de demandas — não aciona o WhatsApp em nenhuma etapa).

## 9. Segurança e privacidade (LGPD)

- Toda a área é restrita a moradores autenticados, exceto talvez as páginas de termos/política (que podem ficar públicas por transparência).
- Consentimento explícito e registrado para envio de WhatsApp (base legal LGPD).
- Anexos armazenados em bucket privado, com URLs assinadas/temporárias.
- Dados sensíveis (nomes, telefone, e-mail, CPF, composição das casas, valores e adesões de serviços, demandas) visíveis apenas à gestão e, para a própria casa, aos seus moradores. **O administrador do site sem cargo não os acessa** em nenhuma tela nem exportação; vê só números, situações e e-mails mascarados. A regra vale também para a API (checagem no backend, não só na interface).
- Denúncias podem exigir tratamento de confidencialidade reforçada (conteúdo e identificação só para síndico e subsíndico; demais membros do conselho e administrador do site sem cargo não acessam conteúdo nem identificação — o conselho vê apenas estatísticas por categoria e andamento; log de quem visualizou).
- Serviços com adesão: a lista enviada ao prestador contém só o número das unidades; nome de quem aderiu e valores ficam restritos à gestão e aos moradores da própria unidade (o administrador do site sem cargo não vê). Autorização de cobrança registrada com autor e data/hora.

## 10. Roadmap sugerido (fases do MVP)

1. **Fase 1**: autenticação + perfis + cadastro de unidades com convite, perfil principal, indicação de moradores e aprovação pelo síndico.
2. **Fase 2**: ouvidoria (formulários identificado e não identificado + painel do síndico com categorias e resposta às demandas).
3. **Fase 3**: conteúdo institucional (regimento, convenção, termos, política) + avisos + coleta de lixo + **serviços com adesão** (chamadas do síndico, várias abertas ao mesmo tempo, adesão por unidade, exportação para cobrança; primeiros usos: corte de grama da área privativa e desinsetização) + links para apps externos.
4. **Fase 4**: opt-in e envio de avisos gerais via WhatsApp (síndico/admin) — não abrange a ouvidoria.
5. **Fase 5**: primeiras integrações de leitura com ferramentas já contratadas (Auxiliadora Predial, Condfy), conforme disponibilidade de API do fornecedor. Avaliar o envio automático das adesões para cobrança no boleto.

Nas telas, cada fase é desenhada primeiro para o perfil Morador; as funções do síndico entram sobre a mesma base (ver seção 4).

## 11. Interface: Design System e protótipo

- **Design System Recanto Ferrari** (https://claude.ai/artifact/XVqFUtTaue7JzAr29zQtnN): cores, fontes, logotipo, ícones e componentes React (`window.RecantoFerrari`) que todas as telas usam. Terracota é a identidade; azul profundo é acento de apoio (faixa com foto na página inicial, rodapé, ícones informativos). Ícones sempre do Material Icons oficial.
- **Protótipo navegável** (https://claude.ai/artifact/Kk5D5SEBTTDLgKp9c2DhVr): telas do perfil Morador (login, início, ouvidoria, serviços com adesão, adiamento, Minha casa, convite de cadastro, versões de celular), unidades (síndico e administrador do site) e rascunhos de gestão para o perfil síndico.
- **Regra**: DS, telas e esta documentação ficam sempre alinhados. Tudo que for criado numa tela vira componente do DS; mudanças de regra de negócio entram aqui.
- **Convenções visuais já decididas**:
  - Navegação do morador: Início, Ouvidoria, Avisos, Serviços, Documentos; apps externos (Condfy, Auxiliadora Predial) num menu "Apps" no cabeçalho, abrindo em outra aba.
  - Conta da pessoa logada: nome no cabeçalho abre um menu com "Minha casa" (todos), "Unidades" e "Configurações" (gestão e administrador) e "Sair do portal".
  - Dados pessoais: quem não tem permissão vê um aviso no topo da tela explicando a restrição e e-mails mascarados; status de cadastro em badges (Cadastrada, Convite enviado, Convite vencido, Sem convite, Aguardando aprovação) e o badge "Principal".
  - Serviços com adesão: cada card mostra o ícone do tipo de serviço (escolhido pelo síndico); serviços que dependem do tempo mostram o selo amarelo "Se chover, remarcamos"; serviços adiados mostram o selo roxo "Adiado" e um aviso com a nova data.

## 12. Fora do escopo do MVP (considerar depois)

- Aplicativo mobile nativo.
- **Notificações push (avaliadas e descartadas)** — optou-se por manter o WhatsApp como canal único de aviso automático, priorizando alcance garantido (inclusive iPhones sem instalação de PWA) em vez do custo zero do push, dado o baixo volume previsto (1 disparo/mês).
- Enquetes/votações digitais.
- Reserva de áreas comuns (salão de festas, quadra) — hoje é só uma categoria de demanda, não um sistema de reserva.
- Chat em tempo real com a administração.
- Integrações de escrita (sincronização bidirecional) com Auxiliadora Predial/Condfy — ficam para depois de validar as APIs disponíveis com o fornecedor.
