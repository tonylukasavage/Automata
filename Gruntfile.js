module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            build: {
                options: {
                    compress: {
                        global_defs: {
                            DEBUG: false
                        },
                        dead_code: true
                    }
                },
                files: {
                    'Resources/app.js': ['src/app.js']
                }
            },
            debug: {
                options: {
                    compress: {
                        global_defs: {
                            DEBUG: true
                        },
                        dead_code: false
                    }
                },
                files: {
                    'Resources/app.js': ['src/app.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Configure tasks.
    grunt.registerTask('build', ['uglify:build']);
    grunt.registerTask('debug', ['uglify:debug']);
    grunt.registerTask('default', ['build']);

};