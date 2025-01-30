FROM maven:3.8.4-openjdk-17 AS build
COPY pom.xml /build/
COPY src /build/src/
WORKDIR /build/
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
EXPOSE 8080
ARG JAR_FILE=/build/target/*.jar
COPY --from=build /build/target/*.jar cv_generator.jar
ENTRYPOINT ["java", "-jar", "cv_generator.jar"]
