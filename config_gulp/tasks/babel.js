

( () => {


    module.exports = ( config ) => {
        'use strict'
        // Jade views
        config.modules.gulp.task('babel', ( ) =>
            config.modules.gulp
            .src([
                `${config.foldersPath.source}/**/*.js`,
                `!${config.foldersPath.source}/bower_components/**`
            ])
            .pipe( config.modules.plumber() )
            .pipe( config.modules.babel( {
                presets: ['es2015']
            } ) )
            .pipe(config.modules.gulp.dest( `${config.foldersPath.build}` ))
        )
    }


} )()
