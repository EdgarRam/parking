

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('clean', ( ) =>
            config.modules.gulp
            .src( config.foldersPath.build )
            .pipe( config.modules.clean() )
        )


        config.modules.gulp.task('clean:dist', ( ) =>
            config.modules.gulp
            .src( config.foldersPath.dist )
            .pipe( config.modules.clean() )
        )
    }


} )()
