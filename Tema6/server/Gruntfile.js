module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'run': {
    	start: {
    		cmd: 'pm2',
		  	args: ['start', './express.js'],
		},
		stop: {
			cmd: 'pm2',
			args: ['stop', 'all'],
		},
		delete: {
			cmd: 'pm2',
			args: ['delete', 'all'],
		},
		server: {
			cmd: 'node',
			args: ['./express.js'],
		}
    },
  });

  grunt.loadNpmTasks('grunt-run');
  
  // Default task(s).
  grunt.registerTask('start', 'run:start');
  grunt.registerTask('stop', 'run:stop');
  grunt.registerTask('delete', 'run:delete');
  grunt.registerTask('server', 'run:server');
  
};
