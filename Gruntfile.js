/*
 * Assemble Plugin: Permalinks
 * https://github.com/assemble/permalinks
 *
 * Copyright (c) 2013 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var _ = grunt.util._;

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        plugins: ['./rss.js', 'permalinks'],
        assets: 'test/actual/assets',
        layout: 'test/fixtures/default.hbs',
      },
      // Feeds should not be generated
      no_opts: {
        options: {
          feed: {}
        },
        files: [
          {expand: true, cwd: 'test/fixtures/pages', src: ['**/*.hbs'], dest: 'test/actual/no_opts', ext: '.html'}
        ]
      },
      // Test multiple plugins together
      multiple_plugins: {
        options: {
          flatten: true,
          permalinks: {preset: 'pretty'},
          // Test RSS config using all custom options
          feed: {
            logging: true,
            format: true,
            author: 'Jon Schlinkert',
            dest: 'rss.xml',
            siteurl: 'http:/assemble.io',
            items: {}
          },
        },
        files: [
          {expand: true, cwd: 'test/fixtures/pages', src: ['**/*.hbs'], dest: 'test/actual/multiple_plugins', ext: '.html'}
        ]
      },     
      feeds: {
        options: {
          flatten: true,
          permalinks: {preset: 'pretty'},

          // Test RSS config using all custom options
          feed: {
            logging: true,
            format: true,
            author: 'Jon Schlinkert',
            dest: 'rss.xml',
            siteurl: 'http:/assemble.io',
            items: {}
          },
        },
        files: [
          {expand: true, cwd: 'test/fixtures/pages/feeds', src: ['*.hbs'], dest: 'test/actual/pages/feeds', ext: '.html'}
        ]
      }
    },

    // Before generating new files, remove any files from previous build.
    clean: {
      actual: ['test/actual/**'],
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('assemble');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'assemble', 'verb']);
};
