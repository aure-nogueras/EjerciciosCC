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
	if(controller.findInfoAndExperiences(nueva_experiencia) != -1){
		res.status(200).send("Borrado con éxito\n");
		controller.deleteInfoAndExperiences(nueva_experiencia);
	}else{
		res.status(404).send("No existe esa experiencia\n");
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
	if(controller.findInfoAndExperiences(nuevo_termino) != -1){
		res.status(200).send("Borrado con éxito\n");
		controller.deleteInfoAndExperiences(nuevo_termino);
	}else{
		res.status(404).send("No existe ese término\n");
	}
});

// Obtener todas las experiencias y términos
app.get('/', function (req, res) {
	res.send(controller.getInfoAndExperiencesList());
});


app.listen(port);
console.log('Server running at http://127.0.0.1:'+port+'/');

module.exports = express;
