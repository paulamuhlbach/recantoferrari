# Personas do Portal do Condomínio Recanto Ferrari

Quem usa o portal, o que precisa fazer nele e o que isso pede das telas. As personas são **fictícias**: nomes, idades e histórias foram inventados para representar os perfis definidos em [arquitetura-mvp.md](arquitetura-mvp.md) (seção 4, "Perfis de usuário e permissões"). Servem para desenhar e revisar telas, escrever textos e decidir prioridades.

Atualizado em 18/10/2026. Avatares ilustrados (originais, de pessoas fictícias) em [assets/personas/](assets/personas/).

## Resumo

| | Persona | Perfil no portal | Aparelho principal | Familiaridade digital | Em uma frase |
| --- | --- | --- | --- | --- | --- |
| <img src="assets/personas/renata.svg" alt="Avatar de Renata Lopes" width="48"> | Renata Lopes, 46 | Morador · perfil principal (proprietária) | Celular | Alta | "Quero resolver as coisas da casa em dois minutos, entre uma reunião e outra." |
| <img src="assets/personas/antonio.svg" alt="Avatar de Seu Antônio Prado" width="48"> | Seu Antônio Prado, 74 | Morador · perfil principal (proprietário) | Computador de mesa e tablet | Baixa | "Se eu não entender a tela, eu ligo para o síndico." |
| <img src="assets/personas/lucas.svg" alt="Avatar de Lucas Lopes" width="48"> | Lucas Lopes, 21 | Morador (filho, só os serviços) | Celular | Alta | "Só entro quando alguém me pede para mandar a foto do relógio da água." |
| <img src="assets/personas/camila.svg" alt="Avatar de Camila Duarte" width="48"> | Camila Duarte, 33 | Morador · perfil principal (locatária recém-chegada) | Celular | Média | "Acabei de me mudar e não sei como as coisas funcionam aqui." |
| <img src="assets/personas/carlos.svg" alt="Avatar de Carlos Menezes" width="48"> | Carlos Menezes, 58 | Gestão · síndico (e administrador do site) | Computador e celular | Média | "Sou voluntário. Preciso que o portal me poupe tempo, não que me dê trabalho." |
| <img src="assets/personas/sueli.svg" alt="Avatar de Sueli Ramos" width="48"> | Sueli Ramos, 51 | Gestão · subsíndica | Celular | Média | "Quando o Carlos viaja, sou eu que respondo." |
| <img src="assets/personas/helena.svg" alt="Avatar de Helena Barros" width="48"> | Helena Barros, 66 | Gestão · presidente do conselho | Computador e celular | Média | "O conselho responde aos moradores. Preciso ver o que o síndico vê para fiscalizar de verdade." |
| <img src="assets/personas/otavio.svg" alt="Avatar de Otávio Lima" width="48"> | Otávio Lima, 63 | Gestão · membro do conselho | Computador | Média | "Quero acompanhar se a gestão está funcionando, sem me meter na vida dos vizinhos." |
| <img src="assets/personas/fernanda.svg" alt="Avatar de Fernanda Costa" width="48"> | Fernanda Costa, 38 | Gestão · administradora condominial (não moradora) | Computador do escritório | Alta | "Cuido de vinte condomínios. Preciso dos dados certos, rápido, e de registro de tudo." |
| <img src="assets/personas/marcos.svg" alt="Avatar de Marcos Teixeira" width="48"> | Marcos Teixeira, 41 | Administrador do site (com o termo de confidencialidade) | Computador | Muito alta | "Tenho acesso a tudo, então assinei o termo de confidencialidade. Sigilo é parte do trabalho." |

Os papéis se somam: Carlos é morador, síndico e administrador do site ao mesmo tempo; Marcos é morador e administrador do site. Só a Fernanda não é moradora.

**Quem vê tudo (decisão de 18/10/2026):** o síndico, o administrador do site que assinou o termo de confidencialidade (com os mesmos poderes do síndico) e a presidente do conselho, que tem a mesma visão do síndico e do subsíndico sem assinar termo (decisão de 28/10/2026; vê tudo, sem os poderes de aprovar, atribuir cargos e configurar). Os demais membros do conselho continuam vendo as denúncias só em números e o registro de atividades sem nomes.

---

## Moradores

### Renata Lopes, 46 · perfil principal da casa

<img src="assets/personas/renata.svg" alt="Avatar de Renata Lopes" width="120">

**Quem é.** Proprietária, mora com o marido e dois filhos (um deles é o Lucas). Gerente numa empresa de logística, passa o dia em reuniões. Resolve tudo pelo celular, no intervalo ou à noite.

**O que faz no portal.**
- Cadastrou a casa pelo convite e indicou o marido e os filhos, com o parentesco.
- Escolhe quem vê a parte financeira: o marido vê, os filhos só os serviços.
- Adere ao corte de grama e à desinsetização quando abrem as ofertas de serviço.
- Envia a leitura do hidrômetro quando ninguém mais da casa enviou.
- Cadastra os pets (o cachorro já fugiu uma vez).
- Abre o registro de atividades dos moradores da casa quando quer saber quem aderiu a um serviço ou mandou a leitura.

**O que ela quer.** Fazer em poucos toques, sem esquecer prazos. Saber o que já foi feito por alguém da casa, para não fazer duas vezes.

**O que a incomoda.** E-mail demais. Telas que pedem a mesma informação de novo. Descobrir uma cobrança no boleto sem ter percebido que aderiu.

**O que isso pede das telas.**
- "Precisa da sua resposta" no Início, com prazo e valor visíveis sem abrir nada.
- Mostrar quem da casa já respondeu e quando (adesão, leitura).
- Confirmar a autorização de cobrança antes de aderir.
- Tudo funcionando bem a partir de 360 px de largura.

### Seu Antônio Prado, 74 · perfil principal da casa

<img src="assets/personas/antonio.svg" alt="Avatar de Seu Antônio Prado" width="120">

**Quem é.** Aposentado, mora com a esposa há 20 anos no condomínio. Usa o computador da sala com a letra grande e um tablet que ganhou dos netos. Lê tudo com calma, mas tem medo de "apertar o botão errado".

**O que faz no portal.**
- Lê avisos, coleta de lixo e o regimento.
- Envia demandas à ouvidoria, sempre com o nome dele.
- Envia a leitura do hidrômetro, às vezes com a ajuda da neta pelo telefone.
- Indicou a esposa como moradora.

**O que ele quer.** Entender o que cada botão faz antes de clicar. Ter certeza de que a mensagem chegou.

**O que o incomoda.** Ícones sem texto. Prazos que somem. Mensagens de erro técnicas. Ser desconectado no meio de um formulário.

**O que isso pede das telas.**
- Botões com verbo e o que acontece ("Enviar leitura", "Cancelar adesão"); ícone sozinho só com dica no mouseover e no foco.
- Texto grande (`body-large`, 18 px), alvos de toque de 44 px, contraste alto.
- Confirmação clara depois de cada envio, com o que foi enviado e o e-mail de confirmação.
- Mensagens de erro que dizem como resolver, sem jargão.
- Diálogo de confirmação antes de ações que não voltam (remover morador, cancelar adesão).

### Lucas Lopes, 21 · morador (só os serviços)

<img src="assets/personas/lucas.svg" alt="Avatar de Lucas Lopes" width="120">

**Quem é.** Filho da Renata, universitário. Indicado pela mãe, aprovado pelo síndico, criou o acesso pelo link do e-mail. Entra pouco.

**O que faz no portal.**
- Manda a foto e a leitura do hidrômetro quando a mãe pede.
- Vê os serviços oferecidos, sem valores (acesso "Só os serviços").
- Às vezes manda uma sugestão para a ouvidoria, sem identificação.

**O que ele quer.** Entrar, fazer e sair. Login com Google.

**O que o incomoda.** Esquecer a senha. Telas longas.

**O que isso pede das telas.**
- Envio da leitura com a câmera abrindo direto no celular e teclado numérico.
- Não mostrar valores e cobranças a quem tem só os serviços (vale na API, não só na tela).
- Demanda sem identificação realmente anônima: sem registro de atividade, sem IP.

### Camila Duarte, 33 · locatária recém-chegada

<img src="assets/personas/camila.svg" alt="Avatar de Camila Duarte" width="120">

**Quem é.** Mudou-se há duas semanas com a companheira. O contrato de locação foi feito pela imobiliária; o síndico mandou o convite para o e-mail dela. Nunca morou em condomínio com portal.

**O que faz no portal.**
- Aceitou o convite, fez o cadastro e virou o perfil principal da casa.
- Indicou a companheira e cadastrou a gata.
- Procura o regimento (horário de obras, mudança, lixo).

**O que ela quer.** Entender as regras e saber com quem falar. Não fazer nada errado nas primeiras semanas.

**O que a incomoda.** Termos que só os antigos entendem ("perfil principal", "adesão"). Não saber se o cadastro "pegou".

**O que isso pede das telas.**
- Convite que explica o que é ser o perfil principal antes de pedir os dados.
- Situação de cada pessoa da casa sempre visível ("Aguardando aprovação", "Aguardando criar o acesso", "Ativo").
- Quando ela sair do condomínio, o cadastro fica inativo, com o histórico guardado; se voltar a morar aqui, o mesmo e-mail pode ser convidado de novo.

---

## Gestão do condomínio

### Carlos Menezes, 58 · síndico (e administrador do site)

<img src="assets/personas/carlos.svg" alt="Avatar de Carlos Menezes" width="120">

**Quem é.** Engenheiro, síndico voluntário pelo segundo mandato. Usa o computador à noite para as tarefas maiores e o celular para aprovar e responder no dia a dia. Também cuida do funcionamento do portal até alguém assumir.

**O que faz no portal.**
- Cadastra as casas e envia os convites.
- Aprova ou recusa os moradores indicados.
- Troca o perfil principal quando a casa é vendida ou o principal some, e registra se ele saiu da casa.
- Responde demandas da ouvidoria e lê denúncias.
- Abre ofertas de serviço, registra adiamentos por chuva e exporta as adesões para o boleto.
- Confere as leituras do hidrômetro e calcula a água.
- Atribui cargos e o papel de administrador do site; passa o cargo de síndico no fim do mandato.
- Consulta o registro de atividades e os ex-moradores de cada casa; define o prazo de guarda do registro.

**O que ele quer.** Ver o que está pendente num lugar só. Fazer as tarefas repetitivas rápido. Ter registro de quem fez o quê, para responder a questionamentos em assembleia.

**O que o incomoda.** Ser o "suporte técnico" dos vizinhos. Decisões presas no código ("isso não dá para mudar").

**O que isso pede das telas.**
- Filas claras com contagem (indicações aguardando, demandas novas, leituras faltando).
- Regras configuráveis (prazos, textos dos e-mails, tipos de serviço), com padrão sugerido.
- Ações em ícone nas tabelas, com dica; tabelas densas nas telas administrativas.
- Registro de atividades com nome, data, hora e IP; ex-moradores com entrada, saída e motivo.

### Sueli Ramos, 51 · subsíndica

<img src="assets/personas/sueli.svg" alt="Avatar de Sueli Ramos" width="120">

**Quem é.** Professora, mora no condomínio há oito anos. Substitui o síndico nas férias e divide com ele a ouvidoria. Usa principalmente o celular.

**O que faz no portal.**
- Lê e responde demandas, inclusive denúncias.
- Acompanha os serviços e os avisos.
- Vê o registro de atividades com nomes e pode mudar o prazo de guarda.

**O que ela quer.** Pegar uma demanda do ponto em que o síndico parou, sabendo o que já foi respondido.

**O que a incomoda.** Não saber se o síndico já leu ou respondeu.

**O que isso pede das telas.**
- Histórico da demanda com quem leu, respondeu e quando.
- Mesmas telas da gestão funcionando bem no celular.

### Helena Barros, 66 · presidente do conselho

<img src="assets/personas/helena.svg" alt="Avatar de Helena Barros" width="120">

**Quem é.** Advogada aposentada, mora no condomínio há 15 anos e preside o conselho. Conduz as reuniões do conselho e responde aos moradores pela fiscalização da gestão. Usa o computador para ler com calma e o celular para acompanhar.

**O que faz no portal.**
- Vê tudo, como o síndico e o subsíndico, desde o primeiro acesso, **sem assinar termo** (decisão de 28/10/2026): dados dos moradores, composição das casas, ex-moradores e pets.
- Lê as denúncias com o conteúdo e quem denunciou, e pode responder, como o síndico e o subsíndico.
- Vê o registro de atividades com nomes, para conferir quem fez o quê, e a tela de Pessoas com todos os cadastros.
- **Não** aprova moradores, **não** atribui cargos e **não** muda configurações: isso fica com o síndico e com o administrador do site.

**O que ela quer.** Fiscalizar com informação completa e levar fatos às reuniões do conselho.

**O que a incomoda.** Ter de pedir ao síndico um dado que o conselho precisa conferir. Decisões sem registro.

**O que isso pede das telas.**
- As mesmas telas da gestão, com os dados completos.
- Histórico e registro de atividades fáceis de filtrar por pessoa e por tipo.
- Deixar claro, nas ações que ela não pode fazer, quem pode.

### Otávio Lima, 63 · membro do conselho

<img src="assets/personas/otavio.svg" alt="Avatar de Otávio Lima" width="120">

**Quem é.** Contador aposentado, membro do conselho (a presidente é a Helena). Confere contas e acompanha a gestão. Prefere o computador e relatórios.

**O que faz no portal.**
- Vê as estatísticas das denúncias (quantidade, categoria, andamento, tempo de resposta), sem o conteúdo nem quem denunciou.
- Vê o registro de atividades **sem identificar as pessoas**: um código no lugar do nome ("Pessoa 3fa2c1d0"), sem casa, e-mail, motivo ou IP.
- Acompanha demandas, serviços e avisos como a gestão.

**O que ele quer.** Saber se as demandas estão sendo respondidas e se as regras estão sendo seguidas, com números.

**O que o incomoda.** Dados pela metade sem explicação. Ser exposto a informações pessoais que ele não deveria ver.

**O que isso pede das telas.**
- Um aviso no topo explicando o que ele vê e por quê, em vez de colunas que somem sem aviso.
- Filtro pelo código da pessoa, para acompanhar um caso sem saber quem é.

### Fernanda Costa, 38 · administradora condominial

<img src="assets/personas/fernanda.svg" alt="Avatar de Fernanda Costa" width="120">

**Quem é.** Analista da empresa de administração contratada pelo condomínio. **Não mora no condomínio.** Atende vários condomínios do escritório, no computador, em horário comercial.

**O que faz no portal.**
- Lança a água e as adesões no boleto a partir das exportações.
- Lê e responde denúncias e marca "Em avaliação jurídica" quando precisa acionar o jurídico.
- Vê os dados dos moradores para cobranças e notificações.
- Aprova moradores indicados e troca o perfil principal só se a configuração permitir.
- Vê o registro de atividades com nomes.

**O que ela quer.** Encontrar o dado certo sem pedir ao síndico. Exportar no formato que o sistema da empresa aceita.

**O que a incomoda.** Perder o acesso sem aviso. Telas pensadas para morador.

**O que isso pede das telas.**
- Entrar direto nas ferramentas de gestão, sem "Minha casa" nem os cards de morador.
- O nome aparece com a empresa ("Fernanda · Administradora").
- Acesso ligado ao contrato, com aviso ao síndico antes do vencimento; o histórico fica quando o acesso termina.

---

## Funcionamento do site

### Marcos Teixeira, 41 · administrador do site

<img src="assets/personas/marcos.svg" alt="Avatar de Marcos Teixeira" width="120">

**Quem é.** Desenvolvedor de software, morador. Ofereceu-se para cuidar do portal: conteúdo institucional, categorias da ouvidoria, configurações gerais, e-mail e integrações.

**Decisão de 18/10/2026 (pedido do síndico):** o administrador do site tem os mesmos poderes do síndico, depois de **assinar o termo de confidencialidade** no portal (lê o termo, confirma e digita o nome completo; ficam guardados o texto assinado, o nome, a data e o IP). Se o síndico mudar o texto do termo, é preciso assinar de novo.

**O que faz no portal.**
- Antes de assinar o termo: cadastra casas e envia convites (vê o e-mail mascarado: `pa•••@gmail.com`), publica o conteúdo institucional, ajusta as configurações do site e vê o registro de atividades sem nomes. Um aviso no Início pede a assinatura.
- Depois de assinar: vê e usa tudo, como o síndico. Dados dos moradores, denúncias, registro de atividades com nomes, aprovação de moradores, troca do perfil principal, cargos e todas as configurações.
- Como morador, vê a própria casa normalmente.

**O que ele quer.** Manter o portal funcionando e resolver os pedidos da gestão sem depender do síndico para cada ajuste.

**O que o incomoda.** Ficar sem saber o que pode ou não pode fazer. Assinar algo sem entender.

**O que isso pede das telas.**
- Termo em linguagem simples, numa tela só, com a assinatura no fim.
- Enquanto não assina, as telas explicam a restrição e levam ao termo.
- Depois de assinar, a data da assinatura sempre consultável no menu da conta.

---

## Quem não usa o portal, mas é afetado por ele

- **Ex-moradores.** Quem saiu da casa fica com o cadastro inativo: não entra mais, mas a moradia (entrada, saída, motivo) e o registro de atividades ficam guardados para a gestão. Pode voltar a ser convidado.
- **Indicados que não chegaram a morar.** Indicação cancelada ou recusada: o cadastro fica como "removido", sem aparecer entre os ex-moradores.
- **Prestadores de serviço** (corte de grama, desinsetização). Recebem a lista de casas exportada pelo síndico, fora do portal.
- **Visitantes, corretores e imobiliárias.** Não têm acesso. O portal é exclusivo de quem foi convidado ou aprovado.

## Princípios que saem das personas

1. **Primeiro o morador.** As telas são desenhadas para o morador; as funções da gestão entram sobre essa base, no mesmo portal.
2. **Celular primeiro, sem esquecer o computador.** Renata, Lucas, Camila e Sueli usam o celular; Seu Antônio, Helena, Otávio e Fernanda, o computador.
3. **Clareza para todas as idades.** Textos simples, verbos nos botões, letra grande, confirmação depois de cada envio. Se o Seu Antônio entende, todos entendem.
4. **A casa responde uma vez.** Adesão e leitura são da unidade: a tela mostra quem da casa já respondeu.
5. **Cada um vê só o que precisa.** Dados pessoais só para quem tem permissão, com a regra aplicada na API. Quando algo fica oculto, a tela explica.
6. **Tudo fica registrado.** Quem fez o quê e quando, para a gestão prestar contas; com prazo de guarda configurável (padrão 5 anos) e sem quebrar o anonimato das demandas sem identificação.
7. **Nada fixo no código.** Prazos, textos e regras ficam nas configurações, com padrão sugerido.

## Como usar este documento

- Ao desenhar uma tela, escolha a persona principal e uma secundária e confira a seção "O que isso pede das telas" das duas.
- Ao escrever um texto, leia como o Seu Antônio e a Camila leriam.
- Ao decidir quem vê um dado, confira o perfil na seção 4 de [arquitetura-mvp.md](arquitetura-mvp.md) e as personas da gestão.
- Mudou um perfil ou uma permissão? Atualize as duas coisas juntas.
