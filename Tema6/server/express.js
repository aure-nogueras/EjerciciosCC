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
console.log('Server running at http://0.0.0.0:'+port+'/');

