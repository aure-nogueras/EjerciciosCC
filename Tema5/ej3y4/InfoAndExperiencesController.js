/*jshint esversion: 6 */

var info = require("./InfoAndExperiences.js");

// Controlador de InfoAndExperiences
// En principio se usará un array de términos y experiencias personales
// Más adelante se conectará con una base de datos de donde se añadirán o eliminarán los elementos

class InfoAndExperiencesController{

	constructor(){
		this.infoAndExperiences = [];
	}
	
	getInfoAndExperiencesList(){
		return this.infoAndExperiences;
	}
	
	// Añadir un término o experiencia HU9
	addInfoAndExperiences(experience){
		this.infoAndExperiences.push(experience);
	}
	
	// Eliminar un término o experiencia HU11
	deleteInfoAndExperiences(experience){
		var pos = this.findInfoAndExperiences(experience);
		this.infoAndExperiences.splice(pos, 1);
	}
	
	findInfoAndExperiences(experience){
		var found = false;
		var pos = -1;
		for(var i=0; i<this.infoAndExperiences.length && !found; i++){
			if(JSON.stringify(this.infoAndExperiences[i]) === JSON.stringify(experience)){
				found = true;
				pos = i;
			}
		}
		return pos;
	}
	
	// Modificar la descripción de un término o experiencia HU12
	modifyInfoAndExperiences(experience, description){
		this.deleteInfoAndExperiences(experience);
		experience.setDescription(description);
		this.addInfoAndExperiences(experience);
	}
}

module.exports = InfoAndExperiencesController;

