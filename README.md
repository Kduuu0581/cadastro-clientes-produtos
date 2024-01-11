# Projeto de Cadastro de Clientes e Produtos

## Visão Geral

Este projeto consiste em uma aplicação de cadastro simples para clientes e produtos, com a capacidade de associar produtos a clientes. A aplicação foi desenvolvida usando o framework Vue.js para o front-end.

## Decisões e Organização do Código
  O desenvolvimento do projeto de Cadastro de Clientes e Produtos foi uma experiência colaborativa e enriquecedora. Utilizei o framework Vue.js para criar uma aplicação front-end que permite cadastrar clientes, associar produtos a esses clientes e listar produtos e clientes cadastrados.

Organizei o código de forma modular, utilizando a estrutura de diretórios padrão do Vue.js. Componentes Vue reutilizáveis foram criados para garantir uma arquitetura escalável e manutenível. Além disso, implementei testes unitários utilizando as bibliotecas Mocha e Chai, assegurando a integridade das principais funcionalidades da aplicação.

O README.md fornece instruções claras sobre como instalar e executar o projeto. O processo de desenvolvimento envolveu decisões colaborativas sobre a estrutura do código, estilos de codificação e a organização de arquivos.

Este projeto é um exemplo prático de como utilizar o Vue.js para criar uma aplicação web interativa e funcional. Contribuições e melhorias são sempre bem-vindas, refletindo a natureza colaborativa do desenvolvimento de software.

Agradeço a oportunidade de trabalhar neste projeto e espero que ele seja útil para aprendizado e futuras colaborações.

## Estrutura de Diretórios

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

2. Entre na pasta:
   cd nome-do-repositorio
   
3. Instale as Dependências:
    npm install
   
4. Execute o Projeto
    npm run serve
    O projeto estará disponível em http://localhost:8080/ por padrão.
