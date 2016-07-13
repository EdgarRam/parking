

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('copy', ( ) =>
            config.modules.gulp.src( config.foldersPath.source + '/bower_components/**/*' )
            .pipe( config.modules.gulp.dest( config.foldersPath.build + '/bower_components' ) )
        )


        config.modules.gulp.task( 'copy:dist', () =>
            config.modules.gulp.src( config.foldersPath.source + '/bower_components/**/*' )
            .pipe( config.modules.gulp.dest( config.foldersPath.dist + '/bower_components' ) )
        )


    }


} )()
