# Descarga la última versión de alpine 
FROM alpine:latest as builder

# Indica el autor de la imagen
LABEL maintainer="Aure Nogueras <anogueras@correo.ugr.es>"

# Crea un directorio donde se almacenará el código de la aplicación
WORKDIR /app

# Copia del package.json y el package-lock.json
COPY package*.json ./

# Se instalan las dependencias
RUN apk add --update nodejs nodejs-npm && npm ci && npm install -g grunt-cli && npm install -g pm2

# Se añade un usuario para ejecutar sin permisos de superusuario
RUN adduser -D user
USER user

# Se copia el código y archivo de configuración del gestor de tareas
COPY *.js ./

EXPOSE 8080

CMD grunt server


