# 🚀 DT Money - Financial Control Application


[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.13-DB7093?logo=styled-components)](https://styled-components.com/)

This is a **financial control** project developed with **React, TypeScript and Styled Components**. The application allows you to manage financial transactions, view balances and track the history of expenses and income. Developed together with the [@Rocketseat](https://rocketseat.com.br/) course.

---
![Image](https://github.com/IvanM4rtin5/DtMoney-Frontend/blob/main/DT_MONEY.png)
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

## 🧩 Features

- **Transaction Registration**: Add inputs (revenues) and outputs (expenses) with description, value and category.
- **Transaction List**: View all transactions in an organized table.
- **Filters**: Filter transactions by type (input/output) and date.
- **Authentication**: Access control with JWT (JSON Web Tokens).
- **Data Persistence**: Integration with an API to save and retrieve transactions.
- **Formatting**: Monetary values ​​and dates formatted for better visualization.

---
## 🚀 How to Execute the Project

1. Make sure you have **Node.js** installed on your machine. You can check the installed version with the command:
```bash
node -v
```
**Steps to Run Locally**
2. Clone this repository:

```bash
Copy
git clone https://github.com/IvanM4rtin5/DtMoney-Frontend.git
```
3. Navigate to the project folder:

```bash
Copy
cd dt-money
```
4. Install dependencies:

```bash
Copy
yarn install
```
5. Run the project in development mode:

```bash
Copy
yarn start
```
The project will be running at http://localhost:3000.

### 📂 Project Structure

```
Copy
dt-money/
├── public/               # Static files (HTML, ícones, etc.)
├── src/
│   ├── assets/           # Image and icons
│   ├── components/       # Reusable Components 
│   │   ├── Button/       # Component of button
│   │   ├── Dashboard/    # Component of dashboard
│   │   ├── Input/        # Component of input
│   │   ├── NewTransactionModal/ # Dialog for new transaction
│   │   ├── Summary/      # Financial summary
│   │   └── TransactionsTable/ # Table of transaction
│   ├── hooks/            # Custom Hooks
│   ├── pages/            # Application pages
│   │   ├── signin/       # Login page
│   │   ├── signup/       # Register page
│   │   └── transactions/ # Transaction page
│   ├── router/           # Route Management
│   ├── services/         # API integration
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main component
│   └── index.tsx         # Application entry point
├── .env # Environment variables
├── .gitignore            # Files ignored by Git
├── README.md             # Project documentation
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── yarn.lock             # Dependency versions
```
## 🔗 Related Links

- Backend Repository: [DT Money - Backend](https://github.com/IvanM4rtin5/DtMoney-BackEnd)

### 💡 My Effort and Dedication
This project was developed with a lot of effort and dedication, seeking to demonstrate my skills as a FullStack developer. Some of the challenges I have faced and overcome include:
API integration: Configuring HTTP requests with Axios and error handling.

State Management: Using the Context API to share data between components.

Responsive Design: Creation of a modern and responsive interface with Styled Components.

I believe that this project reflects my ability to work with modern technologies and deliver high-quality solutions.

### 📧 Contact
If you have any questions or want to get in touch, feel free to send me a message:

**Name**: Ivan Martins

**Email**: ivanmarti.alves@gmail.com

**LinkedIn**: [https://www.linkedin.com/in/ivan-martins-alves/]


---
Thanks for visiting my project! I hope it demonstrates my skills and my commitment to excellence in software development. 😊
---
