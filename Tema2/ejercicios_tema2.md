# Ejercicios tema 2

## Ejercicio 1

**Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).**

He elegido *nvm* como entorno virtual de *node.js*. Para proceder a su instalación, he accedido al [repositorio](https://github.com/nvm-sh/nvm) de *GitHub* enlazado en la documentación de los apuntes.

En primer lugar, he instalado *nvm* con el siguiente comando:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`

Después, para comprobar que la instalación ha sido exitosa he usado:

`command -v nvm`

Este comando devuelve `nvm`, lo que indica que se ha instalado correctamente. 

Para listar las versiones disponibles, he usado `nvm ls-remote`. La última versión disponible se instala con `nvm install node`. En este caso, ha resultado ser la versión *v14.14.0*.

La versión *minor* más actual de la *4.x* es la *v4.9.1*. La he instalado usando `nvm install 4.9.1`.

Por último, he instalado la versión *minor* más actual de la *0.11*, que es la *v0.11.16*:

`nvm install 0.11.16`


## Ejercicio 2

**Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.**

Primero he seleccionado la última versión de *nvm* con `nvm use node`. Después, para crear un archivo [*package.json*](./package.json) he utilizado `npm init`. Este es el contenido:


```
{
  "name": "ejercicio2",
  "version": "1.0.0",
  "description": "Prueba de package.json para el segundo ejercicio del tema 2 de CC",
  "main": "./Persona.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aure-nogueras/EjerciciosCC.git"
  },
  "author": "Aure Nogueras <anogueras@correo.ugr.es>",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/aure-nogueras/EjerciciosCC/issues"
  },
  "homepage": "https://github.com/aure-nogueras/EjerciciosCC#readme"
}
```

Para añadir la dependencia *sqlite*:

`npm install sqlite --save-prod`

Esto la guardará en *dependencies*, que quedarán así:

```
"dependencies": {
    "sqlite": "^4.0.15"
  }
}
```

Para documentar el código, se usa *Grunt*. La instalación se lleva a cabo con estos comandos:

```
npm install -g grunt cli
npm install docco grunt-docco --save-dev
```

Así, se almacenan estas dependencias en el *package.json*:

```
"devDependencies": {
    "docco": "^0.8.0",
    "grunt-docco": "^0.5.0"
  }
```
[Manual de *npm install*.](https://docs.npmjs.com/cli/install)

## Ejercicio 3

**Descargar el repositorio de ejemplo anterior, instalar las herramientas necesarias (principalmente Scala y sbt) y ejecutar el ejemplo desde sbt. Alternativamente, buscar otros marcos para REST en Scala tales como Finatra o Scalatra y probar los ejemplos que se incluyan en el repositorio.**

Primero actualizo con `sudo apt update`. A continuación, instalo *Scala* y *sbt*. Para ello, he seguido [este tutorial](http://www.codebind.com/linux-tutorials/install-scala-sbt-java-ubuntu-18-04-lts-linux/).

```
sudo wget www.scala-lang.org/files/archive/scala-2.12.12.deb
sudo dpkg -i scala-2.12.12.deb
```

Al hacer, `scala -version`, veo que la versión instalada es la *2.12.12*. Ahora instalo *sbt*:

```
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2EE0EA64E40A89B84B2DF73499E82A75642AC823
sudo apt-get update
sudo apt-get install sbt
```

A continuación sigo los pasos del [repositorio](https://github.com/JJ/spray-test):

```
git clone git@github.com:JJ/spray-test.git my-project
cd my-project
sbt
```

Dado que mi versión de *Java* provoca una excepción al ejecutar *sbt*, he instalado otra versión y la he seleccionado en la terminal siguiendo [estos pasos](https://www.digitalocean.com/community/tutorials/como-instalar-java-con-apt-en-ubuntu-18-04-es):

```
sudo apt install openjdk-8-jdk
sudo update-alternatives --config java
```

Una vez hecho esto, cambiando la versión de *Java* de la 11 a la 8, ya funciona *sbt*.

Entonces, ejecutamos los tests e iniciamos la aplicación:

```
test
re-start
```

Para probar el correcto funcionamiento, seguimos las pruebas indicadas en el repositorio obteniendo idénticos resultados:

```
$ curl http://localhost:8080
["routes", "get,post"]

$ curl -X PUT http://localhost:8080/0/0/Uno 
{
  "local": 0,
  "visitante": 0,
  "quien": "Uno"
}

$ curl -X PUT http://localhost:8080/0/1/Otro
{
  "local": 0,
  "visitante": 1,
  "quien": "Otro"
}                                                                              

$ curl -X PUT http://localhost:8080/3/1/Aquel
{
  "local": 3,
  "visitante": 1,
  "quien": "Aquel"
}                                                                              

$ curl http://localhost:8080/Aquel     
{
  "local": 3,
  "visitante": 1,
  "quien": "Aquel"
}
```

Por último, paramos la aplicación con `re-stop`.


## Ejercicio 4

**Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga. A continuación, ejecutarlos desde mocha (u otro módulo de test de alto nivel), usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.**

Dado que el proyecto creado para la asignatura aún no tiene tests, he creado un ejemplo en *node.js* para llevar a cabo el ejercicio. 

He creado un archivo llamado [*Persona.js*](./Persona.js) con el siguiente contenido:

``` 
// Clase Persona
class Persona{

	constructor(nombre, edad, profesion){
		this.nombre = nombre;
		this.edad = edad;
		this.profesion = profesion;
	}
	
	getNombre(){
		return this.nombre;
	}
	
	getEdad(){
		return this.edad;
	}
	
	getProfesion(){
		return this.profesion;
	}	
}

module.exports = Persona
```

Esta clase guarda el nombre, la edad y la profesión de un objeto persona. Para probar su funcionalidad, he creado un archivo [*test_assert.js*](./test_assert.js) que utiliza la librería *assert*.

```
var persona = require("./Persona.js"),
assert = require("assert");

var nueva_persona = new persona("Juan", 22, "estudiante");
assert(nueva_persona, "Creada persona");
assert.equal(nueva_persona.getNombre(), "Juan");
assert.equal(nueva_persona.getEdad(), 22);
assert.equal(nueva_persona.getProfesion(), "estudiante");
console.log("Ha pasado todos los tests");
```

Estos tests pueden llevarse a cabo desde la consola utilizando `node test_assert`. Tras ejecutarse, he comprobado que no se producen fallos.

A continuación, he añadido una nueva funcionalidad en los tests a partir de un *assert*. Esta función comprueba el color de ojos de una persona. 

```
assert.equal(nueva_persona.getColorOjos(), "azul");
```

No obstante, al no haber ningún atributo que indique esta característica ni ninguna función que devuelva el color de ojos, se produce un error.

```
assert.equal(nueva_persona.getColorOjos(), "azul");
                          ^
TypeError: nueva_persona.getColorOjos is not a function
    at Object.<anonymous> (/home/dylan/Escritorio/EjerciciosCC/Tema2/test_assert.js:9:28)
```

Para arreglar este error, incluyo los atributos y funciones que faltan en el archivo [*Persona.js*](./Persona.js).

```
constructor(nombre, edad, profesion, colorOjos){
	this.nombre = nombre;
	this.edad = edad;
	this.profesion = profesion;
	this.colorOjos = colorOjos;
}
	
...

getColorOjos(){
	return this.colorOjos;
}

```

Ahora incorporo el atributo *colorOjos* al constructor de los tests en el archivo [*test_assert.js*](./test_assert.js).

```
let nueva_persona = new persona("Juan", 22, "estudiante", "azul");
```

De este modo, al volver a ejecutar los tests con `node test_assert` ya no se produce ningún error.

El siguiente paso es utilizar *mocha*. Para instalarlo, he usado `npm install --save-dev mocha`. con lo que se almacena como dependencia en el [*package.json*](./package.json).

```
"devDependencies": {
    "docco": "^0.8.0",
    "grunt-docco": "^0.5.0",
    "mocha": "^8.2.0"
  }
```

He creado el nuevo archivo de tests llamado [*test.js*](./test.js).

```
var persona = require("./Persona.js"),
assert = require("assert");

describe('Persona', function(){

	// Prueba que se cargue bien la librería
	describe('Carga', function(){
		it('Debería cargar la librería de forma correcta', function(){
			assert(persona, "Cargada");
		});
	});	

	// Prueba que se haya creado el objeto persona
	describe('Crea', function(){
		it('Debería crear un objeto persona de forma correcta', function(){
			var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
			assert(nueva_persona, "Creada persona");
		});
	});
	
	// Prueba que el nombre se almacene bien
	describe('Obtener nombre', function(){
		it('Debería obtener el mismo nombre con el que se ha creado el objeto', function(){
			var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
			assert.equal(nueva_persona.getNombre(), "Juan");
		});
	});
	
	// Prueba que la edad se almacene bien
	describe('Obtener edad', function(){
		it('Debería obtener la misma edad con la que se ha creado el objeto', function(){
			var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
			assert.equal(nueva_persona.getEdad(), 22);
		});
	});
	
	// Prueba que la profesión se almacene bien
	describe('Obtener profesión', function(){
		it('Debería obtener la misma profesión con la que se ha creado el objeto', function(){
			var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
			assert.equal(nueva_persona.getProfesion(), "estudiante");
		});
	});
	
	// Prueba que el color de ojos se almacene bien
	describe('Obtener color de ojos', function(){
		it('Debería obtener el mismo color de ojos con el que se ha creado el objeto', function(){
			var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
			assert.equal(nueva_persona.getColorOjos(), "azul");
		});
	});

});

```

A continuación lo he añadido al *package.json*.

```
"scripts": {
    "test": "mocha"
  },
```

De este modo, al ejecutar `npm test`, se ejecutan los tests. Este es el resultado obtenido, que muestra que todos los tests pasan correctamente.

```
Persona
    Carga
      ✓ Debería cargar la librería de forma correcta
    Crea
      ✓ Debería crear un objeto persona de forma correcta
    Obtener nombre
      ✓ Debería obtener el mismo nombre con el que se ha creado el objeto
    Obtener edad
      ✓ Debería obtener la misma edad con la que se ha creado el objeto
    Obtener profesión
      ✓ Debería obtener la misma profesión con la que se ha creado el objeto
    Obtener color de ojos
      ✓ Debería obtener el mismo color de ojos con el que se ha creado el objeto


  6 passing (5ms)

```





