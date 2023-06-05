const sass = require('node-sass');

module.exports = function(grunt) {

    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
          root: '../',
          node: 'node_modules/',
          resources: '<%= paths.root %>Resources/',
          fonts: '<%= paths.resources %>Public/Fonts/',
          js: '<%= paths.resources %>Public/JavaScript/',
          sass: '<%= paths.resources %>Private/Scss/',
          css: '<%= paths.resources %>Public/Css/'
        },
        banner: '/*!\n' +
            ' * theme eahjena faculty v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2017-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',
        cssmin: {
          options: {
            keepSpecialComments: '*',
            advanced: false
          },
          theme: {
            src: '<%= paths.css %>theme.css',
            dest: '<%= paths.css %>theme.min.css'
          },
          themewebfonts: {
            src: '<%= paths.css %>themewebfonts.css',
            dest: '<%= paths.css %>themewebfonts.min.css'
          }
        },
        uglify: {
          all: {
              options: {
                  banner: '<%= banner %>',
                  mangle: true,
                  compress: true,
                  beautify: false
              },
              files: {
                  "<%= paths.js %>/Dist/scripts.js": [
                      "<%= paths.js %>Src/main.js"
                  ]
              }
          },
          togglecontrast: {
            src: '<%= paths.js %>Src/togglecontrast.js',
            dest: '<%= paths.js %>Dist/togglecontrast.min.js'
          },
      },
      sass: {
        options: {
          implementation: sass,
          outputStyle: 'expanded',
          precision: 8,
          sourceMap: false
        },
        theme: {
          files: {
            '<%= paths.css %>theme.css': '<%= paths.sass %>Theme/theme.scss'
          }
        },
        themewebfonts: {
          files: {
            '<%= paths.css %>themewebfonts.css': '<%= paths.sass %>Theme/themewebfonts.scss'
          }
        },
      },
      copy: {
        robotofontfacecondensed: {
          files: [
            {
              cwd: '<%= paths.node %>roboto-fontface/fonts/roboto-condensed/',
              src: '*',
              dest: '<%= paths.fonts %>roboto-condensed/',
              expand: true
            }
          ]
        }
      },
    });

    /**
  /**
   * Register tasks
   */
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  /**
   * Grunt update task
   */
  grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('build', ['css', 'uglify', 'copy']);
  grunt.registerTask('default', ['build']);

};
