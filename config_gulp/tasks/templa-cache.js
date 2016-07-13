

( () => {


    module.exports = ( config ) => {
        'use strict'
        // Jade views

        config.modules.gulp.task('templatesCache', ( ) =>{
            config.areas.forEach( area =>
                config.modules.gulp
                .src( [
                    `${config.foldersPath.build}/${area}/views/*.html`
                ])
                .pipe( config.modules.templateCache() )
                .pipe(config.modules.gulp.dest( `${config.foldersPath.build}/${area}/scripts/views/` ))
            )
        })
    }


} )()
