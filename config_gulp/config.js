( ( ) => {

    const config = {};

    config.modules = {
        babel: require('gulp-babel'),
        clean: require('gulp-clean'),
        concat: require('gulp-concat'),
        fs: require('fs'),
        gulp: require('gulp'),
        cleanCSS: require('gulp-clean-css'),
        minifyJS: require('gulp-minify'),
        path:require('path'),
        plumber: require('gulp-plumber'),
        pug: require('gulp-pug'),
        server: require( 'gulp-server-livereload' ),
        stylus: require( 'gulp-stylus' ),
        sync: require( 'gulp-sync' )(require('gulp')),
        templateCache: require('gulp-angular-templatecache'),
        watch: require( 'gulp-watch' )
    };

    config.foldersPath = {
        build: './build',
        dist: './dist',
        rootPath: config.modules.path.join( __dirname, '../' ),
        source: './src',
        tasks: '../config_gulp/tasks'
    };


    config.areas = [
      'public',
      'private'
    ]

    config.fn ={
        readFolder: ( folder ) => {
            var PATH = config.modules.path.join( __dirname, folder )
            var FILES = config.modules.fs.readdirSync(PATH)

            FILES.forEach((file) => {
                if( `${file}`.search(".js") > -1 ){
                    require(`${config.foldersPath.tasks}/${file}`)(config)
                }
            });
        }
    }


    module.exports = config;

})();
