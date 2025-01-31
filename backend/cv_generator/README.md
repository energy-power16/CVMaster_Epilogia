# cv_generator
A service that generates CVs

## Tools

- OpenJDK 17
- Maven
- Spring
- Docker
- PostgreSQL
- Flyway
- Swagger

## Running the application locally

```bash
docker compose up -d --build
```

## Clear database

```bash
docker volume rm cv_generator_postgres_data
```

## Stopping the application

```bash
docker compose down
```
## View CV generator logs

```bash
docker logs cv_generator-app-1
```

## Data for authorization in the DB

- ### For the CV generator database (PostgreSQL, port - 5432):
    - username: username
    - password: password

## Notes
- To view the Swagger specification, follow the link ```http://localhost:8080/swagger-ui/index.html``` after making sure the app is running.
- After cloning the project, don't forget to specify a valid api key in ```/src/main/resources/application.properties```.
- In the current version, Russian language support is not yet complete.
