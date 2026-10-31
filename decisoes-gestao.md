# Decisões para a reunião com o síndico e o Conselho

Lista dos pontos que ainda precisam de uma decisão da gestão do condomínio. Para cada um, está como o portal funciona **hoje**, a **proposta** e um espaço para anotar a decisão.

Atualizada em 31/10/2026.

**Como usar**
- Marque o item com `[x]` quando ele for decidido e anote a decisão e a data na linha "Decisão".
- Muitas regras já são **configuráveis** no portal (marcadas com ⚙️). Nesses casos, decidir é só escolher o valor, sem mexer no código.
- Itens com 🔧 precisam de uma mudança no código se a decisão for diferente da proposta.
- Depois da reunião, as decisões entram na documentação (`arquitetura-mvp.md`) e saem desta lista.

---

## 1. Privacidade: quem vê o quê

- [ ] **O Conselho vê os dados pessoais em Unidades e em Pessoas?** 🔧
  - Hoje: os membros do conselho fazem parte da gestão e veem as casas e os moradores. No registro de atividades, eles já veem sem identificar as pessoas.
  - Proposta: decidir se o Conselho vê nomes, contatos e moradores das casas, ou só números e situações, como no registro.
  - Decisão:

- [ ] **Denúncias para o Conselho: só números, ou o texto sem identificar quem fez?** ⚙️🔧
  - Hoje: os membros do conselho veem só estatísticas, por categoria e andamento, sem texto, anexos, casa ou nome. Leem e respondem as denúncias o síndico, o subsíndico, o presidente do conselho e a administradora (o presidente sem precisar do termo, decisão de 28/10/2026).
  - Proposta: manter só as estatísticas. Mostrar o texto "anonimizado" é arriscado, porque o próprio texto costuma identificar a casa.
  - Decisão:

- [ ] **O perfil principal da casa vê os ex-moradores da casa?** 🔧
  - Hoje: só a gestão vê os ex-moradores.
  - Proposta: o principal vê nome e período de quem já morou na casa, sem contatos.
  - Decisão:

- [ ] **Texto do termo de confidencialidade** ⚙️
  - Hoje: texto provisório. Assinam o termo o administrador do site e a administradora do condomínio. O síndico e o presidente do conselho não assinam.
  - Proposta: revisar com o jurídico antes de publicar o portal. Mudar o texto depois pede nova assinatura de todos.
  - Decisão:

- [ ] **Política de privacidade e termos de uso**
  - Hoje: ainda não há texto final.
  - Proposta: texto revisado pelo jurídico, publicado no portal e com link no login do Google.
  - Decisão:

- [ ] **Prazo de guarda do registro de atividades** ⚙️
  - Hoje: 5 anos (pode ser de 1 a 20).
  - Decisão:

## 2. Cadastro dos moradores

- [ ] **Quem aprova os moradores indicados quando o síndico não está?** ⚙️
  - Hoje: só o síndico. Há uma opção para a administradora aprovar também.
  - Proposta: manter só o síndico como padrão, com a opção de incluir o subsíndico e a administradora.
  - Decisão:

- [ ] **O perfil principal saiu da casa sem passar a função para outro morador** 🔧
  - Hoje: a gestão troca o principal pela tela da casa.
  - Proposta: o síndico define o novo principal.
  - Decisão:

- [ ] **Quem recebe os avisos de troca do principal e de saída de morador?** 🔧
  - Hoje: só o síndico.
  - Proposta: manter só o síndico, ou incluir o subsíndico e a administradora.
  - Decisão:

- [ ] **Parentesco quando o principal muda** 🔧
  - Hoje: o parentesco de cada morador é apagado, para o novo principal informar o parentesco em relação a ele.
  - Decisão:

## 3. Parte financeira de cada casa

- [ ] **Quem é indicado começa vendo a parte financeira?** ⚙️
  - Hoje: não. O morador indicado começa com "Só os serviços", sem valores e cobranças. O principal muda para cada pessoa.
  - Decisão:

- [ ] **Quem passa a função de principal continua vendo a parte financeira?** 🔧
  - Hoje: sim. O novo principal pode tirar esse acesso depois.
  - Decisão:

## 4. Administradora do condomínio (Auxiliadora Predial)

- [ ] **Cláusula de proteção de dados no contrato com a Auxiliadora**
  - Proposta: incluir no contrato uma cláusula da LGPD, com a Auxiliadora como operadora dos dados dos moradores.
  - Decisão:

- [ ] **A administradora pode trocar o perfil principal de uma casa?** ⚙️
  - Hoje: não, só o síndico.
  - Decisão:

- [ ] **Com quantos dias de antecedência o síndico é avisado do fim do contrato?** ⚙️
  - Hoje: 30 dias.
  - Decisão:

## 5. Senha e entrada no portal

- [ ] **Por quanto tempo vale o link de "Esqueci a senha"?** ⚙️
  - Hoje: 60 minutos (pode ser de 15 minutos a 24 horas).
  - Decisão:

- [ ] **Trocar a senha desconecta o portal nos outros aparelhos?** ⚙️
  - Hoje: sim. Assim, se alguém descobriu a senha, perde o acesso quando a pessoa cria uma senha nova.
  - Decisão:

- [ ] **Quem ainda não criou o acesso e usa "Esqueci a senha"** 🔧
  - Hoje: recebe um link novo para criar o acesso, sem precisar pedir ao síndico. Isso vale só para quem já foi aprovado.
  - Decisão:

- [ ] **Por quanto tempo a pessoa fica conectada sem precisar entrar de novo?**
  - Hoje: 8 horas.
  - Decisão:

## 6. Leitura do hidrômetro e cálculo da água

O envio, a conferência e o cálculo já funcionam (31/10/2026). Falta a gestão confirmar os valores.

- [ ] **Prazo de envio da leitura** ⚙️
  - Hoje: até o dia 10 de cada mês. Depois do prazo, o portal aceita a leitura marcada como "enviada com atraso", e quem calcula decide se ela entra no boleto.
  - Proposta: manter.
  - Decisão:

- [ ] **Onde fica a leitura do hidrômetro no portal**
  - Hoje: no menu da conta ("Leitura do hidrômetro") e num cartão em "Precisa da sua resposta", no Início, enquanto a casa não envia. Não está na navegação principal.
  - Proposta: manter.
  - Decisão:

- [ ] **Quando o consumo é "fora do padrão"** ⚙️
  - Hoje: quando passa de 3 vezes a média da casa nos últimos 6 meses.
  - Proposta: manter.
  - Decisão:

- [ ] **Quem recebe o e-mail de cada leitura, quem confere e quem calcula a água** ⚙️
  - Hoje: o e-mail vai para o síndico. Conferem as leituras e calculam a água o síndico e a administradora do condomínio. O conselho vê o painel, sem conferir.
  - Proposta: manter. Se o subsíndico for ajudar, basta incluí-lo nas configurações.
  - Decisão:

- [ ] **Forma de cálculo da água** ⚙️
  - Hoje: a sugestão é o valor do m³ vezes o consumo de cada casa. A outra forma é o rateio da conta da concessionária pelo consumo de cada casa. Quem calcula escolhe a cada mês.
  - Proposta: definir com a administradora qual forma o condomínio usa hoje no boleto.
  - Decisão:

- [ ] **Casas que não enviaram a leitura** ⚙️
  - Hoje: cobradas pela média dos últimos 3 meses da casa; sem histórico, pela média do condomínio no mês. A outra opção é não cobrar no mês. A primeira leitura de uma casa é cobrada pela média do condomínio (decisão da Paula, 31/10/2026).
  - Proposta: manter a média.
  - Decisão:

## 7. Serviços com adesão

- [ ] **Quem abre e gerencia as ofertas de serviço** ⚙️
  - Hoje: só o síndico.
  - Proposta: manter. Outros cargos (ex.: subsíndico) podem entrar nas configurações.
  - Decisão:

- [ ] **Prazo para aderir** ⚙️
  - Hoje: o portal sugere 2 dias antes da data do serviço, e o síndico muda a cada oferta.
  - Proposta: manter.
  - Decisão:

- [ ] **Quem da casa pode aderir** 🔧
  - Hoje: o perfil principal e quem ele liberou com acesso financeiro, porque a adesão gera cobrança no boleto. Os demais moradores veem a oferta e quem aderiu.
  - Proposta: manter.
  - Decisão:

- [ ] **Texto da autorização de cobrança** ⚙️
  - Hoje: "Autorizo a cobrança de {valor} no boleto do condomínio de {mes} da Casa {casa}.", que a pessoa marca antes de aderir.
  - Proposta: revisar com a administradora.
  - Decisão:

## 8. Página inicial e coleta de lixo

- [ ] **O que cada perfil vê primeiro no Início** ⚙️
  - Hoje: para o síndico, "Para a gestão" (ouvidoria, denúncias, publicar aviso, serviços e leituras) vem no alto, acima dos avisos (pedido da Paula, 30/10/2026). Para os demais, os avisos vêm primeiro; em seguida, "Precisa da sua resposta" (ofertas de serviço não respondidas e a leitura do hidrômetro); para a gestão e a administradora, "Para a gestão"; depois "Para você" (enviar demanda, minhas demandas, regras). A coleta de lixo fica por último.
  - Proposta: manter. A ordem de cada perfil se muda nas configurações, sem mexer no código.
  - Decisão:

- [ ] **Ecoponto indicado aos moradores** ⚙️
  - Hoje: Ecoponto Niterói (Rua Paulo Fonteles, 1560), com o mapa no Início. Ele não recebe pilhas, baterias e lâmpadas; o texto orienta a levar esses itens aos pontos de coleta de lojas e supermercados.
  - Proposta: manter e conferir os dias da coleta de lixo do condomínio (ainda não informados no portal).
  - Decisão:

## 9. Para publicar o portal

Detalhes no [para-publicar.md](para-publicar.md).

- [ ] **Domínio** (ex.: `portal.recantoferrari.com.br`): quem registra e paga.
- [ ] **Hospedagem e e-mail do condomínio**: provedor e custo mensal.
- [ ] **Responsável técnico** pelas senhas, pela hospedagem e pelos backups.
- [ ] **Canal para dúvidas dos moradores** nas primeiras semanas.

---

## Para a Paula decidir (não precisa da reunião)

- [ ] Ações das tabelas de Unidades e dos cartões de pets: trocar os botões de texto por ícones, como em Minha casa.
- [ ] Ícones próprios para "avaliação jurídica" (hoje `lock`; candidato `gavel`) e para o contrato (hoje `description`; candidato `badge`).
- [ ] Texto da faixa do Início da administradora (hoje é o mesmo dos moradores).
