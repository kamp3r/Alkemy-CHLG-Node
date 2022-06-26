# DISNEY API
## Por Martín Omar Heredia

Conforme al desafio solicitado desde Alkemy, para la tecnologia Node.js esta es mi implementacion de la API.

## Consideraciones

- La API fue construida en sintaxis de Javascript (ES6)
- Para aligerar la instalacion de elementos, se utilizo la implementacion de una base de datos en contenedor(docker)
- La misma fue probada y documentada con POSTMAN (Link a la documentacion de la API: https://documenter.getpostman.com/view/18646210/UzBsH46B)

## Scripts

```sh
    "dev": "nodemon server.js",
    "migrations:generate": "sequelize-cli migration:generate --name", (generaremos nuestras migraciones)
    "migrations:run": "sequelize-cli db:migrate", (ejecutaremos nuestras migraciones para poder verlas en nuestra base de datos)
    "migrations:revert": "sequelize-cli db:migrate:undo", (volvera atras en la ultima migracion)
    "migrations:delete": "sequelize-cli db:migrate:undo:all" (volvera atras todas las migraciones)
```

## Librerias utilizadas

### Dependencias
- @hapi/boom
- bcrypt
- dotenv
- express
- joi
- jsonwebtoken
- moment
- nodemailer
- passport
- passport-jwt
- passport-local
- pg
- pg-hstore
- sequelize

### Dependencias de desarrollo
- nodemon
- sequelize-cli

## Empezando..

Una vez descargado el repositorio, abrimos el proyecto con Visual Studio Code y ejecutamos:
```sh
npm install
```
para poder proceder con la instalacion de los paquetes.
Una vez que tengamos todo instalado podemos editar el archivo docker-compose a nuestro gusto, o dejarlo con la configuracion default.

Deberemos instalar docker si es que no lo tenemos en nuestro equipo, una vez finalizada la instalacion del mismo, para poder levantar el servicio de la base de datos y el administrador de la misma, debemos ejecutar los siguientes comandos desde nuestro terminal o el terminal integrado de VSC.

```sh
docker compose up -d postgresdb
docker compose up -d pgadmin
```

## Configuracion del archivo .env

```sh
#Puerto de ejecución.
PORT = PUERTO EN EL QUE DESEEMOS CORRER NUESTRO SERVIDOR
#Sequelize Configuration (Estos datos son los mismos que establecimos en el archivo docker-compose.yml)
DB_USER=admin
DB_PASSWORD=admin123
DB_NAME=disney_db
DB_HOST=localhost
DB_PORT=5432

#JWT Configuration
JWT_KEY=Esta sera nuestra secret key para JWT

#NODE MAILER CONFIGURATION
MAILER=debemos establecer la casilla de email de donde se enviaran nuestros correos
MAIL_PASS=y el pass de la misma para poder acceder al mismo
```
## Ejecturando el servidor

Para poner en marcha nuestro servidor, utilizaremos el comando:

```sh
npm run dev
```
El cual ejecutara nodemon en nuestro archivo server



## Licencia

MIT

