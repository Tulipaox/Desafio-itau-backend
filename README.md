# 💼 Desafio Back-End Itaú — Versão TypeScript

Este projeto é uma implementação adaptada em Node.js + TypeScript do desafio técnico de back-end originalmente proposto em Java.

## 🔗 Referência do desafio original

Este projeto foi baseado no seguinte desafio técnico em Java:

👉 [https://github.com/feltex/desafio-itau-backend](https://github.com/feltex/desafio-itau-backend)

## 🧰 Tecnologias Utilizadas

- **Node.js** – Runtime JavaScript
- **TypeScript** – Superset de JS com tipagem estática
- **Express** – Framework web leve e flexível
- **Jest + Supertest** – Testes automatizados e integração
- **Swagger (OpenAPI 3)** – Documentação da API
- **Lodash** – Utilitários para manipulação de dados

🧪 Funcionalidades
- POST /transacao — Cria uma nova transação
- DELETE /transacao — Remove todas as transações
- GET /estatistica — Retorna estatísticas das transações dos últimos 60 segundos
- GET /status — Verifica se a API está online

### 📦 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn


## ⚙️ Como executar o projeto

### ▶️ Passos

```bash
1. **Clone o repositório:**

git clone https://github.com/seu-usuario/desafio-itau-backend.git
    cd desafio-itau-backend

2. Instale as dependências:
    npm install

3- (Opcional) Execute os testes:
    npm test

4- Inicie a aplicação:
    npm start

5- Acesse no navegador ou Postman, Insomnia
    (http://localhost:3000)

6- Documentação Swagger:
     http://localhost:3000/api-docs   