# Trilha de Backend — Desafio Comp Júnior (Semana 1 e 2)

## Descrição
Este repositório contém as entregas referentes às **semanas 1 e 2** do desafio de backend da **Comp Júnior**.  
O foco desta etapa é a criação do **banco de dados relacional** e sua **containerização com Docker**.

---

## Tecnologias Utilizadas

* **Backend:** Node.js
* **Framework:** Express
* **ORM:** Sequelize
* **Banco de Dados:** MySQL 8.0
* **Containerização:** Docker & Docker Compose

---

## Estrutura do Projeto

```text
projeto-matheus_castro-trilha-backend/
├── backend/
|   ├── config/
|   |   ├──config.js  # Configuração do Sequelize
|   |
|   ├── migrations/   # Migrações do banco (criar tabelas)
|   |   ├── 20251025-1-create-clientes.js 
|   |   ├── 20251025-2-create-compras.js
|   |   ├── 20251025-3-create-produtos.js
|   |   #
|   |   # ##Esses aquivos contém uma numeração (além da data) pois é 
|   |   #   necessária para serem executados na ordem certa 
|   |
|   ├── models/   # Modelos do Sequelize (cliente, compra, etc.)
|   |   ├── cliente.js
|   |   ├── compra.js
|   |   ├── index.js
|   |   ├── produto.js
|   |
|   ├── node_modules/ # (Ignorado pelo .gitignore)
|   |
|   ├── .env.example  # Exemplo de variáveis de ambiente
|   ├── .sequelizerc
|   ├── Dockerfile   # Receita para construir o container do backend
|   ├── package-lock.json
|   ├── package.json
|   ├── server.js   # Ponto de entrada da aplicação
|
├── .gitignore
├── docker-compose.yml   # Orquestrador dos serviços (backend + db)
├── README.md   # Este arquivo
```

---

## Banco de Dados
- Banco: **MySQL**
- Nome do banco: `loja`
- Entidades:
  - **clientes** → informações do cliente  
  - **produtos** → dados de produtos disponíveis  
  - **compras** → compra efetuada pelo cliente

O script `init.sql` cria automaticamente as três tabelas e define as chaves estrangeiras.

---

## Pré-requisitos

Certifique-se de ter o **Docker**, o **Docker Compose** e o **Git** instalados.
   ```bash
   docker -v
   docker compose version
   git -v
   ```
---

## Como rodar o projeto:

Siga os passos abaixo para executar a aplicação:

**1. Clone o Repositório**
```bash
git clone [URL_DO_SEU_REPOSITÓRIO_GIT]
cd projeto-matheus_castro-trilha-backend
docker compose up --build