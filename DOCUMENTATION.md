# Documentação do Teste Técnico desenvolvido em JavaScript ES6 com Tailwind CSS

## Introdução

Este documento descreve a configuração e implementação da aplicação de cadastro de usuários usando JavaScript ES6, Tailwind CSS, JOI para validação de formulários, Toastify para notificações e Axios para requisições HTTP, conforme especificado no teste técnico da Nitronews.

# Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```frontend/
├── assets/
├── dist/
│   └── (arquivos gerados pelo build)
├── services/
│   ├── axiosInstance.js
│   └── User.js
├── utils/
│   ├── schema.js
│   └── toastifyLoading.js
├── index.css
├── index.html
└── index.js
```
# Descrição dos Arquivos e Pastas
**assets/**: Contém uma imagem para o background.

**dist/**: Pasta de saída dos arquivos após o build.

**services/**:

  `axiosInstance.js`: Configuração do Axios para realizar requisições HTTP.

  `User.js`: Classe com métodos para validar dados e enviar formulário para a API.

**utils/**:

  `schema.js`: Esquemas de validação JOI para o formulário de cadastro.

  `toastifyLoading.js`: Função para exibir notificações utilizando Toastify.

**index.css**: Arquivo CSS com configurações básicas e uso do Tailwind CSS.

**index.html**: Página HTML principal da aplicação.

**index.js**: Ponto de entrada da aplicação, utilizando DOM para interação com a interface.

# Configuração do Ambiente de Desenvolvimento

## Instalação de Dependências
Para começar, instale as dependências do projeto utilizando npm ou yarn:

```
npm install
# ou
yarn install
```
# Executando a Aplicação
O teste já está sendo entregue buildado, nesse caso: para iniciar o servidor de desenvolvimento e visualizar a aplicação em JavaScript ES6 com Tailwind CSS, execute o seguinte comando:

```
npm run dev
```

Isso abrirá automaticamente a aplicação no seu navegador padrão.

# Funcionalidades Implementadas

A aplicação implementa um formulário de cadastro de usuários com validação no front-end, seguindo as regras especificadas no README.md.

## Detalhes da Implementação
**Validação de Formulário com JOI**: Utilização do JOI para validar campos como nome, email, senha e confirmação de senha antes da submissão.

**Estilização com Tailwind CSS**: Utilização do Tailwind CSS para estilizar os elementos HTML de forma eficiente e responsiva.

**Notificações com Toastify JS**: Utilização do Toastify JS para exibir notificações ao usuário sobre erros de validação ou sucesso no cadastro.

**Requisições HTTP com Axios**: Utilização do Axios para realizar requisições HTTP para o backend.

# Interação com o Backend
As requisições para o backend são feitas no formato JSON e incluem o cabeçalho HTTP x-api-key com o valor ECA1AB4CE8583613A2C759B445E98. Erros de validação e respostas do backend são tratados.

# Detalhes da Interação
**Configuração de Requisições**: Utilização de Axios para enviar dados para o backend.

**Tratamento de Erros**: Implementação de tratamento de erros para casos de campos inválidos ou emails já cadastrados.
