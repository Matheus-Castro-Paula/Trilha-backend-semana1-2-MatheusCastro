# Projeto Backend — Desafio Comp Júnior (Semana 1 e 2)

## Descrição
Este repositório contém as entregas referentes às **semanas 1 e 2** do desafio de backend da **Comp Júnior**.  
O foco desta etapa é a criação do **banco de dados relacional** e sua **containerização com Docker**.

---

## Estrutura do Projeto
meu-projeto/
├── db/
│ └── init.sql # Script de criação do banco de dados
├── docker-compose.yml # Arquivo de configuração do Docker
└── README.md
---

## Banco de Dados
- Banco: **MySQL**
- Nome do banco: `loja`
- Entidades:
  - **clientes** → informações do cliente  
  - **produtos** → dados de produtos disponíveis  
  - **compras** → relacionamento entre cliente e produto

O script `init.sql` cria automaticamente as três tabelas e define as chaves estrangeiras.

---

## Containerização (Docker)
O projeto utiliza **Docker Compose** para simplificar a execução do banco de dados MySQL.

### Como executar

1. Certifique-se de ter o **Docker** e o **Docker Compose** instalados.
   ```bash
   docker --version
   docker compose version