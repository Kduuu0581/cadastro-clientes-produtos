# Projeto de Cadastro de Clientes e Produtos

## Visão Geral

Este projeto consiste em uma aplicação de cadastro simples para clientes e produtos, com a capacidade de associar produtos a clientes. A aplicação foi desenvolvida usando o framework Vue.js para o front-end.

## Decisões e Organização do Código

### Estrutura de Diretórios

- `src/`: Contém o código-fonte da aplicação.
  - `assets/`: Recursos estáticos, como imagens e fontes.
  - `components/`: Componentes Vue reutilizáveis.
  - `views/`: Componentes específicos de páginas.
  - `tests/`: Testes unitários usando Mocha e Chai.
- `public/`: Contém arquivos estáticos que não precisam ser processados pelo Webpack.

### Testes Unitários

Os testes unitários foram implementados usando o Mocha e o Chai, localizados no diretório `tests/`. Eles garantem a integridade básica dos componentes e a renderização correta.

## Instruções de Execução

### Requisitos

- Node.js (https://nodejs.org/)
- npm (gerenciador de pacotes do Node.js)

### Passos para Executar

1. **Clone o Repositório:**
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   
2. Instale as Dependências:
    npm install
   
4. Execute o Projeto
    npm run serve
    O projeto estará disponível em http://localhost:8080/ por padrão.
