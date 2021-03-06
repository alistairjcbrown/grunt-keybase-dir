/*
 * grunt-keybase-dir
 * https://github.com/alistairjcbrown/grunt-keybase-dir
 *
 * Copyright (c) 2014 Alistair Brown
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    keybase_dir: {
        sign:{},
        verify:{},
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'keybase_dir', 'nodeunit']);

  // Provide verify task
  grunt.registerTask('verify', ['keybase_dir:verify']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
