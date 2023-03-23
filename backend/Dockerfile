FROM eclipse-temurin:17-jdk-alpine
RUN mvn clear package
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]