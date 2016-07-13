

( () => {


    module.exports = ( config ) => {
        'use strict'

        config.modules.gulp.task('server', ( ) =>
            config.modules.gulp
            .src( config.foldersPath.build )
            .pipe( config.modules.server({
                livereload: true,
                directoryListing: false,
                open: true,
                defaultFile: 'index.html'
            }) )
        )
    }


} )()
