# 💼 Desafio Back-End Itaú — Versão TypeScript

Implementação do desafio técnico de back-end proposto pelo Itaú, originalmente em Java, agora adaptado para **Node.js com TypeScript**.  
O projeto fornece uma **API RESTful** com rotas para **transações** e **estatísticas em tempo real**, utilizando boas práticas modernas como:

- Testes automatizados com Jest e Supertest  
- Documentação Swagger com OpenAPI 3  
- Estrutura clara de rotas, serviços e middlewares  
- Monitoramento básico e métricas

Ideal para demonstrar domínio em **arquitetura de APIs**, **tratamento de dados** e **boas práticas de desenvolvimento back-end**.

---

## 🔗 Referência do Desafio Original

📎 Este projeto foi baseado no seguinte desafio técnico em Java:

👉 [https://github.com/feltex/desafio-itau-backend](https://github.com/feltex/desafio-itau-backend)

---

## 🚀 Tecnologias Utilizadas

- ✅ **Node.js** – Runtime JavaScript assíncrono e orientado a eventos
- 🟦 **TypeScript** – Superset do JavaScript com tipagem estática
- 🌐 **Express** – Framework web minimalista e flexível
- 🧪 **Jest + Supertest** – Testes unitários e de integração de rotas
- 📄 **Swagger (OpenAPI 3)** – Documentação interativa da API
- 🔧 **Lodash** – Utilitários para manipulação de dados

---

## 🧪 Funcionalidades da API

- `POST /transacao` – Cria uma nova transação
- `DELETE /transacao` – Remove todas as transações
- `GET /estatistica` – Retorna estatísticas das transações dos últimos 60 segundos
- `GET /status` – Verifica se a API está online

## 📁 Estrutura do Projeto

```bash
src/
├── controllers/     # Lógica das rotas
├── routes/          # Definição de endpoints
├── services/        # Regras de negócio
├── middlewares/     # Validações e interceptadores
├── tests/           # Testes com Jest e Supertest
├── app.ts           # Configuração da aplicação
└── server.ts        # Inicialização do servidor
```

## 📦 Pré-requisitos

- Node.js **v18 ou superior**
- npm ou yarn

---
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