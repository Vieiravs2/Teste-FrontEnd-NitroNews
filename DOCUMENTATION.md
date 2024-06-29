# Documentação do Teste Técnico desenvolvido em React com Tailwind CSS

# Introdução
Este documento descreve a configuração e implementação da aplicação de cadastro de usuários usando React e TailwindCSS, conforme especificado no teste técnico da Nitronews.

# Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Input/
│   │   │   └── Input.jsx
│   │   ├── Label/
│   │   │   └── Label.jsx
│   │   └── LoadingToast/
│   │       └── LoadingToast.jsx
│   ├── pages/
│   │   └── RegisterForm/
│   │       ├── index.css
│   │       ├── img/
│   │       │   └── background.png
│   │       └── RegisterForm.jsx
│   ├── services/
│   │   ├── axiosInstance.js
│   │   └── User.js
│   ├── utils/
│   │   └── schema.jsx
│   │   └── typeErrors.jsx
│   ├── App.jsx
│   └── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── README.md
```
# Descrição dos Arquivos e Pastas

**src/**: Diretório principal dos arquivos fonte da aplicação.

**components/**: Componentes reutilizáveis da aplicação.

**pages/**: Páginas principais da aplicação.

**RegisterForm/**: Página de formulário de registro.

**index.css**: Arquivo CSS com configurações básicas e uso do Tailwind CSS.

**services/**: Lógica de serviço com métodos para validação de dados e interação com API.

**App.jsx, index.jsx**: Arquivos principais da aplicação React.

**package.json**: Arquivo de configuração do npm com scripts de build e desenvolvimento.

# Configuração do Ambiente de Desenvolvimento

## Instalação de Dependências

Para começar, acesse o diretório frontend com o comando:

```
cd frontend
```

Em seguida, instale as dependências do projeto utilizando npm ou yarn:

```
npm install
# ou
yarn install
```

# Executando a Aplicação

Para iniciar o servidor de desenvolvimento e visualizar a aplicação React, execute o seguinte comando:

```npm run dev
# ou
yarn dev
```

Isso abrirá automaticamente a aplicação no seu navegador padrão.

# Funcionalidades Implementadas

A aplicação em React implementa um formulário de cadastro de usuários com validação no front-end, seguindo as regras especificadas no README.md.

# Detalhes da Implementação

**Componentes Reutilizáveis**: Utilização de componentes como Input.jsx, Label.jsx e LoadingToast.jsx.

**Estilização**: Estilização feita com TailwindCSS.

**Integração com API**: Utilização de axiosInstance.js para realizar requisições HTTP para o backend, seguindo as especificações fornecidas no README.md.

**Validação de Dados**: Utilização de User.js para validar dados do formulário antes da submissão.

**Notificações**: Utilização de react-toastify para exibir mensagens de sucesso ou erro durante o registro.

# Interação com o Backend

As requisições para o backend são realizadas no formato JSON e incluem o cabeçalho HTTP x-api-key com o valor ECA1AB4CE8583613A2C759B445E98. Erros de validação e respostas do backend são tratados conforme descrito nas instruções do teste.
