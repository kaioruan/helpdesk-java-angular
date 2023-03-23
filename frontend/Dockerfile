# Imagem base do Node.js com a versão LTS
FROM node:lts-alpine as build

# Diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos de configuração do package.json para o diretório de trabalho
COPY package.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Realiza o build da aplicação Angular
RUN npm run build

# Imagem base do Nginx
FROM nginx:alpine

# Copia os arquivos da aplicação para o diretório raiz do Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expõe a porta 80 para tráfego HTTP
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]