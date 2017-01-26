module.exports = function(grunt) {

    var jsFilesToInject = [
        'js/jquery.js',
        'js/jquery.unviel.js',
        'js/zoomify.js',
        'js/app.js',
        'js/newdata.js',
        'js/custom.js'
    ];

    var cssFilesToInject = [
        'css/main/style.css'
    ];

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["js/min", "css/min"],
        uglify: {
            dist: {
                src: ['js/min/production.js'],
                dest: 'js/min/production.min.js'
            }
        },
        cssmin: {
            dist: {
                src: ['css/min/production.css'],
                dest: 'css/min/production.min.css'
            }
        },
        concat: {
            js: {
                src: jsFilesToInject,
                dest: 'js/min/production.js'
            },
            css: {
                src: cssFilesToInject,
                dest: 'css/min/production.css'
            }
        },
        tags: {
                buildJsProd: {
                    
                    options: {
                        scriptTemplate: '<script src="{{ path }}"></script>',
                        openTag: '<!-- SCRIPT START TAG -->',
                        closeTag: '<!-- SCRIPT END TAG -->'
                    },
                    src: [
                        'js/min/production.min.js'
                    ],
                    dest: 'index.html'
                },
                buildJsDev: {
                    
                    options: {
                        scriptTemplate: '<script src="{{ path }}"></script>',
                        openTag: '<!-- SCRIPT START TAG -->',
                        closeTag: '<!-- SCRIPT END TAG -->'
                    },
                    src: jsFilesToInject,
                    dest: 'index.html'
                },
                buildCssProd: {
                    options: {
                        linkTemplate: '<link href="{{ path }}" rel="stylesheet"/>',
                        openTag: '<!-- STYLE START TAG -->',
                        closeTag: '<!-- STYLE END TAG -->'
                    },
                    src: [
                        'css/min/production.min.css'
                    ],
                    dest: 'index.html'
                },
                 buildCssDev: {
                    options: {
                        linkTemplate: '<link href="{{ path }}"/>',
                        openTag: '<!-- STYLE START TAG -->',
                        closeTag: '<!-- STYLE END TAG -->'
                    },
                    src: cssFilesToInject,
                    dest: 'index.html'
                }
            }
    });

    // Load the plugin that provides the "concatenation" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-script-link-tags');

    // Default task(s).
    grunt.registerTask('prod', ['clean', 'concat', 'uglify', 'cssmin', 'tags:buildJsProd','tags:buildCssProd']);
    grunt.registerTask('dev', ['tags:buildJsDev','tags:buildCssDev']);

};
