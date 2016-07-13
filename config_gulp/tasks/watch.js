

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task( 'watch', [ 'watch:babel', 'watch:stylus', 'watch:pug' ])


        config.modules.gulp.task( 'watch:babel', ( ) =>
            config.modules.gulp.watch( `${config.foldersPath.source}/**/*.js`, [ 'babel' ])
        )


        config.modules.gulp.task( 'watch:stylus', ( ) =>
            config.modules.gulp.watch(  `${config.foldersPath.source}/**/*.styl`, [ 'stylus' ])
        )


        config.modules.gulp.task( 'watch:pug', ( ) =>
            config.modules.gulp.watch(  `${config.foldersPath.source}/**/*.pug`, [ 'pug' ])
        )


    }


} )()
