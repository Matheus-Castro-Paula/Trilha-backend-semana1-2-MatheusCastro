FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# construir / executar migrations e depois iniciar app quando o container subir
CMD ["sh", "-c", "npx sequelize-cli db:migrate && node server.js"]
EXPOSE 3000
