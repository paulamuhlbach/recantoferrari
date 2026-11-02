# Para publicar o portal

Lista do que precisa ser feito quando o portal sair da máquina de desenvolvimento e for para o ar. Vale para a primeira publicação; marque cada item quando estiver pronto. Os testes até agora rodaram com SQLite, o Gmail pessoal e o site em `localhost`, e nada disso vai para a produção.

Atualizada em 01/11/2026.

## 0. Roteiro até a produção (combinado em 31/10/2026)

A ordem definida pela Paula, com as sugestões aceitas para cada etapa.

1. [ ] **Testar bem no computador da Paula** com os dados fictícios completos ([testes-locais.md](testes-locais.md)).
   - Cada problema vai para uma lista única (issue no GitHub ou planilha), com prioridade: **impede o uso** (corrigir antes de publicar), **atrapalha** (corrigir antes do passo 4) ou **ideia** (fica para depois).
   - Testar também num celular de verdade (`npm run dev -- --host`, na mesma rede).
2. [ ] **Fazer os ajustes** da lista (os de "impede o uso" e "atrapalha").
3. [ ] **Publicar a homologação**: um ambiente de testes no servidor, com os mesmos dados fictícios.
   - Dois ambientes, cada um com o seu banco e a sua pasta de arquivos: **homologação** (dados fictícios, para testar sempre) e **produção** (banco novo e vazio). Não se "limpa" a homologação para virar produção, porque fotos, anexos, e-mails e o registro de atividades deixariam restos.
   - Faixa **"Ambiente de testes"** em todas as telas da homologação, ligada por configuração.
   - E-mails da homologação vão **todos para uma caixa de testes** (os endereços `@example.com` não recebem nada, e os e-mails reais dos testadores ficam fora da base).
4. [ ] **Síndico e demais pessoas reais testam** na homologação, com os logins fictícios.
   - Roteiro curto por perfil (adaptado do `testes-locais.md`), formulário simples de retorno e prazo de cerca de duas semanas.
   - Reunião com o síndico e o conselho para fechar o [decisoes-gestao.md](decisoes-gestao.md) vendo o site funcionando.
5. [ ] **Ajustes** depois do uso deles, testados primeiro na homologação.
6. [ ] **Criar a produção**: banco novo e vazio (ver a seção 2), sem nada da homologação. A homologação continua no ar para os próximos testes.
7. [ ] **Site valendo para uso real**: backup automático ligado e uma restauração testada, casas reais importadas de uma planilha, convites em pequenos grupos, comunicado aos moradores com um passo a passo curto e canal para dúvidas nas primeiras semanas, login do Google publicado (seções 2 a 8).
8. [ ] **Fase 4** (WhatsApp), testada primeiro na homologação.

**Adiantar durante os passos 1 e 2** (coisas que demoram e não dependem dos testes):
- [ ] E-mail do condomínio no domínio `recantoferrari.com.br` (que a Paula já tem), com SPF e DKIM no DNS (sem isso, os convites caem no spam).
- [ ] Revisão jurídica do termo de confidencialidade, da política de privacidade e dos termos de uso, e a cláusula de proteção de dados no contrato com a Auxiliadora Predial.
- [x] Escolha da hospedagem: **VPS da Hostinger** (decisão da Paula, 01/11/2026). Ver a seção 1.

**Adiantar durante o passo 4** (para a Fase 4 começar sem espera):
- [ ] Escolher o provedor de WhatsApp, verificar a empresa na Meta e pedir a aprovação dos modelos de mensagem (leva semanas).

**A desenvolver para este roteiro**: ~~faixa "Ambiente de testes" e e-mails para a caixa de testes (passo 3)~~ feito em 01/11/2026 (`AMBIENTE=homologacao` e `EMAIL_CAIXA_TESTES`, ver a seção 3); importação das casas por planilha (passo 7); arquivos de publicação para o provedor escolhido, com homologação e produção separadas.

## 1. Decisões antes de começar

- [x] **Domínio**: `recantoferrari.com.br`, já registrado pela Paula (01/11/2026).
- [ ] **Endereços** (sugestão, a confirmar): produção em `portal.recantoferrari.com.br` e homologação em `testes.recantoferrari.com.br`, cada um com a API no mesmo endereço, em `/api` (sem um subdomínio só para a API e sem CORS). No DNS, os dois apontam para o IP da VPS.
- [x] **Hospedagem** (decisão da Paula, 01/11/2026): **VPS da Hostinger, plano KVM 2** (2 vCPU, 8 GB de RAM, 100 GB NVMe), **servidor no Brasil**, **Ubuntu sem painel**. Na mesma VPS ficam a API, o site, o PostgreSQL e os arquivos, com **dois ambientes separados** (homologação e produção), cada um com o seu banco e a sua pasta de arquivos.
  - Comparadas em 01/11/2026: Render (gerenciada, em dólar, cerca de 2 a 4 vezes mais cara com os dois ambientes), Square Cloud (gerenciada e brasileira, mas nova e focada em bots; os arquivos exigiriam mudar o código), Magalu Cloud (mais trabalhosa de montar) e Locaweb (sem vantagem sobre a Hostinger). A Hostinger compartilhada não roda Python: tem que ser VPS.
  - É autogerenciada: atualizações do sistema, segurança, HTTPS e backups ficam com o responsável técnico. A instalação fica automatizada (Docker, HTTPS automático, backup diário fora da VPS, roteiro de atualização).
  - VPS contratada em 02/11/2026 (acesso só por chave SSH; a senha root e a chave ficam no cofre de senhas da Paula). Roteiro de instalação, atualização, backup e migração: `deploy/README.md` no repositório do backend.
  - **Dá para migrar depois** para uma hospedagem gerenciada sem perder nada: o banco é PostgreSQL padrão (cópia com `pg_dump`), os arquivos ficam numa pasta, as configurações só no `.env`, e o domínio é apontado para o novo endereço. Por isso tudo roda em contêineres desde o começo. Roteiro de migração a escrever junto com a instalação.
- [x] **Banco de dados PostgreSQL**: na própria VPS, um banco por ambiente, com backup diário guardado fora da VPS.
- [x] **Onde ficam os arquivos** (fotos dos pets e do hidrômetro, anexos da ouvidoria, PDFs): na pasta de arquivos de cada ambiente, no disco da VPS (persistente), com backup diário junto do banco.
- [ ] **Serviço de e-mail transacional** com endereço do domínio do condomínio: Brevo (grátis até 300 por dia), Amazon SES ou Resend.
- [x] **Responsável técnico** pela hospedagem, pelas senhas e pelos backups: **a Paula** (01/11/2026). Guardar os acessos num cofre de senhas, não em planilha.

## 2. Banco de dados

- [ ] Criar o banco PostgreSQL e anotar a conexão (`postgresql://usuario:senha@host:5432/banco`).
- [ ] Na API, configurar `DATABASE_URL` com essa conexão.
- [ ] Rodar as migrações: `python -m alembic upgrade head`. Elas já foram testadas em PostgreSQL 16.
- [ ] Criar o primeiro síndico: `python criar_primeiro_sindico.py`.
- [ ] Ligar o backup diário do provedor e testar uma restauração pelo menos uma vez.
- [ ] Não levar o `condominio.db` de desenvolvimento: ele só tem dados de teste.
- [ ] **Nunca rodar `dados_ficticios.py` no banco de produção**: ele cria o condomínio de exemplo e, com `--apagar`, apaga tudo. O script recusa bancos que não sejam SQLite, a menos que se passe `--permitir-outro-banco`.

## 3. Variáveis do `.env` da API (produção)

Nunca subir o `.env` para o Git. No PaaS, as variáveis são preenchidas no painel do serviço.

| Variável | Em produção |
|---|---|
| `DATABASE_URL` | Conexão do PostgreSQL |
| `SECRET_KEY` | Chave nova e aleatória, diferente da de desenvolvimento: `python -c "import secrets; print(secrets.token_urlsafe(48))"`. Trocar essa chave desconecta todo mundo. |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | 480 (8 horas), ou o que a gestão decidir |
| `CORS_ORIGINS` | Endereço público do site, ex.: `https://portal.recantoferrari.com.br` |
| `SITE_URL` | Mesmo endereço do site. É usado nos links dos e-mails (convite, criar acesso). |
| `EMAIL_MODO` | `smtp` |
| `SMTP_HOST`, `SMTP_PORTA`, `SMTP_SEGURANCA`, `SMTP_USUARIO`, `SMTP_SENHA` | Dados do serviço de e-mail transacional (não o Gmail pessoal) |
| `EMAIL_REMETENTE` | Ex.: `nao-responda@recantoferrari.com.br` |
| `EMAIL_REMETENTE_NOME` | Condomínio Recanto Ferrari |
| `EMAIL_RESPONDER_PARA` | E-mail da administração, se as respostas devem ir para alguém |
| `GOOGLE_CLIENT_ID` | O mesmo ID do cliente já criado (ver item 5) |
| `PASTA_ARQUIVOS` | Caminho do disco persistente (ou trocar pelo bucket) |
| `AMBIENTE` | `producao` na produção e `homologacao` na homologação (faixa "Ambiente de testes" em todas as telas, com o texto de `ambiente.faixa_texto`) |
| `EMAIL_CAIXA_TESTES` | Só na homologação: a caixa que recebe todos os e-mails (ex.: `testes@recantoferrari.com.br`). Sem ela, os e-mails da homologação não saem. |
| `CONFIAR_NO_PROXY` | `true` quando a API estiver atrás de proxy (o normal em PaaS), para o registro de atividades gravar o IP real de quem acessou |

## 4. E-mail

- [ ] Criar a conta no serviço escolhido e validar o domínio.
- [ ] Colocar no DNS do domínio os registros que o serviço pedir (**SPF**, **DKIM** e, de preferência, **DMARC**). Sem eles, os convites caem no spam.
- [ ] Preencher as variáveis `SMTP_*` e `EMAIL_REMETENTE` na API.
- [ ] Testar no servidor: `python -m app.emails seu@email.com`.
- [ ] Mandar um convite de verdade e conferir se o link abre o site público (não `localhost`).
- [ ] Apagar a senha de app do Gmail usada nos testes (myaccount.google.com/apppasswords).

## 5. Login com Google

O projeto "Recanto Ferrari" no Google Cloud e o ID do cliente foram criados em 19/10/2026, para testes.

- [ ] Em **Google Auth Platform → Clientes**, abrir o cliente e adicionar o endereço público do site em **Origens JavaScript autorizadas** (ex.: `https://portal.recantoferrari.com.br`). As origens `localhost` podem continuar para desenvolvimento.
- [ ] Em **Google Auth Platform → Branding**, conferir o nome do app, o logo, o e-mail de suporte e os links da página inicial e da política de privacidade do portal.
- [ ] Em **Público**, clicar em **Publicar app**. Enquanto ele estiver "Em teste", só entram os e-mails da lista de usuários de teste. O portal só pede nome, e-mail e foto, então o Google não exige verificação.
- [ ] Opcional: trocar o dono do projeto no Google Cloud para uma conta do condomínio, mantendo a Paula como administradora.

## 6. Site

- [ ] Criar o `.env.production` a partir do `.env.example` e preencher `VITE_API_URL` com o endereço público da API.
- [ ] Gerar a versão: `npm run build`. O resultado fica em `dist/`.
- [ ] Publicar a pasta `dist/` e configurar a hospedagem para devolver `index.html` em qualquer caminho.
- [ ] Conferir o HTTPS no site e na API.

## 7. Conteúdo, regras e LGPD

- [ ] **Termo de confidencialidade**: revisar o texto com o jurídico e salvar nas configurações (`termo_confidencialidade.texto`). Mudar o texto depois pede nova assinatura de todos.
- [ ] **Política de privacidade** e termos de uso: texto final revisado, publicado e com link no portal e no Google.
- [ ] **Contrato com a Auxiliadora Predial**: cláusula de proteção de dados, com ela como operadora.
- [ ] Revisar os textos padrão dos e-mails e os prazos nas configurações (validade do convite, prazo da leitura do hidrômetro, forma de cálculo da água, prazo para aderir aos serviços, texto da autorização de cobrança, prazo de guarda do registro de atividades).
- [ ] Confirmar com a gestão as decisões que ainda estão em aberto: [decisoes-gestao.md](decisoes-gestao.md).

## 8. Primeiros passos no ar

- [ ] Entrar como síndico, assinar o que for preciso e conferir as configurações.
- [ ] Cadastrar as unidades (ou importar a lista) e enviar os convites em pequenos grupos, para acompanhar se os e-mails chegam.
- [ ] Atribuir os cargos da gestão e o papel de administrador do site.
- [ ] Combinar com a gestão um canal para dúvidas dos moradores nas primeiras semanas.

## 9. Depois de publicado

- [ ] Acompanhar os e-mails com falha (tabela `emails_enviados`).
- [ ] Conferir o backup do banco e das fotos uma vez por mês.
- [ ] A cada nova versão: `git pull` no servidor (ou deploy automático), `python -m pip install -r requirements.txt`, `python -m alembic upgrade head` e um novo `npm run build` do site.
