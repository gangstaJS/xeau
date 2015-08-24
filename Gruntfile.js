module.exports = function(grunt) {


var css_src = [
  'css_src/normalize.css'
]

,sass_src = [
  'css_src/common.scss'
  ,'css_src/edit_storage.scss'
]

,src_files = [
  
];

// --

var conf = {
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        // stripBanners: true,
      },

      // main: {},

      extras: {
        src: [
          'build/js/lib/jquery-2.0.0.min.js',
          'build/js/lib/pluploader/plupload.full.min.js'
        ],

        dest: 'build/js/libs.js',
      },

      extras2: {
        src: sass_src,

        dest: 'build/css/common.min.css',
      }

      // --
    },

    sass: {  
      options: {
        // sourceMap: true,
        style: 'expanded',
        // compass: true
      },

      dist: {                    
        files: {
          'build/css/common.min.css': 'build/css/common.min.css'
        }
      }
    },

    autoprefixer:{
      dist:{
        files:{
          'build/css/common.min.css':'build/css/common.min.css'
        }
      }
    },

    // ---

    uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> greatozmen@gmail.com */\n',
          sourceMap: true,

          compress: {
            drop_debugger: false,
            drop_console: false
          }
        },

        dist: {
          files: {
            'build/js/mail.min.js': src_files
          }
        }
    },

    // --

    // sftp: {
    //   exMailDeploy: {
    //     files: {
    //       "./": [
    //       'js_build/*',
    //       'css_build/**/*',
    //       'css_src/**/*',
    //       'js_src/**/*',
    //       'template/**/*',
    //       'img/**/*'
    //       ]
    //     },
        
    //     options: {
    //       path: '/home/emailpub/htdocs/v1/exmail2',
    //       host: 'mail.ex.ua',
    //       username: 'emailpub',
    //       showProgress: true,
    //       createDirectories: true,
    //       privateKey: grunt.file.read('./secret/id_rsa')
    //     }
    //   }

    // },

    watch: {
      files: ['js_src/**/*.js', 'css_src/**/*.scss', 'build/lib/**/*.js'],
      // tasks: [
      //   'concat',
      //   'cssmin',
      //   'template',
      //   'uglify',
      //   // 'sftp',
      //   'watch'
      // ],

      options: {
        nospawn: true,
        event: ['changed', 'deleted'],
      }
    },

  };

  // require('load-grunt-tasks')(grunt);

  grunt.initConfig(conf);

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-template');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-autoprefixer');


  grunt.registerTask("default", 'default task', function() {

    grunt.task.run([
      'concat',
      'sass',
      'autoprefixer',
      'uglify',
      'watch'
    ]);

  });

  // --

  // grunt.registerTask("build", 'Build task', function() {
  //   src_files = src_files.concat(devLocalFiles);
  //   grunt.config(
  //     ['uglify', 'dist','files','js_build/mail.min.js'],
  //     src_files);

  //   grunt.task.run([
  //     'concat',
  //     'cssmin',
  //     'template',
  //     'uglify'
  //   ]);

  // });

};