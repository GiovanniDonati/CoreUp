## Épico 1 — Definir o fluxo e a estrutura do produto

**Objetivo:** estabelecer os conceitos, regras e navegação mínimos antes de
expandir as funcionalidades.

### Tarefas

- [ ] **1.1 — Mapear os estados do ciclo de vida do projeto**
  - Definir os estados permitidos, suas transições e qual estado é inicial.
  - **Aceite:** os estados e as transições estão documentados e não permitem
    combinações contraditórias.
- [ ] **1.2 — Definir os campos e estados dos cards**
  - Definir título, descrição, prioridade, status e datas
    necessários para organizar o trabalho.
  - **Aceite:** cada campo tem finalidade, obrigatoriedade e valores válidos
    definidos.
- [ ] **1.3 — Definir o fluxo de uma sprint**
  - Especificar criação, planejamento, início, conclusão e cancelamento de uma
    sprint, incluindo o tratamento de cards incompletos.
  - **Aceite:** o fluxo descreve o que acontece com os cards em cada transição.
- [ ] **1.4 — Desenhar a navegação principal**
  - Definir como acessar projetos, quadro, sprints e visão geral.
  - **Aceite:** os principais percursos do usuário estão representados em
    wireframes ou descrições de tela.

## Épico 2 — Gerenciar projetos

**Objetivo:** permitir criar e acompanhar os projetos do usuário.

### Tarefas

- [ ] **2.1 — Criar, listar e consultar projetos**
  - Implementar operações de criação e consulta com nome, descrição e estado.
  - **Aceite:** um projeto criado aparece na listagem e pode ser aberto para
    consulta.
- [ ] **2.2 — Editar e arquivar projetos**
  - Permitir atualizar os dados do projeto e removê-lo da visão ativa sem
    apagar seu histórico.
  - **Aceite:** alterações são persistidas e projetos arquivados não aparecem
    por padrão na lista ativa.
- [ ] **2.3 — Exibir o ciclo de vida do projeto**
  - Mostrar e atualizar o estado do projeto conforme as regras definidas na
    tarefa 1.1.
  - **Aceite:** transições inválidas são rejeitadas e o estado atualizado é
    apresentado na interface.

## Épico 3 — Organizar o trabalho em quadros e cards

**Objetivo:** acompanhar itens de trabalho em um quadro por projeto.

### Tarefas

- [ ] **3.1 — Criar e consultar cards do projeto**
  - Implementar cards com os campos definidos na tarefa 1.2.
  - **Aceite:** cards são associados ao projeto correto e podem ser criados e
    consultados.
- [ ] **3.2 — Atualizar o status e a prioridade dos cards**
  - Validar os valores permitidos e persistir as alterações.
  - **Aceite:** status e prioridade atualizados permanecem corretos após
    recarregar o quadro.
- [ ] **3.3 — Exibir o quadro por grupos de status**
  - Apresentar os cards em colunas ou grupos baseados em seus estados.
  - **Aceite:** cada card aparece no grupo correspondente, inclusive após uma
    alteração de status.
- [ ] **3.4 — Editar e excluir cards**
  - Permitir corrigir os dados de um card e removê-lo com confirmação.
  - **Aceite:** alterações são persistidas e exclusões não ocorrem
    acidentalmente.
- [ ] **3.5 — Filtrar e ordenar cards**
  - Permitir localizar cards por texto e filtrar por status, prioridade e
    sprint.
  - **Aceite:** os filtros podem ser combinados e a interface indica quando
    nenhum card corresponde aos critérios.

## Épico 4 — Planejar e acompanhar sprints

**Objetivo:** organizar cards em ciclos de trabalho e acompanhar seu progresso.

### Tarefas

- [ ] **4.1 — Criar e editar sprints**
  - Registrar nome, datas e estado da sprint dentro de um projeto.
  - **Aceite:** datas inválidas são rejeitadas e sprints ficam associadas ao
    projeto correto.
- [ ] **4.2 — Planejar uma sprint com cards**
  - Adicionar e remover cards da sprint sem duplicá-los.
  - **Aceite:** um card não fica associado a mais de uma sprint ativa ao mesmo
    tempo.
- [ ] **4.3 — Iniciar e concluir sprints**
  - Aplicar as transições definidas na tarefa 1.3.
  - **Aceite:** transições inválidas são bloqueadas e cards não concluídos
    recebem o tratamento previsto no fluxo.
- [ ] **4.4 — Exibir progresso da sprint**
  - Mostrar total de cards e quantos estão concluídos, em andamento ou
    pendentes.
  - **Aceite:** os indicadores correspondem aos cards associados e são
    atualizados após mudanças.
- [ ] **4.5 — Consultar histórico de sprints**
  - Permitir visualizar sprints concluídas e seus resultados.
  - **Aceite:** a consulta histórica não altera cards nem sprints concluídas.

## Épico 5 — Disponibilizar visão geral e experiência utilizável

**Objetivo:** tornar o andamento de projetos e sprints compreensível em uma
visão consolidada.

### Tarefas

- [ ] **5.1 — Criar painel de projetos**
  - Exibir projetos ativos e seus estados em uma visão inicial.
  - **Aceite:** projetos arquivados ficam fora da visão padrão e cada projeto
    pode ser aberto a partir do painel.
- [ ] **5.2 — Exibir indicadores de andamento**
  - Apresentar progresso da sprint atual e distribuição dos cards por status.
  - **Aceite:** os indicadores usam dados persistidos e não exibem valores
    inconsistentes quando não há sprint ativa.
- [ ] **5.3 — Tratar estados de carregamento, vazio e erro**
  - Padronizar mensagens e ações para telas sem dados ou com falha de
    comunicação.
  - **Aceite:** a pessoa usuária consegue distinguir carregamento, ausência de
    dados e erro, com opção de tentar novamente quando aplicável.
- [ ] **5.4 — Validar usabilidade e acessibilidade básica**
  - Verificar navegação por teclado, rótulos de controles e adaptação a telas
    menores.
  - **Aceite:** fluxos principais podem ser usados sem mouse e sem perda de
    conteúdo em viewport móvel.

## Épico 6 — Garantir confiabilidade e publicação

**Objetivo:** proteger os dados e tornar a aplicação verificável e implantável.

### Tarefas

- [ ] **6.1 — Validar entradas e erros da API**
  - Validar payloads e retornar códigos e mensagens consistentes para dados
    inválidos ou recursos inexistentes.
  - **Aceite:** erros esperados não resultam em resposta genérica de sucesso
    nem expõem detalhes internos.
- [ ] **6.2 — Testar regras e fluxos principais**
  - Criar testes para projetos, cards e transições de sprint, incluindo casos
    inválidos.
  - **Aceite:** os testes cobrem os critérios de aceite dos fluxos críticos e
    podem ser executados localmente.
- [ ] **6.3 — Configurar banco de dados para os ambientes**
  - Separar configuração local e de produção, preparar migrations e documentar
    como aplicá-las no deploy.
  - **Aceite:** o deploy não depende de um arquivo SQLite local efêmero e
    migrations podem ser aplicadas de forma reproduzível.
- [ ] **6.4 — Configurar build e inicialização de produção**
  - Definir comandos de instalação, geração do Prisma Client, build e
    inicialização do servidor.
  - **Aceite:** um ambiente limpo consegue construir e iniciar a aplicação
    usando apenas as variáveis e instruções documentadas.
- [ ] **6.5 — Documentar configuração e operação**
  - Registrar pré-requisitos, variáveis de ambiente, comandos locais,
    migrations e procedimento de deploy.
  - **Aceite:** uma pessoa desenvolvedora consegue preparar o projeto seguindo
    a documentação, sem depender do banco SQLite de outra máquina.

## Ordem sugerida

1. Épico 1 — Definir fluxo e estrutura.
2. Épico 2 — Gerenciar projetos.
3. Épico 3 — Organizar quadros e cards.
4. Épico 4 — Planejar e acompanhar sprints.
5. Épico 5 — Disponibilizar visão geral.
6. Épico 6 — Garantir confiabilidade e publicação.

As tarefas de testes, configuração de produção e documentação podem começar
assim que seus respectivos fluxos e decisões estiverem definidos; não precisam
aguardar a conclusão de toda a interface.
