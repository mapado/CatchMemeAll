module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        coffee: {
            options: {
                join: true
            },
            files: {
                'server.js': ['server.coffee', 'server/*.coffee']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.registerTask('coffee', ["coffee"]);
};

