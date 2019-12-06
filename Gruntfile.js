"use strict";

module.exports = function (grunt) {
    // Load all grunt tasks.
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // If any .less file changes in directory "less" then run the "less" task.
            files: "less/*.less",
            tasks: ["less"]
        },
        less: {
            // Production config is also available.
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["less/"],
                    compress: true
                },
                files: {
                    "styles.css": "less/styles.less"
                }
            }
        },
        concat_css: {
            options: {},
            all: {
                src: ["css/*.css"],
                dest: "styles.css"
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'styles.css': ['styles.css']
                }
            }
        }
    });
    // The default task (running "grunt" in console).
    grunt.registerTask("default", ["concat_css", "cssmin"]);
};