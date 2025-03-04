# Usar a imagem base do Node.js
FROM node:22

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos do projeto para o container
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "server.js"]
