

( () => {


    module.exports = ( config ) => {
        'use strict'
        // Jade views
        config.modules.gulp.task('pug', ( ) =>
            config.modules.gulp
            .src( [
                `${config.foldersPath.source}/**/*.pug`,
                `!${config.foldersPath.source}/**/include/**`,
                `!${config.foldersPath.source}/**/mixins/**`
            ])
            .pipe( config.modules.plumber() )
            .pipe( config.modules.pug({
                pretty: true
            }) )
            .pipe(config.modules.gulp.dest( `${config.foldersPath.build}` ))
        )
    }


} )()
