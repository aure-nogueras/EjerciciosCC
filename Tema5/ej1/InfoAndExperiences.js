/*jshint esversion: 6 */

// Clase InfoAndExperiences
class InfoAndExperiences{
	
	// La experiencia personal incluye un email 
	// Alude a la persona que añadió la experiencia
	constructor(name, description, email){
		this.name = name;
		this.description = description;
		this.email = email;
	}
	
	// Relacionado con la clase User
	getEmail(){
		return this.email;
	}
	
	// Relacionado con la HU 16
	getName(){
		return this.name;
	}
	
	// Relacionado con la HU 16
	getDescription(){
		return this.description;
	}
	
	// Relacionado con la modificación de términos y experiencias HU11
	setDescription(description){
		this.description = description;
	}
}

module.exports = InfoAndExperiences;
