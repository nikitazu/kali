module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    bower_concat: {
      all: {
        dest: 'libs/_bower.js',
        cssDest: 'styles/_bower.css',
        exclude: [
          // any?
        ],
        dependencies: {
            // any?
        },
        bowerOptions: {
          relative: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default', ['jshint', 'bower_concat']);
};
