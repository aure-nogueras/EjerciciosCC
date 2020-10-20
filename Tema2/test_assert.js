var persona = require("./Persona.js"),
assert = require("assert");

var nueva_persona = new persona("Juan", 22, "estudiante", "azul");
assert(nueva_persona, "Creada persona");
assert.equal(nueva_persona.getNombre(), "Juan");
assert.equal(nueva_persona.getEdad(), 22);
assert.equal(nueva_persona.getProfesion(), "estudiante");
assert.equal(nueva_persona.getColorOjos(), "azul");
console.log("Ha pasado todos los tests");
