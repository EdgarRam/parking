

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('dist:js', ( ) =>{
            config.areas.forEach( area =>
                config.modules.gulp
                .src( [
                    `${config.foldersPath.build}/${area}/**/*.js`
                ])
                .pipe( config.modules.concat('all.js') )
                .pipe( config.modules.minifyJS() )
                .pipe(config.modules.gulp.dest( `${config.foldersPath.dist}/${area}/scripts` ))
            )

            config.modules.gulp
            .src( [
                `${config.foldersPath.build}/commons/**/*.js`
            ])
            .pipe( config.modules.concat('all.js') )
            .pipe( config.modules.minifyJS() )
            .pipe(config.modules.gulp.dest( `${config.foldersPath.dist}/commons/scripts` ))
        })


        config.modules.gulp.task('dist:css', ( ) =>
            config.modules.gulp
            .src( [
                `${config.foldersPath.build}/**/*.css`
            ])
            .pipe(  config.modules.cleanCSS() )
            .pipe( config.modules.gulp.dest( `${config.foldersPath.dist}` ))
        )


        config.modules.gulp.task('dist:index', ()=>
            config.modules.gulp
            .src( `${config.foldersPath.build}/**/index.html` )
            .pipe( config.modules.gulp.dest( `${config.foldersPath.dist}` ))
        )


        config.modules.gulp.task('dist', config.modules.sync.sync([
            'clean:dist',
            'generics',
            'copy:dist',
            'dist:js',
            'dist:css',
            'dist:index'
        ]) )

    }


} )()
