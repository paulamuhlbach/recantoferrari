# Testes no computador: dados fictícios e roteiro

Guia para rodar o portal no seu computador com um condomínio de exemplo e testar cada perfil. Todos os dados são fictícios: nomes inventados e e-mails do domínio `example.com`, reservado para exemplos (nenhuma mensagem chega a alguém de verdade).

## 1. Preparar (uma vez, ou depois de cada `git pull`)

São dois programas rodando ao mesmo tempo, **cada um no seu terminal**: o backend (a API) e o site.

**Terminal 1 — backend** (pasta `C:\dev\recantoferrari-backend`):

```
venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m alembic upgrade head
python dados_ficticios.py --apagar
python -m uvicorn app.main:app --reload
```

- `dados_ficticios.py --apagar` pede para digitar **APAGAR**: apaga tudo o que houver no banco do computador e cria o condomínio de exemplo. Com o banco vazio, rode sem o `--apagar`.
- Deixe o terminal aberto. Quando aparecer `Uvicorn running on http://127.0.0.1:8000`, a API está no ar.

**Terminal 2 — site** (pasta `C:\dev\recantoferrari-frontend`):

```
npm install
npm run dev
```

Abra **http://localhost:5173**.

> Se o terminal do site mostrar `http proxy error ... ECONNREFUSED 127.0.0.1:8000`, o backend não está rodando: volte ao terminal 1.

**Nos dias seguintes:** basta `venv\Scripts\Activate.ps1` e `python -m uvicorn app.main:app --reload` no terminal 1, e `npm run dev` no terminal 2. Para voltar o condomínio ao começo (por exemplo, antes de uma rodada de testes com outra pessoa), rode de novo `python dados_ficticios.py --apagar`.

**E-mails:** nada é enviado. Cada e-mail aparece no **terminal do backend**, com o texto e os links, e uma cópia em HTML fica em `arquivos\emails-teste\` (abra no navegador para ver com a marca do condomínio).

## 2. Quem é quem

**Senha de todos: `teste1234`**

| Perfil | Nome | E-mail | Casa |
|---|---|---|---|
| Síndico (também administrador do site) | Carlos Menezes | carlos.menezes@example.com (ou CPF 529.982.247-25) | 07 |
| Subsíndico | Paulo Lima | paulo.lima@example.com | 03 |
| Presidente do conselho | Helena Barros | helena.barros@example.com | 11 |
| Conselho | Marta Souza | marta.souza@example.com | 05 |
| Administrador do site, com o termo | Rafael Torres | rafael.torres@example.com | 22 |
| Administradora do site, sem o termo | Beatriz Souza | beatriz.souza@example.com | 25 |
| Moradora, perfil principal | Ana Ribeiro | ana.ribeiro@example.com | 14 |
| Morador sem acesso financeiro | João Ribeiro | joao.ribeiro@example.com | 14 |
| Moradora com acesso financeiro | Lia Ribeiro | lia.ribeiro@example.com | 14 |
| Indicado, aguardando aprovação (não entra) | Lucas Ribeiro | lucas.ribeiro@example.com | 14 |
| Moradora locatária, perfil principal | Bia Costa | bia.costa@example.com | 02 |
| Administradora do condomínio: titular, com o termo | Juliana Prado | juliana.prado@example.com | — |
| Administradora do condomínio: substituto, sem o termo | Fernando Costa | fernando.costa@example.com | — |
| Ex-morador (inativo, não entra) | Pedro Santos | pedro.santos@example.com | saiu da 09 |
| Morador bloqueado (não entra) | Bianca Jardim | bianca.jardim@example.com | 17 |

Os outros moradores seguem o padrão `nome.sobrenome@example.com`; a lista completa está em **Pessoas** (menu da conta do síndico). Dica: use uma janela anônima do navegador para cada perfil e teste dois ao mesmo tempo (ex.: a moradora e o síndico).

## 3. O que tem no condomínio de exemplo

As datas partem do dia em que o script rodou: a oferta aberta, o prazo da leitura do mês e os avisos "futuros" sempre estão valendo.

- **Casas:** 30. Da 01 à 26 cadastradas; 27 e 28 com convite enviado e não aceito; 29 e 30 sem convite.
- **Casa 14 (Ana):** João (sem acesso financeiro), Lia (com acesso financeiro), Lucas indicado esperando a aprovação do síndico; pets Thor e Mia.
- **Administradora do condomínio:** contrato vigente com a "Administradora Exemplo Ltda.", vence em cerca de 2 meses.
- **Ouvidoria:** 9 demandas em todas as situações (nova, em andamento, respondida, concluída), uma sem identificação, 2 denúncias (uma em avaliação jurídica) e 5 categorias internas. A Ana tem uma demanda respondida ("Lâmpada queimada na rua interna").
- **Avisos:** 4, um fixado (assembleia), um com data e horário (limpeza da caixa d'água).
- **Documentos:** regimento, convenção, termos e política com textos de exemplo; coleta de lixo com dias e horários.
- **Ofertas de serviço:**
  - Corte de grama **aberta** (a Casa 14 ainda não respondeu: aparece no Início da Ana);
  - Desinsetização com **prazo encerrado** (a Casa 14 está inscrita);
  - Limpeza de caixa d'água **adiada, nova data a definir** (a Casa 14 está inscrita);
  - uma **realizada** no mês passado e uma **cancelada**.
- **Leitura do hidrômetro:** 6 meses de leituras com fotos de exemplo. No mês atual: 15 de 26 casas enviaram; a **Casa 14 ainda não** (aparece no Início da Ana); a Casa 09 está com **nova foto pedida**; a Casa 21 tem **consumo fora do padrão**; há leituras conferidas, para conferir e com atraso. A Casa 12 teve **troca de hidrômetro** no mês passado.
- **Cálculo da água:** os dois meses anteriores já calculados (R$ 12,50 por m³), com as listas prontas para exportar.

## 4. Roteiro de testes por perfil

Marque o que funcionou e anote o que estranhar: palavra difícil, botão que não achou, informação que faltou.

### Moradora, perfil principal (Ana)
- [ ] No Início: o aviso fixado, "Precisa da sua resposta" (corte de grama, leitura do hidrômetro e o alerta da caixa d'água adiada), Para você e a coleta de lixo.
- [ ] Aderir ao corte de grama: marcar a autorização e confirmar. Ver o e-mail de confirmação no terminal do backend.
- [ ] Cancelar a adesão pelo link do e-mail (`/servicos/cancelar/...`).
- [ ] Enviar a leitura do hidrômetro com uma foto qualquer do computador. Testar um número menor que o anterior (deve recusar) e depois corrigir a leitura.
- [ ] No histórico do hidrômetro, ver o valor da água dos meses calculados.
- [ ] Ouvidoria: enviar uma demanda com o nome e outra sem identificação; abrir "Minhas demandas" e ler a resposta da lâmpada.
- [ ] Minha casa: ver os moradores e os pets; indicar um morador novo; liberar ou tirar o acesso financeiro do João.
- [ ] Documentos e Avisos: ler o regimento e o mural.
- [ ] Menu da conta: Meu registro e Trocar a senha.

### Morador sem acesso financeiro (João) e com acesso (Lia)
- [ ] João: vê as ofertas, mas não consegue aderir (a tela explica que só o principal ou quem ele liberou aceita cobrança). Não vê o valor da água no histórico.
- [ ] Lia: consegue aderir e vê o valor da água.
- [ ] Os dois veem quem da casa aderiu e quem enviou a leitura.

### Síndico (Carlos)
- [ ] No Início: "Para a gestão" no alto, com as demandas novas e as denúncias não lidas.
- [ ] Unidades e Pessoas: aprovar o Lucas (Casa 14); ver o ex-morador e o bloqueado; reenviar um convite (Casas 27 e 28).
- [ ] Ouvidoria da gestão: responder uma demanda, mudar a situação, abrir uma denúncia (a leitura fica registrada) e encaminhar para avaliação jurídica.
- [ ] Avisos: publicar, editar, fixar e retirar.
- [ ] Gestão dos serviços (menu da conta): abrir uma oferta, editar uma com casas inscritas (as casas recebem e-mail), adiar, cancelar e exportar a lista para o boleto (Excel, PDF e CSV). Ligar o "e-mail a cada adesão" e aderir com a Ana para ver o aviso.
- [ ] Leituras das casas: filtrar, abrir a foto da Casa 21 (fora do padrão), conferir uma leitura, pedir nova foto, registrar troca de hidrômetro e exportar as leituras.
- [ ] Cálculo da água: calcular o mês atual (valor por m³ e rateio), ajustar o consumo de uma casa com motivo, calcular de novo e exportar.
- [ ] Contrato de administração: ver o contrato e prorrogar.
- [ ] Registro de atividades: ver o que cada pessoa fez durante os testes.

### Subsíndico, presidente do conselho e conselho
- [ ] Subsíndico (Paulo): publica avisos e documentos; não gerencia os serviços (a não ser que o síndico mude a configuração).
- [ ] Presidente do conselho (Helena): vê dados pessoais e lê denúncias, sem precisar do termo.
- [ ] Conselho (Marta): vê os números das denúncias, sem o conteúdo; vê as leituras das casas, mas não confere.

### Administrador do site e administradora do condomínio
- [ ] Beatriz (sem o termo): vê as listas sem os dados pessoais (código no lugar do nome, e-mail mascarado), só os números das leituras; recebe o pedido para assinar o termo.
- [ ] Rafael (com o termo): tem os mesmos poderes do síndico.
- [ ] Juliana (administradora, com o termo): vê o aviso de até quando vale o acesso, lê denúncias, confere leituras e calcula a água.
- [ ] Fernando (administradora, sem o termo): precisa assinar o termo antes de ver os dados.

### Quem não entra
- [ ] Lucas (aguardando aprovação), Pedro (ex-morador) e Bianca (bloqueada): o login explica por que não entra.

## 5. Também testar

- [ ] **Celular:** no navegador do computador, aperte F12 e escolha a visão de celular (ou abra pelo celular na mesma rede, rodando o site com `npm run dev -- --host`). Nenhuma tela deve ter rolagem para o lado.
- [ ] **Esqueci minha senha:** o link aparece no terminal do backend.
- [ ] **Configurações:** como síndico, em `http://127.0.0.1:8000/docs` (rotas `/configuracoes`), mudar um prazo ou um texto de e-mail e ver o efeito.

## 6. Anotar os resultados

Para cada problema: o perfil, a tela, o que fez, o que esperava e o que aconteceu (um print ajuda). Depois, é só me mandar a lista.
