# Ejercicios tema 4

## Ejercicio 1

**1. Darse de alta. Muchos están conectados con GitHub por lo que puedes usar directamente el usuario ahí. A través de un proceso de autorización, acceder al contenido e incluso informar del resultado de los tests.**

Me he metido en *Travis*, donde he accedido a través de mi cuenta de *GitHub*.

![Perfil en Travis](./imgs/travis.png "Perfil en Travis")

**2. Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.**

Sigo los pasos indicados [aquí](https://docs.travis-ci.com/user/tutorial/?utm_source=help-page&utm_medium=travisweb). Primero accedo a los *settings* de mi perfil en *Travis*. Una vez ahí, se despliega una lista con mis repositorios. Selecciono el repositorio correspondiente al proyecto, [*LGBTClub*](https://github.com/aure-nogueras/LGBTClub).

![Activación de Travis en el repositorio](./imgs/lgbt_club.png "Activación de Travis en el repositorio")

**3. Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.**

Por último, creo el archivo [*.travis.yml*](https://github.com/aure-nogueras/LGBTClub/blob/main/.travis.yml) y lo añado al repositorio. Este es su contenido:

```
language: node_js
node_js:
- "8"
- "10"
- "12"

```

## Ejercicio 2

**2. Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.**

En el paso anterior he configurado *Travis* para mi aplicación. 

