'use strict';

module.exports = function(grunt) {
  
  var testsrc = {
    expand: true, 
    cwd: 'test/', 
    src: ['*.hbs','!layout.hbs'], 
    dest: 'test/dest'
  };

  grunt.initConfig({

    assemble: {
      options: {
        //plugins: ['./rss.js'],
        layout: 'test/layout.hbs',
      },
      
      /** 
       * Test #1:
       * 
       * @expectation Feed does not generate.
       */
      'test-1': {
        options: {
          feed: { } // Leave this object empty
        },
        files: [ testsrc ]
      },
      
      /** 
       * Test #2:
       *
       * @desc Test multiple plugins together.
       * @expecation Generated feed successfully.
       */
      'test-2': {
        options: {
          flatten: true,
          permalinks: { 
            preset: 'pretty'
          },
          feed: {
            logging: true,
            format: true,
            author: 'Jon Doe',
            dest: 'feed.xml',
            siteurl: 'http://example.com',
            items: { }
          }
        },
        files: [ testsrc ]
      },
    
      /** 
       * Test #3:
       *
       * @desc Test assemble build without plugins.
       * @expecation Generated pages successfully.
       */
      'test-3': {
        files: [ testsrc ] 
      }
      
    },
    
    clean: { actual: ['test/dest'] }
    
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['clean', 'assemble', 'verb']);
  
};
