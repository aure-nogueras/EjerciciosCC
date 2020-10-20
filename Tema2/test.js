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


