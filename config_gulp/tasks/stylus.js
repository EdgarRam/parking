

( () => {


    module.exports = ( config ) => {
        'use strict'

        config.modules.gulp.task('stylus', ( ) =>
            config.modules.gulp
            .src( [
                `${config.foldersPath.source}/**/main.styl`
            ] )
            .pipe( config.modules.plumber() )
            .pipe( config.modules.stylus() )
            .pipe( config.modules.gulp.dest( `${config.foldersPath.build}` ) )
        )
    }


} )()
