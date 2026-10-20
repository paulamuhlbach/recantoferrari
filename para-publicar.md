# Para publicar o portal

Lista do que precisa ser feito quando o portal sair da máquina de desenvolvimento e for para o ar. Vale para a primeira publicação; marque cada item quando estiver pronto. Os testes até agora rodaram com SQLite, o Gmail pessoal e o site em `localhost`, e nada disso vai para a produção.

Atualizada em 19/10/2026.

## 1. Decisões antes de começar

- [ ] **Domínio e endereços.** Exemplo: `portal.recantoferrari.com.br` para o site e `api.recantoferrari.com.br` para a API. Quem registra e paga o domínio, e quem cuida do DNS.
- [ ] **Hospedagem da API** (Python/FastAPI): PaaS de baixo custo (Render, Railway) ou um VPS simples. Precisa de HTTPS.
- [ ] **Hospedagem do site** (arquivos estáticos da pasta `dist/`): Render Static Site, Cloudflare Pages, Netlify ou GitHub Pages. Tem que devolver `index.html` em qualquer caminho, porque o site usa rotas como `/entrar` e `/convite/...`.
- [ ] **Banco de dados PostgreSQL**, de preferência o do próprio provedor da API, com backup automático.
- [ ] **Onde ficam as fotos** (pets e, depois, hidrômetro). Hoje elas ficam na pasta `arquivos/` do servidor. Em PaaS, o disco costuma ser apagado a cada nova versão, então é preciso um **disco persistente** ou um **bucket privado** compatível com S3. O bucket exige uma pequena mudança no código, que deve ser feita antes da publicação.
- [ ] **Serviço de e-mail transacional** com endereço do domínio do condomínio: Brevo (grátis até 300 por dia), Amazon SES ou Resend.
- [ ] **Quem será o responsável técnico** pela hospedagem, pelas senhas e pelos backups. Guardar os acessos num cofre de senhas, não em planilha.

## 2. Banco de dados

- [ ] Criar o banco PostgreSQL e anotar a conexão (`postgresql://usuario:senha@host:5432/banco`).
- [ ] Na API, configurar `DATABASE_URL` com essa conexão.
- [ ] Rodar as migrações: `python -m alembic upgrade head`. Elas já foram testadas em PostgreSQL 16.
- [ ] Criar o primeiro síndico: `python criar_primeiro_sindico.py`.
- [ ] Ligar o backup diário do provedor e testar uma restauração pelo menos uma vez.
- [ ] Não levar o `condominio.db` de desenvolvimento: ele só tem dados de teste.

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
- [ ] Revisar os textos padrão dos e-mails e os prazos nas configurações (validade do convite, prazo da leitura do hidrômetro, prazo de guarda do registro de atividades).
- [ ] Confirmar com a gestão as decisões que ainda estão em aberto (ver as notas de andamento).

## 8. Primeiros passos no ar

- [ ] Entrar como síndico, assinar o que for preciso e conferir as configurações.
- [ ] Cadastrar as unidades (ou importar a lista) e enviar os convites em pequenos grupos, para acompanhar se os e-mails chegam.
- [ ] Atribuir os cargos da gestão e o papel de administrador do site.
- [ ] Combinar com a gestão um canal para dúvidas dos moradores nas primeiras semanas.

## 9. Depois de publicado

- [ ] Acompanhar os e-mails com falha (tabela `emails_enviados`).
- [ ] Conferir o backup do banco e das fotos uma vez por mês.
- [ ] A cada nova versão: `git pull` no servidor (ou deploy automático), `python -m pip install -r requirements.txt`, `python -m alembic upgrade head` e um novo `npm run build` do site.
