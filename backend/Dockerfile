# Define a imagem base a ser utilizada, que é a imagem Eclipse Temurin com o JDK 17 no Alpine Linux
FROM eclipse-temurin:17-jdk-alpine

# Define o diretório de trabalho como /app
WORKDIR /app

# Copia o arquivo pom.xml para o diretório atual do container
COPY pom.xml . 

# Instala o Maven e baixa todas as dependências do projeto especificadas no pom.xml. Em seguida, remove a pasta /root/.m2/repository para reduzir o tamanho da imagem.
RUN apk add --no-cache maven && \
    mvn dependency:go-offline && \
    rm -rf /root/.m2/repository

# Copia todos os arquivos da pasta src/ para o diretório /app/src/ do container
COPY src/ /app/src/

# Executa o comando mvn package para compilar e empacotar a aplicação. A opção -DskipTests é usada para pular a execução dos testes unitários. Em seguida, remove a pasta /root/.m2/repository para reduzir o tamanho da imagem.
RUN mvn package -DskipTests && \
    rm -rf /root/.m2/repository

# Expõe a porta 8080 para permitir que a aplicação seja acessada de fora do container
EXPOSE 8080

# Define o comando padrão a ser executado quando o container for iniciado, que é a execução do arquivo helpdesk-0.0.1-SNAPSHOT.jar gerado pelo Maven.
CMD ["java", "-jar", "target/helpdesk-0.0.1-SNAPSHOT.jar"]