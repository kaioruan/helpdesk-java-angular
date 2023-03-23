FROM node:14

# define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia todos os arquivos do diretório raiz do host para o diretório de trabalho
COPY . .

# Instala as dependências do npm
RUN npm install

# Define o comando padrão que será executado quando o contêiner for iniciado
CMD ["npm", "start"]