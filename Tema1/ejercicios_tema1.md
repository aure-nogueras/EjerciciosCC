# Ejercicios

## Ejercicio 1

**Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?**

La aplicación que he elegido es un proyecto en el que estoy trabajando y que se encuentra en [este repositorio](https://github.com/aure-nogueras/Refranator). Se trata de un generador de refranes. El usuario accede a esta [url](https://refranator.herokuapp.com) y puede visualizar un refrán. Cada vez que se recarga la página, se muestra un refrán seleccionado de una lista aleatoriamente.

Esta aplicación consta de un archivo *JSON* donde se almacenan los refranes, varios archivos escritos en *Python* que obtienen la información del *JSON* y generan un refrán aleatorio y un archivo *HTML* con el contenido que aparecerá al acceder a la [url](https://refranator.herokuapp.com). Además, se ha usado *Flask* para la aplicación web y *Heroku* como plataforma para desplegar el servicio en la nube. La arquitectura utilizada es cliente/servidor. El usuario realiza una petición al acceder o recargar la página y se le muestra el contenido, dándole respuesta desde el servidor.

Esta arquitectura también podría considerarse de microservicios al dividir las tareas de modo que cada unidad funcional de la aplicación pueda desplegarse de forma independiente. Así, se podrían distinguir:

- Un servicio que contiene la lógica de la aplicación, seleccionando un refrán de forma aleatoria.
- Un servicio que despliega un contenido visible para los usuarios en una url.
- Un servicio que almacena los refranes.


## Ejercicio 2

**En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?**

Sí. En el caso de la lógica de la aplicación, se ha utilizado *Python*. Sin embargo, podría escogerse cualquier otro lenguaje, como *Java* o *Go*. Del mismo modo, cada uno de los servicios podría utilizar un lenguaje diferente y ofrecer la misma funcionalidad.

Con respecto al almacenamiento, se ha utilizado un archivo *JSON* que guarda los refranes. No obstante, sería mejor usar una base de datos no relacional como *MongoDB* que, utilizando un formato similar, sirviera como servicio independiente conectado al resto de funcionalidades de la aplicación.
