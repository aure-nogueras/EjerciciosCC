module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'run': {
    	client: {
    		cmd: 'node',
		  	args: ['./client.js'],
		}
    },
  });

  grunt.loadNpmTasks('grunt-run');
  
  // Default task(s).
  grunt.registerTask('client', 'run');
  
};
