# Define a imagem base
FROM adoptopenjdk:17-jdk-hotspot-bionic

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e dependências do projeto para o contêiner
COPY pom.xml .
COPY src src

# Executa o comando Maven para compilar o projeto
RUN mvn package

# Define o comando de entrada para executar o JAR da aplicação
CMD ["java", "-jar", "target/app.jar"]
