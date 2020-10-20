// Clase Persona
class Persona{

	constructor(nombre, edad, profesion, colorOjos){
		this.nombre = nombre;
		this.edad = edad;
		this.profesion = profesion;
		this.colorOjos = colorOjos;
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
	getColorOjos(){
		return this.colorOjos;
	}
		
}

module.exports = Persona
