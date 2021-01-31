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


