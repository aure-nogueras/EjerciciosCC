# Ejercicios tema 5 (microservicios)

## Ejercicio 1

**Realizar una aplicación básica que use algún microframework para devolver alguna estructura de datos del modelo que se viene usando en el curso u otra que se desee. La intención de este ejercicio es simplemente que se vea el funcionamiento básico de un microframework, especialmente si es alguno que, como express, tiene un generador de código. Se puede usar, por otro lado, el lenguaje y microframework que se desee.**

Para este ejercicio he utilizado *node.js* y *express*. Como estructura de datos he seleccionado una clase relacionada con el proyecto que estoy realizando. Dicha clase contiene información sobre términos de la comunidad *LGTB* y experiencias personales. 

Una vez creada la [carpeta](./ej1) que contendrá el código, he usado `npm init` y `npm install express --save` para guardar *express* como dependencia del *package.json*. La carpeta contiene dos archivos: [*InfoAndExperiences.js*](./ej1/InfoAndExperiences.js), que define la estructura de datos mencionada, y [*express.js*](./ej1/express.js), que se usará para probar el funcionamiento de la interfaz REST.

El contenido de *express.js* es el siguiente:

```
#!/usr/bin/env node

var info = require("./InfoAndExperiences.js");

var express=require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/info', function (req, res) {
	  var inf = new info("Trans", "Que no se identifica con el género asignado al nacer", "");
    res.send(inf);
});

app.get('/experience', function (req, res) {
		var experience = new info("Experiencia", "Soy una persona gay que al fin ha podido casarse", "k_nl@gmail.com");
    res.send(experience);
});

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');
```

Ejecuto el comando `node express.js` y me dirijo a la dirección del servidor para comprobar que funciona correctamente.

Como se puede ver en la imagen, para la dirección http://127.0.0.1:8080/experience se obtiene correctamente la experiencia definida.

![Funcionamiento de GET en el servidor para una experiencia personal](./imgs/serv_exp.png "Funcionamiento de GET en el servidor para una experiencia personal")

En el caso de la dirección http://127.0.0.1:8080/info también se obtiene el término definido.

![Funcionamiento de GET en el servidor para obtener información](./imgs/serv_info.png "Funcionamiento de GET en el servidor para obtener información")


## Ejercicio 2

**Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.**

Voy a ampliar la aplicación creada en el ejercicio 2 para incluir variables. De este modo, he incluido el controlador de la clase *InfoAndExperiences.js*. El archivo con el que he probado la interfaz REST es [express.js](./ej2y3/express.js):

```
#!/usr/bin/env node

var info = require("./InfoAndExperiences.js");
var infoController = require("./InfoAndExperiencesController.js");
var controller = new infoController();

var express=require('express');
var app = express();
var port = process.env.PORT || 8080;


// Crea una experiencia
app.put('/experience/:name/:description/:email', function (req, res) {
	var nueva_experiencia = new info(req.params.name, req.params.description, req.params.email);
	controller.addInfoAndExperiences(nueva_experiencia);
	res.status(200).send(nueva_experiencia);
});

// Borra una experiencia
app.delete('/experience/:name/:description/:email', function (req, res) {
	var nueva_experiencia = new info(req.params.name, req.params.description, req.params.email);
	var mensaje;
	if(controller.findInfoAndExperiences(nueva_experiencia) != -1){
		mensaje = "Borrado con éxito\n"
		res.status(200).send({mensaje});
		controller.deleteInfoAndExperiences(nueva_experiencia);
	}else{
		mensaje = "No existe esa experiencia\n";
		res.status(404).send({mensaje});
	}
});


// Crea un término
app.put('/info/:name/:description/:email', function (req, res) {
	var nuevo_termino = new info(req.params.name, req.params.description, req.params.email);
	controller.addInfoAndExperiences(nuevo_termino);
	res.status(200).send(nuevo_termino);
});

// Borra un término
app.delete('/info/:name/:description/:email', function (req, res) {
	var nuevo_termino = new info(req.params.name, req.params.description, req.params.email);
	var mensaje;
	if(controller.findInfoAndExperiences(nuevo_termino) != -1){
		mensaje = "Borrado con éxito\n";
		res.status(200).send({mensaje});
		controller.deleteInfoAndExperiences(nuevo_termino);
	}else{
		mensaje = "No existe ese término\n";
		res.status(404).send({mensaje});
	}
});

// Obtener todas las experiencias y términos
app.get('/', function (req, res) {
	res.send(controller.getInfoAndExperiencesList());
});


app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');

module.exports = app;
```

Voy a comprobar ahora que funciona de forma adecuada. Para ello, primero utilizo PUT para crear una experiencia y un término nuevos:

![Uso de PUT](./imgs/put.png "Uso de PUT")

Ahora visualizo los datos creados en el navegador con GET:

![Uso de GET desde el navegador](./imgs/get.png "Uso de GET desde el navegador")

Por último, borro todo lo creado con DELETE:

![Uso de DELETE](./imgs/delete.png "Uso de DELETE")

Y puedo ver que, efectivamente, el navegador no devuelve ningún elemento si uso el GET de nuevo:

![Nuevo uso de GET desde el navegador](./imgs/get2.png "Nuevo uso de GET desde el navegador")


## Ejercicio 3

**Crear pruebas para las diferentes rutas de la aplicación.**

Voy a probar que funcionan correctamente las rutas creadas en el ejercicio 3. Para ello, he creado un archivo [*test.js*](./ej2y3/test/test.js) en la carpeta [*test*](./ej3y4/test). Además, he consultado información sobre el uso de la biblioteca *supertest* [aquí](https://www.npmjs.com/package/supertest).

Este es el contenido de *test.js*:

```
var request = require('supertest'),
app = require('../express.js');

describe("PUT experiencia", function(){
	it('Crea una experiencia', function(done){
		request(app)
			.put('/experience/Experiencia/Soy%20lesbiana/lisa@correo.es')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
});

describe("PUT info", function(){
	it('Crea información sobre un término', function(done){
		request(app)
			.put('/info/No%20binarie/No%20identificarse%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
});

describe("GET todas las experiencias y términos", function(){
	it('Obtiene todas las experiencias y términos', function(done){
		request(app)
			.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
});

describe("DELETE info", function(){
	it('Borra información sobre un término', function(done){
		request(app)
			.delete('/info/No%20binarie/No%20identificarse%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
});

describe("DELETE experiencia", function(){
	it('Borra información sobre una experiencia', function(done){
		request(app)
			.delete('/experience/Experiencia/Soy%20lesbiana/lisa@correo.es')
			.expect('Content-Type',/json/)
			.expect(200,done);
	});
});

describe("DELETE info", function(){
	it('Devuelve error al no encontrar el término', function(done){
		request(app)
			.delete('/info/No%20binarie/No%20identificarse%20como%20hombre%20ni%20como%20mujer/rodri@correo.es')
			.expect('Content-Type',/json/)
			.expect(404,done);
	});
});

describe("DELETE experiencia", function(){
	it('Devuelve error al no encontrar la experiencia', function(done){
		request(app)
			.delete('/experience/Experiencia/Soy%20lesbiana/lisa@correo.es')
			.expect('Content-Type',/json/)
			.expect(404,done);
	});
});
```

Después de ejecutar los tests usando `npm test`, vemos que todos ellos pasan, con lo que las rutas funcionan adecuadamente.

![Tests para comprobar el funcionamiento de las rutas](./imgs/tests.png "Tests para comprobar el funcionamiento de las rutas")



