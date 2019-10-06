O que é o Redux?

É uma camada no topo do React, ajuda com gerenciamento de estados da aplicação.

Base do React
- Componentes
- Eventos
- Templates
- Props
- Forms

React Router
- Rotas
- Parametros de rotas
- Redirecionamentos

Redux
- Stores
- Actions
- Reducers

Diferenças de Componentes e UI Components

Components
- Possui estado
- Possui hooks de ciclo de vida 
- Não concerned com UI
- Usa classes para criar

UI Components
- Não tem estado
- Recebe dados via props
- Somente concerned com UI
- Usa funções para criar

Redux

- dados centralizados para toda aplicação
- qualquer componente pode acessar os dados dela
- gerenciamento de estado fácil

O redux é uma implementação de arquitetura de software chamado flux.
Store é uma fonte única no Redux. Os componentes apenas fazem a leitura da store, e nunca modificam diretamente nele.
Toda manipulação na store é feita através de uma função pura, chamada reducer. Recebe o estado e a ação.