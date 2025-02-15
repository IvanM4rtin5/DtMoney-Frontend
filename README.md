# 🚀 DT Money - Aplicação de Controle Financeiro


[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-DB7093?logo=styled-components)](https://styled-components.com/)

Este é um projeto de **controle financeiro** desenvolvido com **React, TypeScript e Styled Components**. A aplicação permite gerenciar transações financeiras, visualizar saldos e acompanhar o histórico de despesas e receitas. Desenvolvido junto com o curso da [@Rocketseat](https://rocketseat.com.br/).

---

## 🛠️ Tecnologias Utilizadas

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white" alt="Styled Components" />
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Context%20API-FF6B6B?logo=react&logoColor=white" alt="Context API" />
</div>

---

## 🧩 Funcionalidades

- **Cadastro de Transações**: Adicione entradas (receitas) e saídas (despesas) com descrição, valor e categoria.
- **Listagem de Transações**: Visualize todas as transações em uma tabela organizada.
- **Filtros**: Filtre transações por tipo (entrada/saída) e data.
- **Autenticação**: Controle de acesso com JWT (JSON Web Tokens).
- **Persistência de Dados**: Integração com uma API para salvar e recuperar transações.
- **Formatação**: Valores monetários e datas formatados para melhor visualização.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

1. Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode verificar a versão instalada com o comando:

```bash
node -v
```
**Passos para Rodar Localmente**
2. Clone este repositório:

```bash
Copy
git clone https://github.com/seu-usuario/dt-money.git
```
3. Navegue até a pasta do projeto:

```bash
Copy
cd dt-money
```
4. Instale as dependências:

```bash
Copy
npm install
```
5. Execute o projeto em modo de desenvolvimento:

```bash
Copy
npm start
```
O projeto estará rodando em http://localhost:3000.

### 📂 Estrutura do Projeto

```
Copy
dt-money/
├── public/               # Arquivos estáticos (HTML, ícones, etc.)
├── src/
│   ├── assets/           # Imagens e ícones
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Button/      # Componente de botão
│   │   ├── Dashboard/    # Componentes do dashboard
│   │   ├── Input/        # Componente de input
│   │   ├── NewTransactionModal/ # Modal para nova transação
│   │   ├── Summary/      # Resumo financeiro
│   │   └── TransactionsTable/ # Tabela de transações
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Páginas da aplicação
│   │   ├── signin/       # Página de login
│   │   ├── signup/       # Página de registro
│   │   └── transactions/ # Página de transações
│   ├── router/           # Configuração das rotas
│   ├── services/        # Integração com a API
│   ├── styles/           # Estilos globais
│   ├── App.tsx           # Componente principal
│   └── index.tsx         # Ponto de entrada da aplicação
├── .env                  # Variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação do projeto
├── package.json          # Dependências do projeto
├── tsconfig.json         # Configuração do TypeScript
└── yarn.lock             # Versões das dependências
```
### 💡 Meu Esforço e Dedicação
Este projeto foi desenvolvido com muito esforço e dedicação, buscando demonstrar minhas habilidades como desenvolvedor FullStack. Alguns dos desafios que enfrentei e superei incluem:

Integração com API: Configuração de requisições HTTP com Axios e tratamento de erros.

Gerenciamento de Estado: Uso da Context API para compartilhar dados entre componentes.

Design Responsivo: Criação de uma interface moderna e responsiva com Styled Components.

Acredito que este projeto reflete minha capacidade de trabalhar com tecnologias modernas e entregar soluções de alta qualidade.


### 📧 Contato
Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me enviar uma mensagem:

**Nome**: Ivan Martins

**E-mail**: ivanmarti.alves@gmail.com

**LinkedIn**: [https://www.linkedin.com/in/ivan-martins-alves/]


---
Obrigado por visitar meu projeto! Espero que ele demonstre minhas habilidades e meu comprometimento com a excelência no desenvolvimento de software. 😊
---
